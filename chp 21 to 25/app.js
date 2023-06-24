//NO. 1
// let firstName = prompt("Enter first Name");
// let lastName = prompt("enter last Name");
// firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
// lastName = lastName.charAt(0).toUpperCase()  + lastName.slice(1);
// document.write("Welcome " + firstName + " " + lastName)


//NO. 2
// let favMob = prompt("Enter your fav mobile model");
// document.write("My favourite phone is: " + favMob + "</br>" + "Lenght of string: " + favMob.length) 

//NO. 3
// let string = "Pakistani";
// document.write("String: " + string + "</br>" + "Index of 'n': " + string.indexOf("n") )

//NO. 4
// let text = "Hello World";
// document.write("String: " + text + "</br>" + "Last index of 'l': " + text.lastIndexOf("l") );

//NO. 5
// let character = "Pakistani";
// let character2 = character.charAt(3);
// document.write("String: " + character + "</br>" + "Character at index 3: " +character2);

//NO. 6
// let firstName = prompt("Enter first Name");
// let lastName = prompt("enter last Name");
// document.write( firstName.concat(" ",lastName))

//NO. 7
// let city = "Hyderabad";
// let replace = city.replace("Hyder","Islam")
// document.write("City: " + city + "</br>" + "After eplacement: " + replace);

//NO. 8
// let msg = "Ali and Sami are best friends. They play cricket and football together.";
// let msg1 = msg.replace(/and/g,"&");
// document.write("message: " + msg + "</br>" + "After eplacement: " + msg1)

//NO. 9
// let num = "472";
// document.write("Value; " + num + "</br>type of: " +typeof num);
// let num2 ="472";
// num2 = +(num2)
// document.write("</br>" + "Value; " + num2 +  "</br>type of: " +typeof num2)
//NO. 10

// let userInput = prompt("Enter text:") ;
// userInput = userInput.toUpperCase();
// document.write(userInput);

//NO. 11
// let userInput2 = prompt("Enter text");
// document.write("User input: " + userInput2 + "</br>");
// let titleCase = userInput2.slice(0,1)
// titleCase = titleCase.toUpperCase()
// document.write("Title Case: " + titleCase + userInput2.slice(1))

//NO. 12
// let num = 35.36;
// num = num.toString();
// document.write(num)
// let result = num.replace(".","");
// document.write("Number: " + num + "</br>" + "Result: " + result);

//NO. 13
// let userInput = prompt("Enter a username");
// for (let i = 0; i < userInput.length; i++){
// let asciiCode = userInput.charCodeAt(i)
// if (asciiCode === 33 || asciiCode === 44 || asciiCode === 46 || asciiCode === 64)
// alert("Enter a valid username")
// }

//NO. 14
// let bakery = prompt("Welcome to ABC bakery.What do you order sir/mam?");
// let bakeryItem = ["cake", "apple pie", "cookie", "chips", "patties"];
// let found = false;
// for (let i = 0; i < bakeryItem.length; i++){
// if (bakery.toLowerCase() === bakeryItem[i]){
//     found = true;
// }
// }
// if (found){
//  console.log(bakery + " is available at index " + " in our bakery ")
// }
// else{
//  console.log("We are Sorry " + bakery + " is not available in our bakery ")
// }


//NO. 15

//NO. 16
// let university = "University of Karachi";
// let array = university.split("");
// document.write(array.join("</br>"));

//NO. 17
// let userInput = prompt("Enter text: ");
// let lastChar = userInput.charAt(userInput.length-1);
// document.write("User Input: " + userInput + "</br>" + "Last character of input: " + lastChar);

//NO. 18
// let text = "The quick brown fox jumps over the lazy dog";
// text = text.charAt("the");
// document.write(text)