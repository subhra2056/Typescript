function greet(person: string = "Anonymous"){
    return `Hello ${person}`;
}

const res = greet("Void");
console.log(res);