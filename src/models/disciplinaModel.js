const pool = require("../config/database");

const getDisciplinas = async () => {
    const result = await pool.query("SELECT * FROM disciplinas");
    return result.rows;
};

const getDisciplinaById = async (id) => {
    const result = await pool.query('SELECT * FROM disciplinas WHERE id = $1', [id]
    );
    return result.rows[0];
};

const createDisciplina = async (professores_id, materia) => {
    const result = await pool.query(
        "INSERT INTO disciplinas (professores_id, materia ) VALUES ($1, $2) RETURNING *",
        [professores_id, materia]
    );
    return result.rows[0];
};

const updateDisciplina = async (id, professores_id, materia) => {
    const result = await pool.query(
        'UPDATE disciplinas SET professores_id = $1, materia = $2 WHERE id = $3 RETURNING*',
    [professores_id, materia, id]
    );
    return result.rows[0];
};

const deleteDisciplina = async (id) => {
    const result = await pool.query("DELETE FROM disciplinas WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0){
        return {error: "Disciplina não encontrada"}
    }
    return { message: "Disciplina deletada com sucesso"}
};

module.exports = {getDisciplinaById, getDisciplinas, updateDisciplina, createDisciplina, deleteDisciplina}