// Alias型
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor // Alias型
    ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = `${input1.toString()}: ${input2.toString()}`; // this is a string
    }
    return result;
};
// function combine(
//     input1: number | string | boolean,
//     input2: number | string | boolean,
//     resultConversion: 'as-number' | 'as-text' // union型 literal型
//     ) {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
//         result = +input1 + +input2;
//     } else {
//         result = `${input1.toString()}: ${input2.toString()}`; // this is a string
//     }
//     return result;
// };

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

combine('Max', 'Anna', 'as-text');
console.log(combinedAges);

const combinedMax = combine('Max', 32, 'as-text');
console.log(combinedMax);

const combinedMarin = combine('Marin', 17, 'as-text');
console.log(combinedMarin);
