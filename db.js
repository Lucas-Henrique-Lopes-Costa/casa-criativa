// configurando o banco de dados para

const sqlite3 = require('sqlite3').verbose() // "verbose" serve para comunicar no terminal
const db = new sqlite3.Database('./ws.db')

db.serialize(function() {
    // Criar tabela
        // Escrever com a crase você pode dar enter
        db.run(`
            CREATE TABLE IF NOT EXISTS ideias(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                image TEXT,
                title TEXT,
                category TEXT,
                description TEXT,
                link TEXT
            );
        `)
            // "autoincrement" = coloca o id quando é criado um banco de dados

    // Inserir dados na tabela
        const query = `
            INSERT INTO ideias(
                image,
                title,
                category,
                description,
                link
            ) VALUES (?, ?, ?, ?, ?);
        `

        const values = [
            "https://www.flaticon.com/svg/static/icons/svg/3500/3500589.svg",
            "Curso de Programação",
            "Estudo",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
            "https://rocketseat.com.br"
        ]
        
        db.run(query, values, function (err) {
            // se der erro
            if (err) return console.log(err)
            
            // caso contrário
            console.log(this)
        })
            // function "callback" função dentro de uma função (assim que a função executar ele executa ela)

    // // Deletar um dado na tabela
    //     db.run(`DELETE FROM ideias WHERE id = ?`, [2], function(err) {
    //         if (err) return console.log(err)

    //         console.log("Deletado", this)
    //     })
    
    
    //consultar um dado na tabela
        db.all(`SELECT * FROM ideias`, function(err, rows) {
            if (err) return console.log(err)

            console.log(rows) // apresenta as linhas
        })
})
