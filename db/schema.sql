DROP DATABASE IF EXISTS burgers_db;
p
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(45),
    devoured BOOLEAN,
    PRIMARY KEY(id)
);