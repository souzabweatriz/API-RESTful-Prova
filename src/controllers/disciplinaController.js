const disciplinaModel= require("../models/disciplinaModel");

const getAllDisciplinas = async (req, res) => {
    try {
        const disciplina = await disciplinaModel.getDisciplinas();
        res.json(disciplina);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar Disciplinas" });
    }
};

const getDisciplinaById = async (req, res) => {
    try {
        const disciplina = await disciplinaModel.getDisciplinaById(req.params.id);
        if (!disciplina) {
            return res.status(404).json({ message: "Disciplina não encontrada." });
        }
        res.json(disciplina);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Disciplinas." });
    }
};

const createDisciplina = async (req, res) => {
    try {
        const { professores_id, materia } = req.body;
        const newDisciplina = await disciplinaModel.createDisciplina(professores_id, materia);
        res.status(201).json(newDisciplina);
    } catch (error) {
	 console.log(error);
        res.status(400).json({ message: "Erro ao criar Disciplina" });
    }

};

const updateDisciplina = async (req, res) => {
    try {
        const { professores_id, materia } = req.body;
        const updatedDisciplina = await disciplinaModel.updateDisciplina(req.params.id, professores_id, materia);
        if (!updatedDisciplina) {
            return res.status(404).json({ message: "Disciplina não encontrada!" });
        }
        res.json(updatedDisciplina);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar Disciplina" });
    }
};

const deleteDisciplina = async (req, res) => {
    try {
        const message = await disciplinaModel.deleteDisciplina(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar Disciplina" });
    }
};

module.exports = { getAllDisciplinas, getDisciplinaById, updateDisciplina, createDisciplina, deleteDisciplina};