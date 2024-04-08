/* 8- Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. Faça uma api que leia o salário e o código do cargo
 de um funcionário e calcule o seu novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. Mostre o salário antigo, o novo salário e a 
 diferença entre ambos.

    Código do Cargo -> Percentual:
    • 101 -> 5%
    • 102 -> 7,5%
    • 103 -> 10%
*/

    const express = require('express')
    const app = express()
    const port = 3000
   
    app.use(express.json())

    app.get('/exercicio8', (req, res)=>{
    let salario = Number((req.query.salario))
    let codigoCargo = Number((req.query.codigoCargo))

    let codigoCargoUm = 0.05
    let codigoCargoDois = 0.075
    let codigoCargoTres = 0.1

    let calcular = ''
    let diferença = ''
    let soma = ''

    if (codigoCargo = 101) {
        calcular = salario * codigoCargoUm
        soma = salario + calcular
        diferença = soma - salario
    }
    if (codigoCargo = 102) {
        calcular = salario * codigoCargoDois
        soma = salario + calcular
        diferença = soma - salario
    }
    if (codigoCargo = 103) {
        calcular = salario * codigoCargoTres
        soma = salario + calcular
        diferença = soma - salario
    } else {
        calcular = salario * 0.15
        soma = salario + calcular
        diferença = soma - salario
    }
    res.send(`
        Salario antigo: ${salario}
        Novo salario: ${soma}
        Diferença: ${diferença}
        `)
})

app.listen(port, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
})