function add(n1, n2, showResult, phrase) {
    // JavaScript code
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }
    // TypeScript code
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        console.log('No result!');
    }
    return result;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var phrase = 'Result is: ';
var result = add(number1, number2, printResult, phrase);
console.log(result);
