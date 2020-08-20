const mongoose = require('../../config/db'); // Importa o arquivo de configuração do banco de dados

const TransactionSchema = mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    }, // Recebe a data da transação
    sellerName: {
      type: String,
      required: true,
    }, // Recebe o nome do estabelecimento
    value: {
      type: Number,
      required: true,
    }, // Sempre receberá um valor positivo, em caso de débito verificar como convertê-lo para negativo
    operationId: {
      type: Number,
      required: true,
    }, // Recebe 0 para débito e 1 para crédito
  },
  {
    timestamps: true,
  }
); // Configuração dos dados que vão para o banco de dados através do Schema da biblioteca mongoose

const Transaction = mongoose.model('Transaction', TransactionSchema); // Cria o modelo a partir da configuração
module.exports = Transaction; // Exporta o modelo

// Modelo incial para abstração.
