require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const professorRoutes = require("./src/routes/professorRoutes");
const reportRoutes = require("./src/routes/reportRoutes");
const disciplinaRoutes = require("./src/routes/disciplinaRoutes")

app.use(cors());
app.use(express.json());

app.use("/api", reportRoutes);
app.use("/api", professorRoutes);
app.use("/api", disciplinaRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});