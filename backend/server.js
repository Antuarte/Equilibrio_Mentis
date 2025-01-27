//Atualize o servidor para usar rotas
// Abra o arquivo server.js no backend e adicione a seguinte lógica para carregar as rotas e testar a conexão:
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Configurações iniciais
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
