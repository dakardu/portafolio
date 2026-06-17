require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const projectRoutes = require("./src/routes/projectRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/projects", projectRoutes);

connectDB();

app.get("/", (req, res) => {
	res.json({
		message: "Portfolio API funcionando",
	});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`🚀 Servidor iniciado en puerto ${PORT}`);
});
