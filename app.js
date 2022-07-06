const button = document.querySelector(".btn button");
const body = document.querySelector("body");
const color = ["violet","Indigo","blue","green","yellow","red"];

body.style.backgroundColor = "grey";

button.addEventListener('click',()=>{
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
});