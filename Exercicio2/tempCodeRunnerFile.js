const express = require('express')
const app = express()
const port = 3000

app.use(express.json())


app.get('/exercicio2/:salario', (req, res) =>{
    const salario = Number(req.params.salario)
    if (salario < 1000) {
        const aumento = salario * 0.3;
        const reajuste = aumento + salario
    
        res.send(`
        Salario: ${reajuste}
        `)
    } else{
        res.send(`
        voce nao merece
        `)
    }
    
    
})



