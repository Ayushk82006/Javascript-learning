console.log("Hello, World!"); 

let x = 6;
let y = 7;

let z = "Ayush";

console.log(x + y + 8);

console.log(typeof x, typeof y, typeof z);

let a = 8;
let b = "Sonu";

let c = undefined;
let d = null;

let istrue = false;


if(istrue){
    console.log("This is red");
}
else{
    console.log("This is blue");
}

console.log(typeof a, typeof b, typeof c, typeof d, typeof istrue);

let o = {
    Name: "Ayush",
    Age: 20,
    City: "Kolkata"
}
console.log(o);

o.course = "Web Development";
console.log(o);

// Practice Set

// 1. Create a variable of type string and try to add a number

let f = "Saroj";

let g = 6;

console.log(f + g);

// 2.Use typeof operator to find the datatype of the string in the last question.

console.log(typeof f);

//3. Create a const object in javascript can you change it to hold a number later?

const obj = {
    Name: "Sonu",
    Age: 20,
    City: "Ghazipur"
};

console.log(obj);

// Trying to change the const object
// obj = 5; // This will throw an error

//4. Try to add a new key to the const object in problem 3 were you able to do it? If yes then why?

obj.course = "Web Development";
console.log(obj);

// Yes, we were able to add a new key to the const object. In JavaScript, const only prevents reassignment of the variable itself, but it does not make the object immutable. Therefore, we can still modify the properties of the object.

//5.Write a javascript program to create a word meaning dictionary of 5 words.

let dictionary = {
    Word1: "JavaScript",
    Meaning1: "A programming language used for web development",
    
    Word2: "Variable",
    Meaning2: "A container for storing data values",

    Word3: "Function",
    Meaning3: "A block of code designed to perform a particular task",

    Word4: "Array",
    Meaning4: "A special type of variable that can hold multiple values",
    
    Word5: "Object",
    Meaning5: "A collection of properties and methods"
};

console.log(dictionary);

