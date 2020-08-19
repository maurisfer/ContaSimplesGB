const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Mongoose - biblioteca que faz a transpilação do Js para linguagem do banco de dados

// process.env.MONGO_URL - Endereço de conexão com o banco de dados, guardado em variável ambinte para manter a segurança e facilitar a manutenção.
