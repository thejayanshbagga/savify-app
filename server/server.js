// Load environment variables only in non-production environments
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const jwt = require("jsonwebtoken");

const LAN_IP = process.env.EXPO_PUBLIC_LAN_IP || '127.0.0.1';

// Import routes
const authRoutes = require("./routes/auth");
const emailRoutes = require("./routes/email");
const splitRoutes = require("./routes/split"); // make sure this file uses CommonJS (module.exports = router)
const saveRoutes = require("./routes/save");


const scoreRoutes = require("./routes/score");

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

// Catch-all route for SPA fallback & API 404
app.get("*", (req, res) => {
    if (req.path.startsWith("/api") || req.path.startsWith("/auth")) {
        return res.status(404).json({ message: "API Route not found" });
    }
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// Log registered routes for debugging
console.log("\nRegistered Routes:");
app._router.stack
    .filter((r) => r.route)
    .forEach((r) => {
        const methods = Object.keys(r.route.methods)
            .map((m) => m.toUpperCase())
            .join(", ");
        console.log(`➡️  ${methods} ${r.route.path}`);
    });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

// Export for Vercel deployment
module.exports = app;
