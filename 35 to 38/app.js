// No.1
// var now = new Date();
// document.write(now)


// No.2
// function greeting(){
//  var firstName = prompt("Enter Your First name");
//  var lastName = prompt("Enter you last Name");
//  alert("welcome! " + firstName + " " + lastName);
// }
// greeting()

// No.3
// function sum(){
//     firstNumber = +prompt("enter first number");
//     secondNumber = +prompt("enter second number");
//     thirdNumber = firstNumber  + secondNumber;
//     alert("the sum of two numbers is " + thirdNumber)
// }
// sum()

// No.4
// function calc(num1,oper,num2) {
//     if (oper === "+") {
//         return num1 + num2;
//     }
//     else if(oper === "-"){
//     return num1 - num2;
//     }
//     else if(oper === "*"){
//     return num1 * num2;
//     }
//     else if(oper === "/"){
//         return num1 / num2;
//         }
//     else if(oper === "%"){
//         return num1 % num2;
//             }
//     else {
//       return "Incorrect operator"  
//     } 
// }
// let result = calc(20,"+",10);
// alert(result);

// let result1 = calc(20,"-",10);
// alert(result1);

// let result2 = calc(20,"*",10);
// alert(result2);

// let result3 = calc(20,"/",10);
// alert(result3);

// let result4 = calc(20,"%",10);
// alert(result4);

// let result5 = calc(20,"$",10);
// alert(result5);  

// No.5
// function square(a){
// document.write(a*a)
// }
// square(5);

// No.6
// function factorial(){
// var num = +prompt("enter number")
// var fac = 1;
// for (num; num>= 1; num--){
//     fac = fac * num;
// }
// document.write(fac);
// }
// factorial();

// No.7
// function count(start, end){
// for(let i = start; i<=end; i++){
//     document.write(i + "<br>");
// }
// }
// count(1, 10);

// No. 8
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//       return num * num;
//     }

//     let baseSquared = calculateSquare(base);
//     let perpendicularSquared = calculateSquare(perpendicular);
//     let hypotenuseSquared = baseSquared + perpendicularSquared;
//     let hypotenuse = Math.sqrt(hypotenuseSquared);

//     alert(hypotenuse);
//   }

// calculateHypotenuse(3, 4);

// No.9(1) by value:
// function calculateArea(width, height){
// return width * height;
// }
// calculateArea(5, 6);

// No.9(2) by variable:
// let width = 5;
// let height = 6;
// calculateArea(width, height)

// No. 10
// function palindrome() {
//     var string = prompt("enter your word");
//     var len = string.length;
//     var msg = "it is a palindrome"
//     for (i = 0; i < len / 2; i++) {
//         if (string[i] != string[len - 1 - i]) {
//             msg = "it is not a palindrome"
//         }
//     }
//     document.write(`${string}: ${msg}`);
// }
// palindrome();

// No. 11
// function capitalizeWords(str) {
//     var words = str.split(' ');
  
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i];
//       words[i] = word.charAt(0).toUpperCase() + word.slice(1);
//     }
  
//     return words.join(' ');
//   }
  
//   var inputString = 'the quick brown fox';
//   var outputString = capitalizeWords(inputString);
//   console.log(outputString);
  
// No.12
// function findLongestWord(str) {
//     var words = str.split(' ');
//     var longestWord = '';
  
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i];
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
  
//     return longestWord;
//   }
  
//   var inputString = 'Web Development Tutorial';
//   var longestWord = findLongestWord(inputString);
//   console.log(longestWord); 
  
// No 13
// function countLetterOccurrences(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//       if (str[i] === letter) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   var inputString = 'JSResourceS.com';
//   var letterToCount = 'S';
//   var occurrences = countLetterOccurrences(inputString, letterToCount);
//   console.log(occurrences);
 
// No.14
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference);
  }
  
  function calcArea(radius) {
    var area = Math.PI * radius*radius;
    console.log("The area is " + area);
  }
  var radius = 5;
  
  calcCircumference(radius); 
  calcArea(radius); 
  