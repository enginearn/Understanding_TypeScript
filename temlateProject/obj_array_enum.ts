// const person: {name: string, age: number}

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Max',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN//[2, 'author'],
};

// person.role.push('admin');
// person.role = [0, 'admin'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

// if (person.role[0] === ADMIN) {
//     console.log('is admin');
// }

if (person.role === Role.ADMIN) {
    console.log(`${person.name} is admin`);
}
