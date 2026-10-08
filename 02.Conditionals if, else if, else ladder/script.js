console.log("This is a conditional statement example.");

let age = 18;

if(age != 18){
    console.log("You can drive a vehicle.");
}

else{
    console.log("You cannot drive a vehicle.");
}

// Practice Set

// 1. Use logical operators to find whether the age of a person lies between 10 and 20.

let personAge = 16;
if(personAge > 10 && personAge < 20){
    console.log("Age is lies between 10 or 20")
}
else{
    console.log("Age is not lies between 10 or 20")
}

// 2.Demostrate the use of switch case statements in javascript

let Day = 3 ;
 switch(Day){
    case 1 :
        console.log("Monday");
    break;

    case 2 : 
    console.log("Tuesday");
    break;
    case 3: 
    console.log("Wednesday");
    break;
    case 4 : 
    console.log("Thursday");
    break;

    case 5:
        console.log("Friday");
    break;

    case 6:
        console.log("Saturday");
    break;

    case 7:
        console.log("Sunday");
    break;

    default : 
    console.log("Invalid day");

 }

 // 3.Wrte a Javascript program to find whether a number is Divisible by 2 or 3.

 let number = 14;

 if(number % 2 === 0|| number % 3 === 0){
    console.log("The number is divisible by 2 or 3")
 }
 else{
    console.log("The number is not divisible by 2 or 3")
 }

 //4.Wrte a Javascript program to find a number is Divisible by either 2 or 3.

//5.

let Age = 19;

console.log(Age > 18 ? 'You can drive':'You can not drive');