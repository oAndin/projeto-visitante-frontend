CREATE TABLE `visitante` (
	`visitante_id` INT NOT NULL AUTO_INCREMENT,
	`visitante_nome` varchar(100) NOT NULL,
	`visitante_idade` INT NOT NULL,
	`visitante_profissao` varchar(50) NOT NULL,
	`visitante_cidade` varchar(50) NOT NULL,
	`visitante_bairro` varchar(50) NOT NULL,
	`visitante_genero` INT NOT NULL,
	`visitante_cpf` varchar(20) NOT NULL,
	PRIMARY KEY (`visitante_id`)
);

CREATE TABLE `usuario` (
	`usuario_id` INT NOT NULL AUTO_INCREMENT,
	`usuario_email` varchar(50) NOT NULL,
	`usuario_senha` varchar(50) NOT NULL,
	`usuario_token` varchar(255),
	PRIMARY KEY (`usuario_id`)
);



