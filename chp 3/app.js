// 1. 
// var age = "18"
// alert(age);

// 2.
var visitCount = parseInt(localStorage.getItem('visitCount')) || 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);
alert("You have visited this site " + visitCount + " times");
