//  No.1
// function showMsg(){
//     alert("welome!")
// }

// No.2
// function sales(){
//     alert("thanks for purchasing")
// }

// No.3
// function deleteText(button) {
//     var listItem = button.parentNode;
//     var studentList = listItem.parentNode;
//     studentList.removeChild(listItem);
//   }

// No.4
// var image = document.getElementById("image");
// var setImage = "download.jpg";
// var newImage = "download (1).jpg"
// function changePicture(){
//     image.src = newImage;
// }
// function resetPicture(){
//     image.src = setImage;
// }

// No.5
var mainTitle = document.getElementById("title");
var btnIncrement = document.getElementById("increment");
var btndecremet = document.getElementById("decrement");
var btnreset = document.getElementById("reset");
var currentValue = 0;

btnIncrement.addEventListener('click' , () => {
    currentValue++;
    mainTitle.textContent = currentValue;
})


btndecremet.addEventListener('click' , () => {
    currentValue--;
    mainTitle.textContent = currentValue;
})

btnreset.addEventListener('click' , () => {
    currentValue = 0;
    mainTitle.textContent = currentValue;
})