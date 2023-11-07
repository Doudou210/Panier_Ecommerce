-- Créez une table pour stocker les informations du formulaire
CREATE TABLE formulaire (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address VARCHAR(200) NOT NULL,
  city VARCHAR(100) NOT NULL,
  zip_code VARCHAR(20) NOT NULL
);
