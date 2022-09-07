function add(n1: number, n2: number, result: boolean, phrase: string) {
    console.log(`n1: ${typeof n1} n2: ${typeof n2}`);
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    const addResult = n1 + n2;
    if (result) {
        console.log(phrase + addResult);
    } else {
        return addResult;
    }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const result = true;
const resultPhrase = 'Result is: ';

add(number1, number2, result, resultPhrase);
