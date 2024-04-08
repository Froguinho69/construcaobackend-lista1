/* 4- Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para percorrê-la (em horas). O programa deve calcular a velocidade média
 - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h. */
 
 const express = require('express')
 const app = express()
 const port = 3000
 app.use(express.json())

app.get('/exercicio4/:nome/:dPercorrida/:tempo', (req, res) =>{
    const nome = req.params.nome;
    const distanciaPercorrida = Number(req.params.dPercorrida)
    const tempoGasto = Number(req.params.tempo)

    const velocidadeMedia = distanciaPercorrida / tempoGasto

    res.send(`A velocidade média do ${nome} foi ${velocidadeMedia} km/h.`)
})

app.listen(port, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
})