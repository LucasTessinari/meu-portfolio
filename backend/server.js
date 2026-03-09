const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos os campos são estritamente obrigatórios.' });
  }

  console.log('--- Nova Proposta / Contato ---');
  console.log(`Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`);
  console.log('-------------------------------');

  res.status(200).json({ success: true, message: 'Dados capturados com sucesso.' });
});

app.listen(PORT, () => {
  console.log(`Servidor Node rodando na porta ${PORT}`);
});
