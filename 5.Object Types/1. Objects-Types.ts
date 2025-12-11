// const person :{firstName: string; lastName: string; age: number} = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30
// };

// console.log(`Name: ${person.firstName} Age: ${person.age}`);

function printUser() : {name: string; age: number; location: string}{
    return {
        name: "Void",
        age: 20,
        location: "unknown"
    };
}

const res = printUser();
console.log(res);