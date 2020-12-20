function onOff() {
    /* Quando clikar, ele executa a função */
    document
        .querySelector("#modal")
        .classList
        .toggle("hide") /* Adiciona a classe "hide" que entra em uma estilização */

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")

}

// Validações no Frontend 

function checkFields(event) {
    const valuesToCheck = [
        "image",
        "title",
        "category",
        "description",
        "link",
    ]

    // conferindo um por um se tem algo vazio
    const isEmpty = valuesToCheck.find(function(value) { // se o find encontrar algo vazio ele vai colocar ele mesmo como verdadeiro(true)
       
        const checkIfString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target["title"].value.trim() // "trim" é para tirar os espaços desnecessários

        if(checkIfString && checkIfIsEmpty) {
            return true
        }
    })
    
    // console.log(isEmpty) // se for true = faltou algo

    if (isEmpty) {
        event.preventDefault()
        alert("Por Favor preencha todos os campos.")
    }

}