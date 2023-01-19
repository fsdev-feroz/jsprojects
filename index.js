// console.log("Hello World");
let btn = document.getElementById("btn");
btn.addEventListener("click",myFun)
// console.log(btn);

function myFun(){
    let heading = document.querySelector("h1");
    let inputValue = document.getElementById("inputValue").value;
    if(inputValue != ''){ 
    heading.innerHTML = inputValue;
    document.querySelector("input").value = "";
    console.log("Everything is working")
    }
}
// myFun()