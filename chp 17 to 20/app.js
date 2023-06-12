//number 1
// let arr = [""]

//number 2
// let matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// for (let i = 0; i < matrix.length; i++){
//     for (let j = 0;j < matrix[i].length; j++){
//     document.write(matrix[i][j] + " " )
//     }
//     document.write("</br>")
// }

//number 3
// for (let i = 0; i <= 10; i++){
//     document.write(i + "</br>");
// }
//number 4
// let tableNumber = prompt("Enter a table to show a multiplication table");
// let tableLenght = prompt("Enter lenght multiplication table"); 
// document.write("Multiplication table of  " + tableNumber + "Lenght " + tableLenght );
// for (let i = 1; i <= tableLenght; i++){
//     document.write ("</br></br>" + tableNumber + "x" +  i + "=" + i * tableNumber );
// }
//number 5
// let fruit = ["Apple","Banana","Mango","Orange","Strawberry"];
// for (let i = 0; i <= 4; i++){
//     document.write( "</br>" + fruit[i])
// }
// for (let i = 0; i <= 4; i++){
// document.write("</br>" + "Element at index " + i + " is " + fruit[i])
// }

//number 6
// document.write("<h2>Counting:</h2></br>" )
// for (let i = 0; i <= 15; i++){
//     document.write( i + ",");
// }
// document.write("<h2>Reverse Counting:</h2></br>" )
// for (let i = 10; i >= 0; i--){
//     document.write( i + ",");
// }
// document.write("<h2>Even:</h2></br>" )
// for (let i = 0; i <= 20; i++){
//     if (i % 2 === 0) {
//     document.write( i  + ",");    
//     }
// }
// document.write("<h2>Odd:</h2></br>" )
// for (let i = 0; i <= 20; i++){
//     if (i % 2 !== 0) {
//     document.write( i  + ",");    
//     }
// }
// document.write("<h2>Series:</h2></br>" )
// for (let i = 2; i <= 20; i++){
//     if (i % 2 === 0) {
//     document.write( i  + "k,");    
//     }
// }

//number 7
// let bakeryItems = ["cake","apple pie","cookies","chips","patties"];
// let item = prompt("Welcome to ABC Bakery.What do you want to order sir/mam?");
// let itemFound = false;
// for (let i = 0; i <=bakeryItems.length; i++){
// if (item.toLowerCase() === bakeryItems[i] ){
//     document.write(bakeryItems[i] + " is availabe at index " + i + " in our bakery")
//     itemFound = true;
//     break;
// }
// }
// if(!itemFound){
//     document.write("We are sorry " + item + " is not availabe in our bakery")
// }
//QUESTION#8
// let arrNum = [24, 53, 78, 91, 12];
// document.write("<b>Aray items:</b>" + arrNum);
// let largest = arrNum[0];
// for (let i = 0; i < arrNum.length; i++) {
//     if (arrNum[i] > largest) {
//        largest = arrNum[i]
//     }
// }
// document.write("<b>The largest number is</b> " + largest);

//QUESTION#9
// let arrNum2 = [24, 53, 78, 91, 12];
// document.write("<b>Array items </b></br>" + arrNum2 + "</br>");
// let smallest = arrNum2[0];
// for (let i = 0; i < arrNum2.length; i++){
//     if (arrNum2[i] < smallest) {
//         smallest = arrNum2[i]
//     }
// }
// document.write("<b>The smallest number is</b> " + smallest)

//number 10
// for (let i = 1; i <= 20; i++){
//     document.write(i * 5 + "," )
// }