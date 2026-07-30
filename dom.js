// let heading2=document.getElementsByClassName("heading");
// console.log(heading2);
// let button = document.getElementById("myId");
// console.dir(button);
// let parah=document.getElementsByTagName("p");
// console.log(parah);
// let firstElement = document.querySelector("p");
// console.dir(firstElement);
// let allElement = document.querySelectorAll("p");
// console.dir(allElement);
// let div= document.querySelector("div");
// console.dir(div);
// // let heading=div.querySelector("h1");
// let h2 =document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText + " from apna collage student";
// let divs = document.querySelectorAll(".box");
// let idx=1;
// for ( div of divs) {
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }
// divs[0].innerText ="new unique value 1"
// divs[1].innerText ="new unique value 2"
// divs[2].innerText ="new unique value 3"
// console.log(divs[0])
// let div=document.querySelector("div");
// console.log(div);
// let id=div.getAttribute("id");
// console.log(id);
// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// let className = para.getAttribute("class");
// let button =document.createElement("button");
// button.innerText="click me";
// button.style.backgroundColor="red";
// button.style.color="white";
// document.querySelector("body").prepend(button);
// let para=document.querySelector("p");
//let btn1=document.querySelector("#btn1");
// btn1.onclick=(evt)=>{
//     console.log("you clicked btn1");
//     let a=25;
//     a++;
//     console.log(a);
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// }
// let div1=document.querySelector("#div1");
// div1.onmouseover=()=>{
//     console.log("you hovered on div1");
// }

// btn1.addEventListener("click",()=>{
//     console.log("button was clicked");
// });
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked-handler 2");
// });
let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let mode ="light";

modeBtn && modeBtn.addEventListener("click",()=>{
    console.log("you are trying to change mode");
    if(mode==="light"){
        mode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
     } else{
        mode="light";
        body.classList.add("light");
        body.classList.remove("dark");
     }
     console.log(mode);
});
