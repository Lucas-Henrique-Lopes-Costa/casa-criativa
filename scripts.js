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