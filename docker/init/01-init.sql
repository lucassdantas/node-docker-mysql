CREATE TABLE IF NOT EXISTS companies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    cnpj VARCHAR(14) NOT NULL,
    address VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO companies (name, cnpj, address) VALUES 
('Tech Solutions Ltda', '12345678901234', '123 Tech Avenue'),
('Green Energy Corp', '98765432109876', '456 Green Boulevard'),
('BuildIt Construction', '45678901234567', '789 Construction St');