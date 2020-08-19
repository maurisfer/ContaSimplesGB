const mongoose = require('../../config/db'); // Importa o arquivo de configuração do banco de dados

const TransitionSchema = mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    sealer: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    operation:{
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
); // Configuração dos dados que vão para o banco de dados através do Schema da biblioteca mongoose



const Transition = mongoose.model('Transition', TransitionSchema); // Cria o modelo a partir da configuração
module.exports = Transition; // Exporta o modelo


// Modelo incial para abstração.
