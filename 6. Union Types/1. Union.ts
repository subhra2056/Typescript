let password : string | number | boolean = 'asdfjs140371';

type UserInfo = {
  firstName: string,
  last: string,
  age: number
};

type AccountDetails = {
  email: string,
  password: string 
};

let user: UserInfo | AccountDetails = {
  email: "something@gmail.com",
  password: "adkfjfsa12431"
}

const items: (number | string)[] = [1, 2, 3, "hello"];
console.log(items);