const express = require ('express');
const routes = express.Router();
const musculacaoController = require('./controllers/musculacao');


//ROTAS
routes.get('/', function(req,res){ //req -> requisao do cliente //res -> resposta do servidor
    res.send('Bem vindo ao meu servidor NODEJS. ');

})

routes.get('/cursos', (req,res) => {

    res.json({
        "web": "React NodeJS",
        "mobile" : "React Native",
        "ML" : "Data Science"
})
});

//Criar nova rota (REQ -> body, header, params)
routes.post('/cursos', (req,res)=> {
const response = req.body;
res.json(response);
});

//ROTA ALUNOS
routes.post('/alunos', (req,res)=>{
const response = req.body;
res.status(200).send(); //
console.log(`Bem vindo ${response.nome} ${response.sobrenome} `);
});
//Capturando os parametros da requisição pela URL usando params
routes.post('/prog/:nome',(req,res) =>{
const response = req.params.nome;
res.send(response);
});
//Capturando os parametros da requisição pela URL usando query
routes.post('/diretoria', (req,res)=>{
const nome = req.query.nome
const idade = req.query.idade
const sexo = req.query.sexo
res.send(`Nome: ${nome}, idade: ${idade}, sexo: ${sexo} `);

});
routes.post('/matricula', musculacaoController.planoMusculacao); //Callback já pronta com REQ,RES


//Exportar para todo o sistema
module.exports = routes;