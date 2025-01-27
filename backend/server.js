const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
require('dotenv').config();

// Configurações iniciais
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Verifique se a variável de ambiente está carregada
console.log('MONGO_URI:', process.env.MONGO_URI);

// Conexão com MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB! 🎉'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Rotas
const habitRoutes = require('./routes/habits');
app.use('/api/habits', habitRoutes);

// Rota básica para testar o servidor
app.get('/', (req, res) => {
  res.send('Servidor rodando! 🚀');
});

// Inicializa o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));