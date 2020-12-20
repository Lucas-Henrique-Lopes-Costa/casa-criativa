const express = require("express") // pega os arquivos do "Express"
const server = express()

// Criando variáveis para usar no HTML
const db = require("./db")

// configurar arquivos estáticos (html, css)
server.use(express.static("public")) // cria rotas na página "public"

// habilitando o uso do "req.body"
server.use(express.urlencoded({
    extended: true
}))

// configurando Nunjucks
const nunjucks = require("nunjucks") // redebe todo o nunjucks o
nunjucks.configure("views", {
    express: server,
    noCache: true, // tira o cache do server (ele guarda algumas coisas que ele acha importante)
})
// Para configurar você tem que colocar como parâmetro: Onde vai colocar os HTML; e depois um Objeto = Links


// Criando Rotas
// quando no localhost estiver na url "/" ele executa a função
server.get("/", function (req, res) { // pegando o pedido do cliente

    //consultar um dado na tabela
    db.all(`SELECT * FROM ideias`, function (err, rows) {
        if (err) {
            console.log(err)
            return res.send("Erro no Banco de Dados!")

        }

        const reverseIdeias = [...rows].reverse() // mesmo conteúdo só que das ideias, só que com 

        let lastIdeias = []
        for (ideia of reverseIdeias) { // ".reverse()" => inverte a ordem das ideias
            if (lastIdeias.length < 3) { // se as ideias for menor que Dois
                lastIdeias.push(ideia)
            }

            // console.log(lastIdeias) // repete as ideias uma por uma
        }

        return res.render("index.html", {
            ideias: lastIdeias
        }) // prepara a variável para aplicar no html

        // reponde o chamado
        // caso não estivesse na pasta "viwes", deve usar o "__dirname + "
    })
})

server.get("/ideias", function (req, res) {
    //consultar um dado na tabela
    db.all(`SELECT * FROM ideias`, function (err, rows) {
        if (err) {
            console.log(err)
            return res.send("Erro no Banco de Dados!")

        }

        const reverseIdeias = [...rows].reverse() // mesmo conteúdo só que "estático"

        return res.render("ideias.html", {
            ideias: reverseIdeias
        })
    })
})

// salvando os dados que serão adicionados
server.post("/", function (req, res) {

    // Inserir dados na tabela
    const query = `
            INSERT INTO ideias(
                title,
                image,
                category,
                description,
                link
            ) VALUES (?, ?, ?, ?, ?);
        `

    const values = [
        req.body.title,
        req.body.image,
        req.body.category,
        req.body.description,
        req.body.link
    ]

    console.log(req.body)

    db.run(query, values, function (err) {
        // se der erro
        if (err) {
            console.log(err)
            return res.send("Erro no Banco de Dados!")

        }

        // redirecionando depois que enviar o formulário
        return res.redirect("/ideias")
    })
    // function "callback" função dentro de uma função (assim que a função executar ele executa ela)

    req.body //peaga os dados inseridos como um OBJETO
})

// abrindo o servidor
server.listen(3000)