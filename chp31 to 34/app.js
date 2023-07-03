//                                                    CHAP#31-34

//no.1
// let currentDate = new Date();
// document.write(currentDate);

//no.2
// let currentMonth = new Date();
// let monthNames = ["January","Febuary","March","April","May","June","July","Augest","September","October","November","December"];
// monthNames = monthNames [currentMonth.getMonth()];
// document.write("<b>Current month:</b> " + monthNames);

//no.3
// let today = new Date();
// let dayNames = ["Sun","Mon","Tues","Wednes","Thurs","Fri","Sat"];
// dayNames = dayNames[today.getDay()];
// document.write("Today is " + dayNames);

//no.4
// let today = new Date();
// let dayNames = ["Sun","Mon","Tues","Wednes","Thurs","Fri","Sat"];
// dayNames = dayNames[today.getDay()];
// if (dayNames === "Sat" || dayNames === "Sun"){
//     document.write("It's Fun Day");
// }
// else{
//     document.write("It's Working Day");
// }

//no.5
// let today = new Date();
// let day = today.getDate();
// if (day <= 15) {
//     document.write("<b>First fifteen days of the month</b>");
// } 
// else {
//     document.write("<b>Last fifteen days of the month</b>");
// }  

//no.6
// let todayDate = new Date();
// document.write(todayDate + "</br>");
// let todayMilli = todayDate.getTime();
// document.write("Elapsed millisecond since January 1, 1970: " + todayMilli + "</br>");
// let todayMin = todayMilli / 1000 / 60 /60;
// document.write("Elapsed minutes since January 1, 1970: " + todayMin + "</br>");

//no.7
// let date = new Date();
// let hours = date.getHours();
// if (hours <= 11) {
//     alert("It's A.M");
// } else {
//     alert("It's P.M");  
// }

//no.8
// let date = new Date("11 31 2023");
// document.write("<b>LaterDate: </b>" + date);

//no.9
// let ramdamDate = new Date("2 23 2023");
// let currentDate = new Date();
// let date = currentDate.getTime() - ramdamDate.getTime();
// let days = (Math.floor(date / (1000 * 60 * 60 * 24)));
// document.write(days + " days have passed since 1st Ramdan,2023.");

//no.10
// let refDate = new Date("6 2 2023 15:30:21");
// let date = new Date();
// let dates = date.getTime() - refDate.getTime();
// let elipsedSec = Math.floor(dates/1000)
// document.write("On refrence date " + refDate + "</br>" + elipsedSec + " since had passed since biginning of 2023" );

//no.11
// let currentDate = new Date();
// document.write(currentDate + "</br>");
// let hours = currentDate.getHours() ;
// let updateDate = new Date(currentDate.setHours(hours-1))
// document.write("1 hour ago,it was " + updateDate);

//no.12
// let currentDate = new Date();
// document.write(currentDate + "</br>");
// let year = currentDate.getFullYear() ;
// let updateyear = new Date(currentDate.setFullYear(year-100))
// document.write("100 years back,it was " + updateyear);

//n.13
// let today = new Date();
// let year = today.getFullYear();
// let age = +prompt("Entr your age");
// document.write("<b>Your age is: </b>" + age + "</br>" + "<b>Your birth year is: </b>" + (year-age));

//no.14
// let customerName = "ABC Customer";
// let month = "Febuary";
// let numOfUnits = 410;
// let chargesUnit = 16;
// document.write("<h2>K-Electric Bill</h2>" + "</br>" + "<b>Customer Name: </b>" + customerName + "</br>" + "<b>Month: </b>" + month + "</br>" + "<b>Numbe of units: </b>" +numOfUnits + "</br>" + "<b>Charges per unit: </b>" + chargesUnit);
// let netAmount = numOfUnits * chargesUnit;
// document.write("</br>" + "<b>Net Amount Payable (within Due Date): </b>" + netAmount + "</br>");
// let paySurcharge = 350;
// document.write( "<b>Late payment surcharge: </b>" + paySurcharge + "</br>");
// let grossAmount = netAmount + paySurcharge;
// document.write( "<b>Gross Amount Payable(after Due Date): </b>" + grossAmount);