require('dotenv'), config(); // Auxilia na configuração das variáveis ambiente
const cors = require('cors'); // Configura que as requisições possam vir de fora da API fake (Insomnia/Postman))
const express = require('express'); // Importa a biblioteca express que configura o db
require('express-async-errors');
const morgan = require('morgan'); // Mostra as métricas de req e res
const helmet = require('helmet'); // Auxilia nas máscaras dos headers
const routes = require('./routes'); // Importa o módulo de rotas
const logger = require('./helper/logger'); // Formata s logs de forma mais profissional

const app = express(); //Instancia a função express que permite a utilização mais fácil das funções do express.

app.use(helmet()); // Define as máscaras das requisições
app.use(cors()); // Instancia origem de requisições além das API fakes
app.use(express.json()); // Define req e res em formato de json
app.use(express.urlencoded({ extended: true}));

app.use(morgan('dev'));

app.use((error, req, res, next) =>{
    logger.error(error);
    return res.status(500).json({ erro: "Houve um erro na API"})
});

app.listen(process.env.PORT || 3001), () =>{
    logger.infor(`API RODANDO NA PORTA ${process.env.PORT || 3000}`)
};
