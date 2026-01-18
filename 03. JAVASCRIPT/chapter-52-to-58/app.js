function foo(){
    var text = document.getElementById("text")
    text.className += " hidden"
    console.log(text);
}

// var num = 12
// num += 2
// console.log(num);
 

// function img() {
//     var image = document.getElementById("image")
//     image.src = "b.jpg"
//     console.log(image);
// }
// function fontSize() {
//     var image = document.getElementById("abc").style.fontSize = "50px"
//     console.log(image);  
// }

function getData() {
    var text = document.getElementById("parent");
    var para = text.getElementsByTagName("p")
    // text[0].style.color = "red"
    // text[1].style.color = "yellow"
    console.log(para);  
}