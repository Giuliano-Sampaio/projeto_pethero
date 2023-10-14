/* Este arquivo é usado para configurar o banco de dados para o projeto. */
/* Use o MariaDB para as consultas SQL. */

-- Tabela de Administradores
CREATE TABLE Admin (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(15),
    dataNascimento DATE
);

-- Tabela de Cuidadores (sem informações de endereço)
CREATE TABLE Cuidadores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(15),
    dataNascimento DATE,
    imagem VARCHAR(255)
);

-- Tabela de Endereços relacionada a Cuidadores
CREATE TABLE Endereco (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cuidador_id INT,
    endereco VARCHAR(255),
    cidade VARCHAR(255),
    estado VARCHAR(255),
    pais VARCHAR(255),
    FOREIGN KEY (cuidador_id) REFERENCES Cuidadores(id)
);

-- Tabela de Animais Cadastrados com relação ao Endereço
CREATE TABLE AnimaisCadastrados (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    raca VARCHAR(255),
    idade VARCHAR(50),
    imagem VARCHAR(255),
    cuidador_id INT,
    endereco_id INT, -- Adicionada coluna de endereço
    FOREIGN KEY (cuidador_id) REFERENCES Cuidadores(id),
    FOREIGN KEY (endereco_id) REFERENCES Endereco(id)
);

-- Tabela de Comentários
CREATE TABLE Comentarios (
  comentario_id INT PRIMARY KEY,
  usuario_id INT,
  texto TEXT,
  data_comentario DATE,
  FOREIGN KEY (usuario_id) REFERENCES Cuidadores(id)
);

-- Dados para popular o banco de dados
-- ... (Seus dados de exemplo para Cuidadores e AnimaisCadastrados)
