/* This file is used to setup the database for the project. */
/* use mariaDB for the query */

CREATE TABLE Admin (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(15),
    dataNascimento DATE
);

CREATE TABLE Cuidadores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(15),
    dataNascimento DATE,
    imagem VARCHAR(255),
    endereco VARCHAR(255),
    cidade VARCHAR(255),
    estado VARCHAR(255),
    pais VARCHAR(255)
);

CREATE TABLE AnimaisCadastrados (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    raca VARCHAR(255),
    idade VARCHAR(50),
    imagem VARCHAR(255)
);

CREATE TABLE Comentarios (
  comentario_id INT PRIMARY KEY,
  animal_id INT,
  usuario_id INT,
  texto TEXT,
  data_comentario DATE,
  FOREIGN KEY (animal_id) REFERENCES AnimaisCadastrados(id),
  FOREIGN KEY (usuario_id) REFERENCES Cuidadores(id)
);

/* CRUD para usuariosadmin */
/* CREATE Admin */
INSERT INTO Admin
(nome, email, telefone, dataNascimento)
VALUES
('Nome do Admin', 'admin@example.com', '12345678900', '1990-11-21');

/* READ listar todos os Admin */
SELECT * FROM Admin;

/* READ listar Admin por id */
SELECT * FROM Admin WHERE id = 1;

/* Atualizar um registro de Admin (Update) */
UPDATE Admin
SET nome = 'Novo Nome', email = 'novoemail@example.com'
WHERE id = 1;

/* Excluir um registro de Admin (Delete): */
DELETE FROM Admin WHERE id = 1;


/* CRUD para Cuidadores */
/* CREATE Cuidadores */
INSERT INTO Cuidadores
(nome, email, telefone, dataNascimento, imagem, endereco, cidade, estado, pais)
VALUES
('Nome do Cuidador', 'cuidador@example.com', '1234567890', '2000-01-01', 'imagem_url', 'Endereço do Cuidador', 'Cidade do Cuidador', 'Estado do Cuidador', 'Pais do Cuidador');

/* READ listar todos os Cuidadores */
SELECT * FROM Cuidadores;

/* READ listar Cuidadores por id */
SELECT * FROM Cuidadores WHERE id = 1;

/* Atualizar um registro de Cuidadores (Update) */
UPDATE Cuidadores
SET nome = 'Novo Nome', email = 'novoemail@example.com'
WHERE id = 1;

/* Excluir um registro de Cuidadores (Delete): */
DELETE FROM Cuidadores WHERE id = 1;


/* CRUD para AnimaisCadastrados */
/* CREATE AnimaisCadastrados */
INSERT INTO AnimaisCadastrados
(nome, raca, idade, imagem)
VALUES
('Nome do Animal', 'Raça do Animal', 'Idade do Animal', 'imagem_url');

/* READ listar todos os AnimaisCadastrados */
SELECT * FROM AnimaisCadastrados;

/* READ listar AnimaisCadastrados por id */
SELECT * FROM AnimaisCadastrados WHERE id = 1;

/* Atualizar um registro de AnimaisCadastrados (Update) */
UPDATE AnimaisCadastrados
SET nome = 'Novo Nome do Animal', raca = 'Nova Raça do Animal'
WHERE id = 1;

/* Excluir um registro de AnimaisCadastrados (Delete): */
DELETE FROM AnimaisCadastrados WHERE id = 1;


/* CRUD para Comentarios */
/* CREATE Comentarios */
INSERT INTO Comentarios
(comentario_id, animal_id, usuario_id, texto, data_comentario)
VALUES
(1, 1, 1, 'Texto do Comentário', '2023-10-02');

/* READ listar todos os Comentarios */
SELECT * FROM Comentarios;

/* READ listar Comentarios por id */
SELECT * FROM Comentarios WHERE comentario_id = 1;

/* Atualizar um registro de Comentarios (Update) */
UPDATE Comentarios
SET texto = 'Novo Texto do Comentário'
WHERE comentario_id = 1;

/* Excluir um registro de Comentarios (Delete): */
DELETE FROM Comentarios WHERE comentario_id = 1;
