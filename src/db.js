const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'user', 
  password: 'password', 
  database: 'company_db', 
  port: 3306, 
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conexão bem-sucedida com o banco de dados MySQL');
});

module.exports = connection;
