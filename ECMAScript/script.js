let user = {
  name: "John",
  years: 30,
};
let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);
//ex2

let planetName = "Earth";
let currentVisitorName = "John";

//ex3
let phrase = "Hello";

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi();
//The function sayHi is declared inside the block (if), so it’s not visible outside that block in strict mode.
//Therefore, calling sayHi() outside causes a ReferenceError.
//ex4
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//ex5
const user = {
  name: "John",
};

user.name = "Pete";

console.log(user.name);

//ex6
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);

//ex7

result = a + b < 4 ? "Below" : "Over";

//ex8

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";

