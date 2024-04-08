/* 9- Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e quantidade de horas extras trabalhadas. 
Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo: */

const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/exercicio9/:salminimo/:hTrabalhadas/:nDependentes/:hExtraTrabalhada', (req, res) =>{
    const salarioMinimo = Number(req.params.salminimo)
    const horaTrabalhada = Number(req.params.hTrabalhadas)
    const numeroDependentes = Number(req.params.nDependentes)
    const horasExtrasTrabalhadas = Number(req.params.hExtraTrabalhada)

    const valorHoraTrabalhada = salarioMinimo / 5
    const salarioMes = horaTrabalhada * valorHoraTrabalhada
    const dependente = numeroDependentes * 32
    const valorHoraExtra = valorHoraTrabalhada * 1.5; 
    const salarioBruto = salarioMes + dependente + valorHoraExtra

    let irrf;
    if (salarioBruto <= 2000) {
        irrf = 0; // Isento
    } else if (salarioBruto > 2000 && salarioBruto <= 5000) {
        irrf = salarioBruto * 0.1; // 10%
    } else {
        irrf = salarioBruto * 0.2; // 20%
    }

    const salarioLiquido = salarioBruto - irrf;

    let gratificacao;
    if (salarioLiquido <= 3500) {
        gratificacao = 1000;
    } else {
        gratificacao = 500;
    }

    const salarioReceber = salarioLiquido + gratificacao;

    res.send(`Salário do funcionário: R$ ${salarioReceber.toFixed(2)}`);
});

app.listen(port, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
})