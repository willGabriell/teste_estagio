function descobreInterruptores() {
    // Primeira visita à sala das lâmpadas
    ligaInterruptor(1);
    aguarda();
    desligaInterruptor(1);
    ligaInterruptor(2);
    // Segunda visita à sala das lâmpadas
    if (verificaLampadaAcesa()) {
        console.log("O interruptor 1 controla a lâmpada acesa.");
    } else {
        console.log("O interruptor 2 controla a lâmpada acesa.");
    }
}

// Funções de simulação
function ligaInterruptor(numero) {
    console.log("Ligando o interruptor " + numero);
}

function desligaInterruptor(numero) {
    console.log("Desligando o interruptor " + numero);
}

function verificaLampadaAcesa() {
    // Simula se a lâmpada está acesa ou não
    return Math.random() < 0.5; // 50% de chance de estar acesa
}

function aguarda() {
    // Simula um tempo de espera (aqui não fazemos nada)
}

// Executa o código para descobrir os interruptores
descobreInterruptores();
