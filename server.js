const express = require ('express'); //Importar o modulo express 
const server = express(); //Instanciar o express
const dotenv = require('dotenv').config(); //Importar e configurar o modulo
//CONFIG
server.use(express.json()); //Permitir resposta ao cliente em formato .JSON



//ROTAS
server.use(require('./src/routes'));  //Importação de outro arquivo

server.listen(process.env.PORT); //Criar o servidor e faze-lo escutar em uma porta
console.log(`Servidor Rodando na porta ${process.env.PORT}`);
