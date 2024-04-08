/* 2- Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. Escreva uma api que receba o 
salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito ao aumento.*/

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/exercicio2/:salario', (req, res) =>{
    const salario = Number(req.params.salario)
    if (salario < 1000) {
        const aumento = salario * 0.3;
        const reajuste = aumento + salario
        res.send(`Salario: ${reajuste}`)
    } else{
        res.send(`voce nao merece`)
    }
})

app.listen(3000, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
})
