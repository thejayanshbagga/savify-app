require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI; // Ensure it's loaded from .env

async function testConnection() {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("✅ MongoDB Connected Successfully!");
        mongoose.connection.close();
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
    }
}

testConnection();
