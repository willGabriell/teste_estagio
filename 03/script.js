// Função para a sequência a
function proximoElementoSequenciaA(ultimoElemento) {
    return ultimoElemento + 2;
}

// Função para a sequência b
function proximoElementoSequenciaB(ultimoElemento) {
    return ultimoElemento * 2;
}

// Função para a sequência c
function proximoElementoSequenciaC(ultimoElemento) {
    return Math.pow(Math.sqrt(ultimoElemento) + 1, 2);
}

// Função para a sequência d
function proximoElementoSequenciaD(ultimoElemento) {
    const proximoNumeroPar = Math.sqrt(ultimoElemento) + 2;
    return Math.pow(proximoNumeroPar, 2);
}

// Função para a sequência e
function proximoElementoSequenciaE(ultimoElemento1, ultimoElemento2) {
    return ultimoElemento1 + ultimoElemento2;
}

// Não consegui indentificar a lógica da sequência F;

console.log("Sequência a):", proximoElementoSequenciaA(7));
console.log("Sequência b):", proximoElementoSequenciaB(64));
console.log("Sequência c):", proximoElementoSequenciaC(36));
console.log("Sequência d):", proximoElementoSequenciaD(64));
console.log("Sequência e):", proximoElementoSequenciaE(5, 8));

alert(`Respostas:\na) 9\nb) 128\nc) 49\nd) 100\ne) 13\n\nRespostas também disponiveis no console.`)