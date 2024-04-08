/* 3- Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele efetuadas e o percentual que ganha sobre o total de vendas. 
Calcular o salário total do vendedor. Escrever o nome do vendedor e seu salário total.*/

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/exercicio3', (req, res)=>{
    const nome = (req.query.nome)
    const salario = Number(req.query.salario)
    const vendas = Number(req.query.vendas)
    const comissao = Number(req.query.comissao)

    const reajuste = salario * comissao
    const novoSalario = salario + reajuste

    res.send(`Nome: ${nome}
    Novo Salario: ${novoSalario}
    Total de vendas: ${vendas}
    Comissão pelas vendas: ${comissao}`)
})

app.listen(port, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
})