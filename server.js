const express = require ('express'); //importar o modulo express 
const server = express(); //instanciar o express
const dotenv = require('dotenv').config(); //importar e configurar o modulo

//ROTAS
server.get('/', function(req,res){ //req -> requisao do cliente //res -> resposta do servidor
    res.send('Bem vindo ao meu servidor NODEJS. ');

})

server.get('/cursos', function(req,res){

    res.json({
        "web": "React NodeJS",
        "mobile" : "React Native",
        "ML" : "Data Science"
})
});


server.listen(process.env.PORT); //Criar o servidor e faze-lo escutar em uma porta
console.log(`Servidor Rodando na porta ${process.env.PORT}`);
