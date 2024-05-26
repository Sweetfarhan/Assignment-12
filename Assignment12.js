// 1. Write a js program to print all natural numbers from 1 to n. - using while loop
var Number = 1;
while (Number <=100) {
    console.log(Number);
    Number++;
}
// 2. Write a js program to print all natural numbers in reverse (from n to 1). - using while loop
var reverseNum=100;
while(reverseNum>=1){
    console.log(reverseNum);
    reverseNum--;
}
// 3. Write a js program to print all alphabets from a to z. - using while loop
console.log("Exersice no 3");
var i = "a"
var alphabet = "a";
while (alphabet <= "z") {
   console.log(alphabet);
   alphabet = String.fromCharCode(alphabet.charCodeAt(0) + 1);
}


// 4. Write a js program to print all even numbers between 1 to 100. - using while loop

console.log("Exersice no 4");


for (i = 2; i <= 100; i = i + 2) {

   console.log(i);

}


// 5. Write a js program to print all odd number between 1 to 100.

console.log("Exersice no 5");


for (i = 1; i <= 100; i = i + 2) {

   console.log(i);

}


// 6. Write a js program to find sum of all natural numbers between 1 to n.


console.log("Exersice no 6");

sum = 0;
n = 369;

for (i = 1; i <= n; i++) {
   sum = sum + i;

   console.log(sum, i);

}

console.log(sum);


// 7. Write a js program to find sum of all even numbers between 1 to n.


console.log("Exersice no 7")

var sum = 0;
var no = 369;

for (i = 2; i < n; i = i + 2) {

   sum = sum + i;
   console.log(sum, i);

}

console.log(sum);


// 8. Write a js program to find sum of all odd numbers between 1 to n.

console.log("Exersice no 8");

sum = 0;
n = 369;

for (i = 1; i <= n; i = i + 2) {

   sum = sum + i;
   console.log(sum, i);

}

console.log(sum);


// If-else exercise

// 1. Write a js program to find maximum between two numbers.

console.log("Exercise no 1");

var num1 = 10;
var num2 = 5;

if (num1 > num2) {
   console.log(`${num1} is greater than ${num2}`);
}
else {
   console.log(`${num2} is greater than ${num1}`);
}

// 2. Write a js program to find maximum between three numbers.


console.log("Exercise no 2");

var num1 = 9;
var num2 = 6;
var num3 = 3;

if (num1 > num2 && num1 > num3) {
   console.log(`${num1} is greater than ${num2} and ${num3}`)

}
else if (num2 > num3) {

   console.log(`${num2} is greater than ${num1} and ${num3}`)

}
else {
   console.log(`${num3} is greater than ${num1} and ${num2}`)

}


// 3. Write a js program to check whether a number is negative, positive or zero.

console.log("Exersice no 3");

var checknumber = 9;

if (checknumber > 0) {

   console.log(`${checknumber} is positive number`);

}

else if (checknumber < 0) {

   console.log(`${checknumber} is negative number`);



}

else {
   console.log(`${checknumber} is  zero`);

}


// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.

var Number2 = 5

if (Number2 % 5 === 0 && Number2 % 11 === 0) {

   console.log(`${Number2} is divisible  by 11 and 5`);

}

else {

   console.log(`${Number2} is not divisible  by 11 and 5`);

}

// 5. Write a js program to check whether a number is even or odd.

console.log("Exercise no 5");

var number = 9;

if (number % 2 === 0) {

   console.log(`${number} is even number`);

}
else {
   console.log(`${number} is odd number`);
}

// 6. Write a js program to check whether a year is leap year or not.a js program to check whether a character is alphabet or not.


console.log("Exercise no 6");

var a = 2000;

if (a % 4 === 0) {
   console.log("year is leap year");
}

else {
   console.log("year is not leap year");
}


// 7. Write a js program to input any alphabet and check whether it is vowel or consonant.

var alphabet = "A";

if (alphabet === "u" || alphabet === "a" || alphabet === "e" || alphabet === "i" || alphabet === "o" || alphabet === "A" || alphabet === "E" || alphabet === "I" || alphabet === "O" || alphabet === "U") {

   console.log(`${alphabet} is an vowal`);

}

else {
   console.log(`${alphabet} is not an vowal`);

}

// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.

let char = "$";

if (/[a-zA-Z]/.test(char)) {


   console.log("The character is an alphabet.");

}
else if (/[0-9]/.test(char)) {

   console.log("The character is a digit.");
}
else {
   console.log("The character is a special character.");
}

// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.


var char2 = "B";

if (/[a-z]/.test(char2)) {
   console.log("The character is a lowercase alphabet.");

}
else {
   console.log("The character is an uppercase alphabet.");

}



// 11. Write a js program to input week number and print week day.


console.log("Exercise no 11");

var WeekDay = 3;

switch (WeekDay) {
   case 1:
      console.log("today is Sanday");

      break;
   case 2:
      console.log("today is Monday");

      break;
   case 3:
      console.log("today is tuesday");

      break;
   case 4:
      console.log("today is Thursday");

      break;
   case 5:
      console.log("today is Friday");

      break;
   case 6:
      console.log("today is suturday");

      break;

   default:
      console.log("Please write correct numbers");
      break;
}

// 12. Write a js program to input month number and print number of days in that month.

