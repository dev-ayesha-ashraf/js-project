// 1
// var a = 10;
// document.write("the value of a is " + a +"<br>");

// document.write("the value of ++a is " + ++a +"<br>");
// document.write("Now the value of a is " + a +"<br>");
// document.write("the value of a++ is " + a++ +"<br>");
// document.write("Now the value of a is " + a +"<br>");

// document.write("the value of --a is " + --a +"<br>");
// document.write("Now the value of a is " + a +"<br>");
// document.write("the value of a-- is " + a-- +"<br>");
// document.write("Now the value of a is " + a +"<br>");






// 2
// var a = 2;
// var b = 1;
// --a = 1
// --b = 0
// --a - --b = 1-0 = 1
// ++b = 1
// --a - --b + ++b = 1+1 = 2
//  b-- = 1
// --a - --b + ++b + b-- = 2+1 = 3
// Hence,

// var result = alert(--a - --b + ++b + b--)
// document.write("<p> a is 2 </p>")
// document.write("<p>b is 1</p>")
// document.write("result is" + 3);


// 3
// var name = prompt("What's your name?");
// alert("Hello, " + name );

// 4 
// var num = prompt("Enter a number to display its multiplication table:");


// if (num === null) {
//   num = 5;
// }
// document.write("<h2>Multiplication Table of " + num + "</h2>");
// document.write(num + " x 1 = " + num*1 + "<br>");
// document.write(num + " x 2 = " + num*2 + "<br>");
// document.write(num + " x 3 = " + num*3 + "<br>");
// document.write(num + " x 4 = " + num*4 + "<br>");
// document.write(num + " x 5 = " + num*5 + "<br>");
// document.write(num + " x 6 = " + num*6 + "<br>");
// document.write(num + " x 7 = " + num*7 + "<br>");
// document.write(num + " x 8 = " + num*8 + "<br>");
// document.write(num + " x 9 = " + num*9 + "<br>");
// document.write(num + " x 10 = " + num*10 + "<br>")


// 5 

//   var subject1 = prompt("Enter name of subject 1:");
//   var subject2 = prompt("Enter name of subject 2:");
//   var subject3 = prompt("Enter name of subject 3:");
//   var totalMarks = 100;
//   var marks1 = Number(prompt("Enter obtained marks for " + subject1 + ":"));
//   var marks2 = Number(prompt("Enter obtained marks for " + subject2 + ":"));
//   var marks3 = Number(prompt("Enter obtained marks for " + subject3 + ":"));

//   var obtainedMarks = marks1 + marks2 + marks3;
//   var percentage = (obtainedMarks / (totalMarks * 3)) * 100;
//   document.write("<table>");
//   document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
//   document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td></tr>");
//   document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td></tr>");
//   document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td></tr>");
//   document.write("<tr><td colspan='2'>Total Obtained Marks:</td><td>" + obtainedMarks + "</td></tr>");
//   document.write("<tr><td colspan='2'>Percentage:</td><td>" + percentage + "%</td></tr>");
//   document.write("</table>");
