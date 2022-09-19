const userName = 'Maximilian';

// arrow function
const add = (a: number, b: number = 1) => a + b;

const printOutput: (output: number | string) => void = output => document.body.innerHTML = output.toString();

printOutput('Hello World!');

let res = add(2);
document.body.textContent = res.toString();

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => document.body.textContent = 'Clicked!');
}

// spread operator
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);

const person = {
    firstName: 'Max',
    age: 30
}

const copiedPerson = { ...person };

// rest operator
const added = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = added(5, 10, 2, 3.7);

// array and object destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
hobbies.push('Programming');
console.log(hobbies, hobby1, hobby2);

const { firstName, age } = person;
console.log(firstName, age);
