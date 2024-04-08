/* 1- Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
PATH PARAM */
const express = require('express')
const app = express()
app.use(express.json())
const port = 3000
 
app.get('/exercicio1/:qtdMinima/:qtdMaxima', (req, res) => {
    const QuantidadeMinima = Number(req.params.qtdMinima)
    const QuantidadeMaxima = Number(req.params.qtdMaxima)

    const EstoqueMedio = (QuantidadeMinima + QuantidadeMaxima) / 2

    res.send("Estoque Médio: ", EstoqueMedio)
})

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})