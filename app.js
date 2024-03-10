const textArea = document.querySelector (".text_area");
const mensagem = document.querySelector (".mensagem");


function btnEncriptar() {
    const textoEncripitado = encriptar (textArea.value);
    mensagem.value = textoEncripitado;
    textArea.value = "";
}


function encriptar (stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase ();


    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes (matrizCodigo [i] [0])) {
            stringEncriptada = stringEncriptada.replaceAll (matrizCodigo [i] [0], matrizCodigo [i] [1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar (textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

 function desencriptar (stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase ();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes (matrizCodigo [i] [1])) {
            stringDesencriptada = stringDesencriptada.replaceAll (matrizCodigo [i] [1], matrizCodigo [i] [0]);
        }
    }

    return stringDesencriptada;
 }








// function btnCriptografar () {};

// function criptografar (string) {
//     const resultado = string

//     .replaceAll("e", "enter")
//     .replaceAll("i", "imes")
//     .replaceAll("a", "ai")
//     .replaceAll("o", "ober")
//     .replaceAll("u", "ufat");

//     return resultado;
// }

// function descriptografar (string) {
//     const resultado = string

//     .replaceAll("enter", "e")
//     .replaceAll("imes", "i")
//     .replaceAll("ai", "a")
//     .replaceAll("ober", "o")
//     .replaceAll("ufat", "u");

//     return resultado;

// }