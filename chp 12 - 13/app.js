// 1 
// var input = prompt("Enter a character:");
// if (!isNaN(input)) {
//   console.log("The input is a number.");
// }
// else if (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {
//   console.log("The input is an uppercase letter.");
// }
// else if (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
//   console.log("The input is a lowercase letter.");
// }
// else {
//   console.log("Invalid input.");
// }


// 2 
// var num1 = parseInt(prompt("Enter first number:"));
// var num2 = parseInt(prompt("Enter second number:"));
// if (num1 > num2) {
//   console.log("The larger number is: " + num1);
// } 
// else if (num2 > num1) {
//   console.log("The larger number is: " + num2);
// } 
// else {
//   console.log("Both numbers are equal.");
// }


// 3
// var num = parseFloat(prompt("Enter a number:"));
// if (num > 0) {
//   console.log("The number is positive.");
// } 
// else if (num < 0) {
//   console.log("The number is negative.");
// } 
// else {
//   console.log("The number is zero.");
// }
 

// 4 
// var character = prompt("Enter a character:");
// if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//   console.log("true");
// }
// else if (character === "A" || character === "E" || character === "I" || character === "O" || character === "U") {
//   console.log("true");
// }
// else {
//   console.log("false");
// }


// 5
// var correctPassword = "Time2K23.";
// var userPassword = prompt("Enter your password:");
// if (userPassword === "") {
//   alert("Please enter your password.");
// }
// else if (userPassword === correctPassword) {
//   console.log("Correct! The password you entered matches the original password.");
// }
// else {
//   console.log("Incorrect password.");
// }

// 6 
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";}
// else{
// greeting = "Good evening";
// }



// 7
// var time = prompt("Enter time in 24-hour format (e.g. 1900):");
// var hours = Math.floor(time / 100);
// var minutes = time % 100;
// if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
//   var meridiem = "AM";
//   if (hours == 0) {
//     hours = 12;
//   }
//   if (hours > 12) {
//     hours = hours - 12;
//     meridiem = "PM";
//   }
//   console.log("The time is " + hours + ":" + minutes + " " + meridiem);
// }
// else {
//   console.log("Invalid time format.");
// }
