const professorModel = require("../models/professorModel");

const getAllProfessores = async (req, res) => {
    try {
        const nome = req.query.nome;
        const professores = await professorModel.getProfessores(nome);
        res.json(professores);
    } catch (error) {
        res.status(404).json({ message: 'Erro ao buscar Professores' });
    }
};
;

const getProfessorById = async (req, res) => {
    try {
        const professores = await professorModel.getProfessorById(req.params.id);
        if(!professores){
            return res.status(404).json({ message: "Professor não encontrado!" });
        }
        res.json(professores)
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Professor" });
    }
};

const createProfessor = async (req, res) => {
    try {
        const {nome, email} = req.body
        const photo = req.file ? req.file.filename : null;
        const newProfessor = await professorModel.createProfessor(nome, email, photo);
        res.status(201).json(newProfessor);
    } catch (error) {
        console.log(error);
        if (error.code === "23505") {
            return res.status(400).json({ message: "Professor já existente!" });
        }
        res.status(500).json({ message: "Erro ao criar Professor!" });
    }
};


const updateProfessor = async (req, res) => {
    try {
        const { nome, email } = req.body;
        const updatedProfessor = await professorModel.updateProfessor(req.params.id, nome, email);
        if (!updatedProfessor) {
            return res.status(404).json({ message: "Professor não encontrado." });
        }
        res.json(updatedProfessor);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar Professor" });
    }
};


const deleteProfessor = async (req, res) => {
    try {
        const message = await professorModel.deleteProfessor(req.params.id)
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar Professor!" });
    }
};

module.exports = { getAllProfessores, getProfessorById, createProfessor, updateProfessor, deleteProfessor}