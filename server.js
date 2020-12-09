const express = require("express") // pega os arquivos do "Express"
const server = express()

// configurar arquivos estáticos (html, css)

server.use(express.static("public")) // cria rotas na página "public"


// Criando Rotas

server.get("/", function (req, res) { // pegando o pedido do cliente
    console.log('Olá, mundo!')
    // return res.send("Olá") // envia uma mensagem
    return res.sendFile(__dirname + "/index.html")
}) // quando no localhost estiver na url "/" ele executa a função

server.listen(3000) // abrindo o servidor