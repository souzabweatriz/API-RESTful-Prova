const pool = require("../config/database");

const getProfessores = async (nome) => {
    if (nome) {
        const result = await pool.query(
            'SELECT * FROM professores WHERE nome ILIKE $1',
            [`%${nome}%`]
        );
        return result.rows;
    }else{
        const result = await pool.query("SELECT * FROM professores");
        return result.rows;
    }
};

const getProfessorById = async (id) => {
    const result = await pool.query('SELECT * FROM professores WHERE id = $1', [id]
    );
    return result.rows[0];
};


const createProfessor = async (nome, email, photo) => {
    const result = await pool.query(
        'INSERT INTO professores (nome, email, photo) VALUES ($1, $2, $3) RETURNING*', [nome, email, photo]
    );
    return result.rows[0];
};  //COM FOTO!!

const updateProfessor = async (id, nome, email) => {
    const result = await pool.query(
        'UPDATE professores SET nome = $1, email = $2 WHERE id = $3 RETURNING*',
    [nome, email, id]
    );
    return result.rows[0];
};


const deleteProfessor = async (id) => {
    const result = await pool.query('DELETE FROM professores WHERE id = $1 RETURNING*', [id]
    );
    if (result.rowCount === 0) {
        return { error: "Professor não encontrado" };
    }
    return { message: "Professor deletado com sucesso!" };
};

module.exports = { getProfessores, getProfessorById, createProfessor, updateProfessor, deleteProfessor}