console.log("Exercise no 12");



var monthName = "June";

switch (monthName) {
   case "January":

      console.log(`${monthName} cantain 31 days`);

      break;
   case "February":

      console.log(`${monthName} cantain 28 days (29 in a leap year) `);

      break;
   case "March":

      console.log(`${monthName} cantain 31 days`);

      break;
   case "April":

      console.log(`${monthName} cantain 30 days`);

      break;
   case "May":

      console.log(`${monthName} cantain 31 days`);

      break;
   case "June":

      console.log(`${monthName} cantain 30 days`);

      break;
   case "July":

      console.log(`${monthName} cantain 31 days`);

      break;
   case "August":

      console.log(`${monthName} cantain 31 days`);

      break;
   case "September":

      console.log(`${monthName} cantain 30 days`);

      break;
   case "October":

      console.log(`${monthName} cantain 31 days`);

      break;
   case "November":

      console.log(`${monthName} cantain 30 days`);

      break;
   case "December":

      console.log(`${monthName} cantain 31 days`);

      break;

   default:

      console.log("Please Enter correct spelling of month Name and write in Correct way");
      break;
}

// 13. Write a js program to count total number of notes in given amount.

console.log("Exercise no 13");



var amount = 69000;

var tenNotes;
var twentyNotes;
var fiftyNotes;
var hundredNotes;
var FiveHundNotes;
var thousandNotes;
var FiveThousandNotes;


tenNotes = (amount / 10);
twentyNotes = (amount / 20);
fiftyNotes = (amount / 50);
hundredNotes = (amount / 100);
FiveHundNotes = (amount / 500);
thousandNotes = (amount / 1000);
FiveThousandNotes = (amount / 5000);


console.log(`${amount} cantain ${tenNotes} Notes of ten and ${twentyNotes} Notes of Twenty and ${fiftyNotes} Notes of fifty and ${hundredNotes} Notes Of Hundred and ${FiveHundNotes} Notes of Five Hundred and ${thousandNotes} Notes of Thousands and ${FiveThousandNotes} Notes of five Thousand`);


// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.


console.log("Exercise no 14");

var angle1 = 30;
var angle2 = 30;
var angle3 = 90;

if (angle1 + angle2 + angle3 === 180) {

   console.log("Triangle is valid");

}
else {
   console.log("Triangle is not valid");
}

// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.

console.log("Exercise no 15");

var side1 = 1;
var side2 = 1;
var side3 = 3;

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
   console.log("Traingle is Valid");
}
else {
   console.log("The Traingle is inValid");
}

// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle. 


console.log("Exercise no 16");

var tside1 = 3;
var tside2 = 6;
var tside3 = 9;

if (tside1 === tside2 && tside2 === tside3 && tside3 === tside1) {
   console.log("Triangle is Equilateral");
}
else if (tside1 != tside2 && tside2 != tside3 && tside1 != tside3) {

   console.log("triangle is Scalene");

}

else {
   console.log("Triangle is Isosceles");
}

// 17. 18. Write a js program to calculate profit or loss.

console.log("Exercise no 17");

var costprice = 400;
var SellPrice = 369;

var profit_loss;

profit_loss = SellPrice - costprice;

console.log(`your today PnL is ${profit_loss} `);

// second way to calculate profit and loss (PnL)

var costprice = 400;
var SellPrice = 369;

if (costprice < SellPrice) {

   console.log("Today your in profit");

}

else if (costprice > SellPrice) {
   console.log("Today your in loss");


}
else {
   console.log("Today your in no profit and no loss");
}

//  19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F


console.log("Exercise no 19");

var physics = 42;
var Chemistry = 81;

var Biology = 71;

var Mathematics = 40;

var Computer = 71;

var total = physics + Chemistry + Biology + Mathematics + Computer;

var Percentage = total / 5;

if (Percentage >= 90) {
   console.log("Your Grade is A");
}
else if (Percentage >= 80) {

   console.log("your Grade is B");

}

else if (Percentage >= 70) {
   console.log("your Grade is C");
}

else if (Percentage >= 60) {
   console.log("you Grade is D");

}

else if (Percentage >= 40) {
   console.log("you Grade is E");

}

else {
   console.log("Sorry your fail Try better Next Time");
}


//  20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

console.log("Exercise no 20");

var BasicSalary = 690000;

if (BasicSalary <= 10000) {

   var HRA = 20;
   var DA = 80;
   
}

else if (BasicSalary <= 20000) {

  var HRA = 25;
  var DA = 90;

   
}

else if (BasicSalary > 20000) {

  var HRA = 30; 
  var DA = 95;


   
}

var GrossSalary = BasicSalary + (BasicSalary * HRA / 100) + (BasicSalary * DA / 100);

console.log(`your Gross Salary is ${GrossSalary}`);


// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit


var electricityUnit = 369;

if(electricityUnit <= 50){

   var electricityBill = electricityUnit * 0.50;

}
else if (electricityUnit > 50 && electricityUnit <= 100 ) {

   var electricityBill = electricityUnit * 0.75;
   
}
else if (electricityUnit > 100 && electricityUnit <= 250 ) {

   var electricityBill = electricityUnit * 1.20;
   
}
else   {

   var electricityBill = electricityUnit * 1.50;
   
}

console.log(`Your Total bill is ${electricityBill}`);












