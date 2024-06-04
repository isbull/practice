CREATE DATABASE IF NOT EXISTS registroDB;
DROP DATABASE IF EXISTS registroDB;

CREATE DATABASE IF NOT EXISTS registroDb;
USE registroDb;

CREATE TABLE IF NOT EXISTS usuario(
    nick_name VARCHAR (80) UNSIGNED PRIMARY KEY,
    
    pass VARCHAR (8) UNSIGNED NOT NULL,
    email VARCHAR (100) UNSIGNED NOT NULL,
    addre VARCHAR (250) NOT NULL,
    age DATE,
   
)

CREATE TABLE IF NOT EXISTS account(
    nick_name VARCHAR(80) UNSIGNED NOT NULL,
    pass VARCHAR (8) UNSIGNED NOT NULL,
    email VARCHAR (100) UNSIGNED NOT NULL,
    FOREIGN KEY(nick_name) REFERENCE usuario (nick_name)

)

INSERT INTO usuario (nick_name, pass, email,addre,age) VALUES
('Isbull_29', 'pass1234', 'medranoisaul5@gmail.com', 'Calle falsa #123', '34');

SELECT * FROM usuario;
