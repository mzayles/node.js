// importar Express
const express = require('express')
const app = express()

// GET e POST
app.get('/', (requisicao, resposta) => {
    resposta.send("Estou utilizando o Express!")
})