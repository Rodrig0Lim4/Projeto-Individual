CREATE DATABASE IF NOT EXISTS SW_Forum;
USE SW_Forum;

CREATE TABLE IF NOT EXISTS Usuario(
idUsuario INT PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(256)
);

CREATE TABLE IF NOT EXISTS Noticia(
idNoticia INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
dtNoticia DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
titulo VARCHAR(45)
);

CREATE TABLE IF NOT EXISTS Acesso(
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
fkNoticia INT,
FOREIGN KEY (fkNoticia) REFERENCES Noticia(idNoticia),
dtAcesso DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (fkUsuario, fkNoticia)
);

CREATE TABLE IF NOT EXISTS Personagem(
idPersonagem INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
NomePersonagem VARCHAR(45)
);

CREATE TABLE IF NOT EXISTS votacao(
idVotacao INT AUTO_INCREMENT,
fkPersonagem INT,
FOREIGN KEY (fkPersonagem) REFERENCES Personagem(idPersonagem),
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
PRIMARY KEY (idVotacao, fkUsuario, fkPersonagem)
);