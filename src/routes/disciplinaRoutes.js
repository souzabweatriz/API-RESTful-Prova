const express = require("express");
const router = express.Router();
const apiKeyMiddleware = require("../config/apiKey");
const upload = require("../config/upload.js"); 
const disciplinaController = require("../controllers/disciplinaController.js");

router.get("/disciplinas", disciplinaController.getAllDisciplinas);
router.get("/disciplinas/:id", disciplinaController.getDisciplinaById);
router.post("/disciplinas", disciplinaController.createDisciplina);
router.put("/disciplinas/:id", disciplinaController.updateDisciplina);
router.delete("/disciplinas/:id", disciplinaController.deleteDisciplina);

module.exports = router;