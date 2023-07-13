function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // JavaScript code
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }

    // TypeScript code
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        console.log('No result!');
    }
    return result;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const phrase = 'Result is: ';

const result = add(number1, number2, printResult, phrase);
console.log(result);
