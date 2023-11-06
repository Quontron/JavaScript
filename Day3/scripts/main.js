// this is your main.js script
// Declare firstName, lastName, country, city, age, isMarried, year variable
// make sure to use typeof operator to check different data types
let firstName = "MasterOfNone";
let lastName = "Quontron";
let country = "United States";
let city = "Somewhere in Southern California";
let age = 36;
let isMarried = true;
let year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof '10');
console.log(typeof 10);

console.log(parseInt('9.8'));
console.log(parseInt('9.8')==10);

//Truthy values (1 of 3)
//All numbers (positive and negative) are truthy except zero
let truthyNumber = 4 > 3;
console.log(truthyNumber + " is the value for the truthy number");

//Truthy values (2 of 3)
// ALL strings are truthy except an empty string
let truthyString = "";
truthyString += "Hello there";
console.log(truthyString) + " is the value of the truthy String";

//Truthy values (3 of 3)
// The boolean true
let truthyBool = false;
truthyBool != false;
console.log(truthyBool) + " is the value of the truth Bool";

//Falsy values (1 of 3)
let falsyValueNumber = NaN;
console.log(falsyValueNumber + " is the value of NaN");

//Falsy values (2 of 3)
let falsyValueNumber1 = 0;
console.log(falsyValueNumber1 + " is the value of 0");

//Falsy values (3 of 3)
let falsyValueNumber3 = false;
console.log(falsyValueNumber + " is the value of false");

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');


console.log("new set of things\n");
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log("There is no 'on' in both dragon and python");

// What is the year today?
const now = new Date();
console.log(now.getFullYear() + " is the current year");

// What is the month today as a number?
console.log(now.getMonth() + " is the current month as a number");

// What is the date today?
console.log(now.getDate() + " is the current date today");

// What is the day today as a number?
console.log(now.getDay() + " is the day today as a number");

// What is the hours now?
console.log(now.getHours() + " is the hours now");

// What is the minutes now?
console.log(now.getMinutes() + " is the minutes now");

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getSeconds() + " is the number of seconds elapsed from January 1, 1970 to now");
