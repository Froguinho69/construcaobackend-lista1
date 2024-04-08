/* 6- Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas para cálculo do peso:
    • peso ideal de homem = (72,7 x altura) – 58
    • peso ideal da mulher = (62,1 x altura) – 44,7 
*/

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/exercicio6', (req, res)=>{
    const sexo = (req.query.sexo)
    const altura = (req.query.altura)
    let calculo = ''

    const alturaEmMetros = altura / 100; 

    if (sexo == "homem") {
        calculo  = (72.7 * alturaEmMetros) - 58
    } 
    if (sexo == "mulher") {
        calculo = (62.1 * alturaEmMetros) - 44,7
    }
    res.send(`
        Sua altura: ${alturaEmMetros}
        Seu peso ideal: ${calculo}
        `)
})

app.listen(3000, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
})
