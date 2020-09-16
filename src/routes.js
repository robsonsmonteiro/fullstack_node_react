const express = require ('express');
const routes = express.Router();


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

//criar nova rota (REQ -> body, header, params)
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


//Exportar para todo o sistema
module.exports = routes;