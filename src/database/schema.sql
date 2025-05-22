CREATE DATABASE aulas;

\c aulas

CREATE TABLE professores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(70) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL, 
    photo TEXT
);

SELECT * FROM professores;

CREATE TABLE disciplinas (
    id SERIAL PRIMARY KEY,
    materia VARCHAR(50),
    professores_id INTEGER REFERENCES professores(id) NOT NULL
);


SELECT * FROM disciplinas;

INSERT INTO professores (nome, email, photo) VALUES 
    ('Thiago Ferreira', 'thiago@email.com', '/images/thiago.jpg'),
    ('Marcelo Carboni', 'marcelo@email.com', '/images/marcello.jpg'),
    ('Pereira', 'pereirao@email.com', '/images/pereira.jpg'),
    ('Ivonete', 'nenete@email.com', '/images/ivonete.jpg'),
    ('Alecio Cau', 'aleciao@email.com', '/images/alecio.jpg'),
    ('Tamires', 'tamires@email.com', '/images/tamires.jpg'),
    ('Daniela', 'dani@email.com', '/images/dani.jpg'),
    ('Gatinho Dev', 'gatinho@email.com', '/images/gatinho.jpg');


    INSERT INTO disciplinas (professores_id, materia) VALUES 
    (1, 'Back-End'),
    (2, 'Mobile'),
    (3, 'Matemática'),
    (4, 'Português'),
    (5, 'Física'),
    (6, 'Biologia');