const express = require("express") // pega os arquivos do "Express"
const server = express()

// configurar arquivos estáticos (html, css)
server.use(express.static("public")) // cria rotas na página "public"


// Criando variáveis para usar no HTML
const ideias = [
    {
        img: "https://www.flaticon.com/svg/static/icons/svg/3500/3500589.svg",
        title:"Curso de Programação",
        category:"Estudo",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
        url:"https://rocketseat.com.br"
    },
    {
        img: "https://www.flaticon.com/svg/static/icons/svg/3048/3048398.svg",
        title:"Meditação",
        category:"Saúde",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
        url:"https://www.gov.br/saude/pt-br"
    },
    {
        img: "https://www.flaticon.com/svg/static/icons/svg/3791/3791357.svg",
        title:"Karaoke",
        category:"Estudo",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
        url:"https://www.gov.br/saude/pt-br"
    },
    {
        img: "https://www.flaticon.com/svg/static/icons/svg/3788/3788765.svg",
        title:"Corrida",
        category:"Saúde",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
        url:"https://www.gov.br/saude/pt-br"
    },
    {
        img: "https://www.flaticon.com/svg/static/icons/svg/3869/3869297.svg",
        title:"Pintura",
        category:"Criatividade",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
        url:"https://www.gov.br/saude/pt-br"
    }
]


// configurando o NUNJUCKS
const nunjucks = require("nunjucks") // redebe todo o nunjucks o
nunjucks.configure("views", {
    express: server,
    noCache: true, // tira o cache do server (ele guarda algumas coisas que ele acha importante)
})
// Para configurar você tem que colocar como parâmetro: Onde vai colocar os HTML; e depois um Objeto = Links



// Criando Rotas
// quando no localhost estiver na url "/" ele executa a função
server.get("/", function (req, res) { // pegando o pedido do cliente

    const reverseIdeias = [...ideias].reverse() // mesmo conteúdo só que das ideias, só que com 
    
    let lastIdeias = []
    for (ideia of reverseIdeias) { // ".reverse()" => inverte a ordem das ideias
        if (lastIdeias.length < 3) { // se as ideias for menor que Dois
            lastIdeias.push(ideia)
        }
        
        console.log(lastIdeias) // repete as ideias uma por uma
    }    
    
    return res.render("index.html", { ideias: lastIdeias }) // prepara a variável para aplicar no html

    // reponde o chamado
    // caso não estivesse na pasta "viwes", deve usar o "__dirname + "
}) 

server.get("/ideias", function (req, res) {
    const reverseIdeias = [...ideias].reverse() // mesmo conteúdo só que "estático"
    
    return res.render("ideias.html", { ideias: reverseIdeias})
})





// abrindo o servidor
server.listen(3000) 