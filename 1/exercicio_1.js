/**
 * Checa se um numero inteiro é esotérico
 * @param {number} number 
 * @returns `boolean` se o numero é isotérico ou não
 */
const isEsoteric = (number) => number % 3 == 0 && number % 5 == 0;

/**
 * Checa se um numero inteiro é primo
 * @param {number} number 
 * @returns `boolean` se o numero é primo ou não
 */
function isPrimo(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

/**
 * Checa se um numero inteiro não é nem esotérico nem primo
 * @param {number} number 
 * @returns `boolean` se o numero não é nem isotérico nem primo
 */
const isCetic = (number) => !isEsoteric(number) && !isPrimo(number);

async function main() {
    console.log(`Digite um número inteiro: `);
    process.stdin.on('readable', () => {
        const number = process.stdin.read().toString().replace(/\n/, "").replace(/\r/, "");

        if (isEsoteric(number))
        console.log(`${number} é um número esotérico`);
        
        if (isPrimo(number))
            console.log(`${number} é um número primo`);
        
        if (isCetic(number))
            console.log(`${number} é um número cético`);
    });
}

main()