// index.js
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

const dbURI = "mongodb+srv://GamaNaCama:biggama91817800@lucas243889.lsk3inp.mongodb.net/TarefasDB?retryWrites=true&w=majority&appName=Lucas243889";

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => {
    console.log('Conectado ao MongoDB com sucesso');
    app.listen(PORT, () => {
        console.log(`Servidor backend rodando em http://localhost:${PORT}`);
    });
});
