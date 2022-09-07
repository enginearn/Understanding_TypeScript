let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

console.log(userInput);

if (typeof userInput === 'string') {
    userName = userInput;
    console.log(userName);
}

// try {
//     generateError('An error occurred!', 500);
// }
// catch (error) {
function generateError(message: string, code: number): never { // never returns anything
    throw { message: message, errorCode: code };
}
// }

const result = generateError('An error occurred!', 500);
console.log(result);
