//Regular function 

function multiply(x: number, y: number): number{
    return x * y;
}

console.log(multiply(3, 4));


//Arrow functions 

const add = (x: number = 1, y: number = 2): number => x + y;
console.log(add(3, 4));