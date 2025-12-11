type User = {
    name: string,
    age?: number,
    location: string
}

const user1: User = {
    name: "Void",
    age: 23,
    location: "Unknown"
}


const user2: User = {
    name: "Void",
    location: "Unknown"
}

console.log(`Name: ${user1.name} age: ${user1.age} location: ${user1.location}`);
console.log(`Name: ${user2.name} location: ${user2.location}`);