// ✅ Load environment variables only in non-production environments
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
const LAN_IP = '192.168.2.159';
const { OAuth2Client } = require('google-auth-library');
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const allowedAudiences = [
  process.env.GOOGLE_CLIENT_ID,           // Web / Expo (you already have)
  process.env.GOOGLE_EXPO_CLIENT_ID,      // add this to .env
  process.env.GOOGLE_IOS_CLIENT_ID,       // add this to .env
  process.env.GOOGLE_ANDROID_CLIENT_ID,   // add this to .env
].filter(Boolean);


// const googleAuthRoutes = require("./routes/googleAuth");
const authRoutes = require("./routes/auth");
const emailRoutes = require("./routes/email");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Environment-based redirect URI
const callbackURL =
  process.env.NODE_ENV === "production"
    ? process.env.REDIRECT_URI_PROD
    : process.env.REDIRECT_URI_LOCAL;

    app.use(
        session({
          secret: process.env.SESSION_SECRET || "savifySecret", // Use an environment variable in production
          resave: false,
          saveUninitialized: false,
          cookie: {
            maxAge: 24 * 60 * 60 * 1000, // 1 day
            secure: process.env.NODE_ENV === "production", // Use secure cookies in production
            sameSite: "lax",
          },
        })
      );


// ✅ Verify Google ID token from mobile and issue your own JWT
app.post('/api/auth/google/token', async (req, res) => {
  try {
    const { idToken } = req.body;
    if (!idToken) return res.status(400).json({ message: 'Missing idToken' });

    const ticket = await googleClient.verifyIdToken({
      idToken,
      audience: allowedAudiences,
    });
    const payload = ticket.getPayload(); // {sub, email, name, picture, ...}

    // Build a profile-like object compatible with generateToken
    const profile = {
      id: payload.sub,
      displayName: payload.name,
      emails: [{ value: payload.email }],
    };

    const jwtToken = generateToken(profile);

    // TODO: upsert user in Mongo if you want persistence
    // await User.findOneAndUpdate(...)

    res.json({
      token: jwtToken,
      user: {
        id: payload.sub,
        name: payload.name,
        email: payload.email,
        picture: payload.picture,
      },
    });
  } catch (err) {
    console.error('Google token verification failed:', err);
    res.status(401).json({ message: 'Invalid Google token' });
  }
});

// ✅ Passport setup
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: callbackURL,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("🔑 Google profile:", profile);
      return done(null, profile);
    }
  )
);

// ✅ Generate JWT after successful Google login
function generateToken(profile) {
  return jwt.sign(
    {
      id: profile.id,
      name: profile.displayName,
      email: profile.emails?.[0]?.value,
    },
    process.env.JWT_SECRET || "tempJWTSecret", // Replace in .env for production
    { expiresIn: "1d" }
  );
}


// ✅ MongoDB connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/savify";
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "savify",
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Serve static frontend files from "public" directory
app.use(express.static(path.join(__dirname, "../public")));

app.use(cors({
  origin: [
    'http://localhost:19006',         // Expo web tools
    'http://192.168.2.159:19006',     // Expo LAN web preview
    'exp://192.168.2.159:19000',      // Expo Go on device
    'http://192.168.2.159:5000',      // direct API calls
    'https://savify.ca'
  ],
  credentials: true
}));

// ✅ Register routes BEFORE catch-all
app.use("/api/auth", authRoutes);
app.use("/api", emailRoutes);
// app.use("/auth", googleAuthRoutes); // Google OAuth routes

// ✅ Catch-all route (for SPA support & fallback)
app.get("*", (req, res) => {
  if (req.path.startsWith("/api") || req.path.startsWith("/auth")) {
    return res.status(404).json({ message: "API Route not found" });
  }
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// ✅ Log registered routes for debugging
console.log("\n✅ Registered Routes:");
app._router.stack
  .filter((r) => r.route)
  .forEach((r) => {
    const methods = Object.keys(r.route.methods)
      .map((m) => m.toUpperCase())
      .join(", ");
    console.log(`➡️  ${methods} ${r.route.path}`);
  });

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// ✅ Export for Vercel deployment
module.exports = app;