CREATE DATABASE IF NOT EXISTS registroDB;
DROP DATABASE IF EXISTS registroDB;

CREATE DATABASE IF NOT EXISTS registroDb;
USE registroDb;

CREATE TABLE IF NOT EXISTS usuario(
    nick_name VARCHAR (80) UNSIGNED PRIMARY KEY,
    
    pass VARCHAR (8) UNSIGNED NOT NULL,
    email VARCHAR (100) UNSIGNED NOT NULL,
    addre VARCHAR (250) NOT NULL,
    age DATE 
)

CREATE TABLE IF NOT EXISTS account(

)