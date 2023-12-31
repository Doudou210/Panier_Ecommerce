CREATE TABLE IF NOT EXISTS `utilisateur`(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(15),
    first_name VARCHAR(50),
    last_name VARCHAR(20),
    email VARCHAR(80),
    password VARCHAR(10),
    create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)

);

CREATE TABLE IF NOT EXISTS chat(
    id INT NOT NULL AUTO_INCREMINT,
    username VARCHAR(15),
    email VARCHAR(70),
    subject VARCHAR(10),
    message VARCHAR(255),
    date_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS shop(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(15)
);