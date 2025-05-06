CREATE DATABASE aulas;

\c aulas

CREATE TABLE professores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(70) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO professores (nome, email) VALUES 
    ('Thiago Ferreira', 'thiago@email.com'),
    ('Marcelo Carboni', 'marcelo@email.com');

ALTER TABLE professores ADD COLUMN photo TEXT;

SELECT * FROM professores;

CREATE TABLE disciplinas (
    id SERIAL PRIMARY KEY,
    materia VARCHAR(50),
    professores_id INTEGER REFERENCES professores(id) NOT NULL
);

INSERT INTO disciplinas (professores_id, materia) VALUES 
(1, 'Back-End'),
(2, 'Mobile');

SELECT * FROM disciplinas;
