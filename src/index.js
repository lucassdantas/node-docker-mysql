const express = require('express');
const connection = require('./db');

const app = express();
const port = 3000;

app.get('/companies', (req, res) => {
  const query = 'SELECT * FROM companies';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar empresas:', err);
      res.status(500).send('Erro ao buscar empresas');
    } else {
      res.json(results);
    }
  });
});

app.get('/companies/:id', (req, res) => {
  const companyId = req.params.id;
  const query = 'SELECT * FROM companies WHERE id = ?';

  connection.query(query, [companyId], (err, results) => {
    if (err) {
      console.error('Erro ao buscar empresa:', err);
      res.status(500).send('Erro ao buscar empresa');
    } else {
      if (results.length === 0) {
        res.status(404).send('Empresa não encontrada');
      } else {
        res.json(results[0]);
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
