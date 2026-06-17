const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			dbName: process.env.DATABASE_NAME,
		});

		console.log("✅ MongoDB connected");
		console.log(`📁 Database: ${mongoose.connection.name}`);
	} catch (error) {
		console.error("❌ MongoDB connection error:", error.message);
		process.exit(1);
	}
};

module.exports = connectDB;
