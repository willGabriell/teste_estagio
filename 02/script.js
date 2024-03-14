function fibonacci(number) {
    
    let a = 0;
    let b = 1;

    while (b <= number) {
        if (b === number) {
            return true;
        }
        let nextNumber = a + b;
        a = b;
        b = nextNumber;
    }

    return false;

}

const number = 21;

if (fibonacci(number)) {
    alert(`${number} pertence a sequencia de fibonacci`)
} else {
    alert(`${number} não pertence a sequencia de fibonacci`)
}