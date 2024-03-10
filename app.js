const textArea = document.querySelector (".text_area");
const mensagem = document.querySelector (".mensagem");

function btnCriptografar () {};

function criptografar (string) {
    const resultado = string

    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    return resultado;
}

function descriptografar (string) {
    const resultado = string

    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    return resultado;

}