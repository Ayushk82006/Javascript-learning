console.log("I am learning loops")

let a = 1;

// 1. for loop

console.log(a);
console.log(a + 1);
console.log(a + 2);

for (let i = 0; i < 100; i++) {
    console.log(a + i);
    
 }

//2. for-in loop

let student = {
    Name : "Ayush",
    Age : 20,
    Course:"Bca",
}

for ( key in student) {
    console.log(key,student[key]);
    
}

//3. for-of loop

let fruits = ["apple", 'banana', 'mango'];

for ( fruit of fruits) {
    console.log(fruit);
}

//4.while loop

// let i = 1;
// while (i <= 6 ) {
//     console.log(i);
//     i++;
// }

//5.do-while loop

let i = 1;
do {
   console.log(i);
    i++; 
} while (i <= 6);