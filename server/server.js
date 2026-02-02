// Load environment variables only in non-production environments
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import passport from 'passport';
import session from 'express-session';
import jwt from 'jsonwebtoken';

dotenv.config();


const LAN_IP = process.env.EXPO_PUBLIC_LAN_IP || '127.0.0.1';

// Import routes
import authRoutes from './routes/auth.js';
import emailRoutes from './routes/email.js';
import splitRoutes from './routes/split.js';
import saveRoutes from './routes/save.js';
import investmentRoutes from './routes/investment.js';
import expenseRoutes from './routes/expense.js';
import scoreRoutes from './routes/score.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Environment-based redirect URI
const callbackURL =
    process.env.NODE_ENV === "production"
        ? process.env.REDIRECT_URI_PROD
        : process.env.REDIRECT_URI_LOCAL;

// Session configuration
app.use(
    session({
        secret: process.env.SESSION_SECRET || "savifySecret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000, // 1 day
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        },
    })
);

// Passport setup
app.use(passport.initialize());
app.use(passport.session());

// (Google OAuth temporarily disabled)
// passport.serializeUser((user, done) => done(null, user));
// passport.deserializeUser((user, done) => done(null, user));

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: callbackURL,
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log("Google profile:", profile);
//       return done(null, profile);
//     }
//   )
// );

// Generate JWT after successful Google login
function generateToken(profile) {
    return jwt.sign(
        {
            id: profile.id,
            name: profile.displayName,
            email: profile.emails?.[0]?.value,
        },
        process.env.JWT_SECRET || "tempJWTSecret",
        { expiresIn: "1d" }
    );
}

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/savify";
mongoose
    .connect(MONGO_URI, {
        dbName: "savify",
    })
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => console.error("MongoDB Connection Error:", err));

mongoose.connection.once("open", () => {
  console.log("Connected to Mongo DB:", mongoose.connection.name);
});


// Serve static frontend files (if deployed together)
app.use(express.static(path.join(__dirname, "../public")));

// CORS setup
app.use(
  cors({
    origin: [
      `http://${LAN_IP}:8081`,
      `exp://${LAN_IP}:8081`,
      `http://${LAN_IP}:5000`,
      "https://savify.ca",
    ],
    credentials: true,
  })
);


// Register routes BEFORE catch-all
app.use("/api/auth", authRoutes);
app.use("/api", emailRoutes);
app.use("/api/splits", splitRoutes); // pluralized here for REST convention
app.use("/api/saves", saveRoutes);

app.use("/api/scores", scoreRoutes);

app.use('/api/investments', investmentRoutes);
app.use('/api/expenses', expenseRoutes);

// Catch-all route for SPA fallback & API 404
// app.get("*", (req, res) => {
//     if (req.path.startsWith("/api") || req.path.startsWith("/auth")) {
//         return res.status(404).json({ message: "API Route not found" });
//     }
//     res.sendFile(path.join(__dirname, "../public", "index.html"));
// });

// Log registered routes for debugging
console.log("\nRegistered Routes:");
app._router.stack
    .filter((r) => r.route)
    .forEach((r) => {
        const methods = Object.keys(r.route.methods)
            .map((m) => m.toUpperCase())
            .join(", ");
    });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/debug/users", async (req, res) => {
  const users = await mongoose.connection.collection("users").find({}).toArray();
  res.json(users);
});


// Export for Vercel deployment
export default app;
