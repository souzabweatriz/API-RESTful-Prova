const express = require("express");
const router = express.Router();
const professorModel = require("../models/professorModel");
const apiKeyMiddleware = require("../config/apiKey");
const upload = require("../config/upload.js"); 
const professorController = require("../controllers/professorController.js")

router.use(apiKeyMiddleware);

router.get("/professores", professorController.getAllProfessores)
router.get("/professores/:id", professorController.getProfessorById);
router.post("/professores", upload.single("photo"), professorController.createProfessor);
router.put("/professores/:id", professorController.updateProfessor);
router.delete("/professores/:id", professorController.deleteProfessor);

module.exports = router;