/* Acessando uma Tag */

document
    .querySelector(".fat") /* Encontra o botão "fat" */
    .addEventListener("click", function () {
        /* Quando clikar, ele executa a função */
        document
            .querySelector("#footer")
            .classList
            .toggle("hide") /* Adiciona a classe "hide" que entra em uma estilização */
    })