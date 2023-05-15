// 1 
// var number1 = 3
// var number2 = 5
// var number3 = number1+number2
// document.write("sum of 3 and 5 is " + number3) 

// 2 
// var number1 = 3
// var number2 = 5
// var number3 = number1 * number2
// document.write("product of 3 and 5 is " + number3) 

// var number1 = 3
// var number2 = 5
// var number3 = number1 - number2
// document.write("subtraction of 3 and 5 is " + number3) 


// var number1 = 15
// var number2 = 3
// var number3 = number1/number2
// document.write("division of 15 and 3 is " + number3) 


// var number1 = 81
// var number2 = 10
// var number3 = number1%number2
// document.write("modulus of 81 and 10 is " + number3) 


// 3 
// Declare a variable
// let num;
// document.write("Value after variable declaration is: " + num + "<br>");
// num = 5;
// document.write("Initial value: " + num + "<br>");
// num++;
// document.write("Value after increment is: " + num + "<br>");
// num += 7;
// document.write("Value after addition is: " + num + "<br>");
// num--;
// document.write("Value after decrement is: " + num + "<br>");
// document.write("The remainder is: " + (num % 3) + "<br>");


// // 4
// let ticketPrice = 600;
// let totalCost = ticketPrice * 5;
// document.write("The total cost of buying 5 movie tickets is: " + totalCost + " PKR");


// 5 
// Get the number whose multiplication table needs to be displayed
// let num = 9
// document.write(num + " x 1 = " + (num * 1) + "<br>");
// document.write(num + " x 2 = " + (num * 2) + "<br>");
// document.write(num + " x 3 = " + (num * 3) + "<br>");
// document.write(num + " x 4 = " + (num * 4) + "<br>");
// document.write(num + " x 5 = " + (num * 5) + "<br>");
// document.write(num + " x 6 = " + (num * 6) + "<br>");
// document.write(num + " x 7 = " + (num * 7) + "<br>");
// document.write(num + " x 8 = " + (num * 8) + "<br>");
// document.write(num + " x 9 = " + (num * 9) + "<br>");
// document.write(num + " x 10 = " + (num * 10) + "<br>");


// 6 
// var celsiusTemp = prompt("what celsius tempreture you want to convert in farenheit")
// var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
// document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F <br>");

// var fahrenheitTemp2 = prompt("what farenheit temprature you want to convert in celsius");
// var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5 / 9;
// document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");


// 7 
// var item1Price = 650;
// var item2Price = 100;
// var item1Qty = 3;
// var item2Qty = 7;
// var shippingCharges = 100;

// let totalCost = (item1Price * item1Qty) + (item2Price * item2Qty) + shippingCharges;
// document.write("<h2>Shopping Cart Receipt</h2>");
// document.write("<p>price of item 1 is " + item1Price + " PKR</p>");
// document.write("<p>quantity of item 1 is " + item1Qty + "</p>");
// document.write("<p>price of item 2 is " + item2Price + " PKR</p>");
// document.write("quantity of item 2 is " + item2Qty + "</p>");
// document.write("<p>Shipping charges: " + shippingCharges + " PKR</p>");
// document.write("<p>Total cost of your order is: " + totalCost + " PKR</p>");


// 8 
// Store total marks and marks obtained by the student
// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = (obtainedMarks / totalMarks) * 100;
// document.write("<h1>MARK SHEET</h1>")
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Obtained Marks: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "%");


// 9
// var usDollars = 10;
// var saudiRiyals = 25;

// var totalRupees = (usDollars * 104.80) + (saudiRiyals * 28);

// document.write("Total currency in PKR: " + totalRupees);

// 10
// var num = 15;
//var result = ((num + 5) * 10) / 2;
// document.write("The result is: " + result);


// 11 
// var currentYear = 2023;
// var birthYear = 2005;
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;
// document.write("They are either " + age2 + " or " + age1 + " years old.");


// 12 
// var radius = 7;
// document.write("radius of the circle is " + radius + "<br>")
// var circumference = 2 * 3.142 * radius;
// document.write("The circumference of the circle" + " is " + circumference + "<br>");
// var area = 3.142 * radius * radius;
// document.write("The area of the circle" + " is " + area);


// 13 
var favoriteSnack = "lays";
var currentAge = 18;
var maxAge = 65;
var amountPerDay = 2;
var yearsRemaining = maxAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var snacksNeeded = daysRemaining * amountPerDay;
document.write("You will need " + snacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");
