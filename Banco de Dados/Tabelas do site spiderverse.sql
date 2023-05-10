Create database spiderverse;

use spiderverse;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(15)
);

select * from usuario;