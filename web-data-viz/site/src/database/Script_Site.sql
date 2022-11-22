CREATE DATABASE SW_Forum;
USE SW_Forum;

CREATE TABLE Usuario(
idUsuario INT PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45)
);

CREATE TABLE Noticia(
idNoticia INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
dtNoticia DATE,
titulo VARCHAR(45)
);

CREATE TABLE Acesso(
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
fkNoticia INT,
FOREIGN KEY (fkNoticia) REFERENCES Noticia(idNoticia),
dtAcesso DATE,
PRIMARY KEY (fkUsuario, fkNoticia)
);

CREATE TABLE votacao(
idVotacao INT AUTO_INCREMENT,
NomePersonagem VARCHAR(45),
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
PRIMARY KEY (idVotacao, fkUsuario)
);