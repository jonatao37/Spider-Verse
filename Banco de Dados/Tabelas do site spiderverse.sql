Create database spiderverse;

use spiderverse;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(15)
);

select * from usuario;

truncate table usuario;

create table quiz (
idQuiz int primary key auto_increment,
personagem varchar(45),
fkusuario int,
constraint fkusuario foreign key (fkusuario)
references usuario(idUsuario)
);

select personagem from quiz;

SELECT COUNT(idQuiz) AS quantidade, personagem FROM quiz GROUP BY personagem;

truncate table quiz;