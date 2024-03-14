function inverteString(str) {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}

const minhaString = prompt("Digite o que quiser!!!")
const stringInvertida = inverteString(minhaString);
alert(`String original: ${minhaString}\nString Invertida: ${stringInvertida}`);