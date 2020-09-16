module.exports ={


planoMusculacao(req,res){

    const response = req.body;
    // let msg = "";
     let imc = response.peso/ (response.altura)^2;
     if (response.sexo == "M"){
         msg = "Seu treino é de ganhar massa muscular."
     }else{
         msg = "Seu treino é para perder gordura."
     }
     //res.send(msg);
     res.send(`${msg} ---- seu IMC = ${imc}`);

}
}
//Não é muito usual usar pois terá que exportar várias vezes cada vez module.exports = planoExercicios
