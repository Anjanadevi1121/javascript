// getElementById

let demo = document.getElementById("demo");
console.log("demo");

// getElementByClassName

// let links = document.getElementsByClassName("links");
// console.log("links");
// console.log(Array.isArray(links));
// // links[0].style.background = "red";
// for (let i = 0; i <= links.length; i++) {
//   links[i].style.background = "crimson";
// }

// let links1 = document.getElementsByTagName("a");
// links1[0].style.color = "#111";
// links1[4].style.color = "crimson";

// for (let i = 0; i <= links1.length; i++) {
//   links1[i].style.color = "hotpink";
// }

//add attributes
//setAttribute method

// demo.setAttribute("class", "btn btn-danger");
// demo.setAttribute("title", "title is tool of an element");
// demo.setAttribute("name", "i am name");

// console.log(demo.getAttribute("id")); //demo
// console.log(demo.getAttribute("class")); //lead

// //dom property way
// demo.className = "lead";
// //dom  method and token way

// let token = demo1.classList.add("anjana", "sana"); //classlist is creating dom token
// console.log(demo1.classList);
// console.log(demo1.className);

// //remove

// let demo2 = document.getElementById("demo");
// demo.classList.remove("lead");

// let links = document.getElementsByTagName("a");
// //html coolection
// //loop this link
// for (let i = 0; i < links.length; i++) {
//   links[i].className = "links-" + i;
// }

// Array.from(links).forEach(function (link, i) {
//   console.log(link);
//   link.className = "ArrayFrom-" + i;
// });

// //iterator
// function jspiders() {
//   return arguments;
// }
// let str = "hello jspiders";
// let users = jspiders("anjana", "sai");

// for (let user of users) {
//   console.log(user);
// }

// for (let s of str) {
//   console.log(s);
// }

// let linksOdd = document.querySelectorAll("a:nth-child(odd)");
// let linksEven = document.querySelector("a:nth-child(even)");

// console.log(Array.isArray(linksOdd));
// linksOdd.forEach(odd => odd.classList.add("btn", "btn-success"));
// linksEven.forEach(even => even.classList.add("btn", "btn-danger"));

// let template = document.querySelector(".template");
// let demo33 = document.querySelector("#demo33");
// console.log(template);
// console.log(demo33);

//dom//
let template6 = document.getElementById("template");

template6.addEventListener("click", event => {
  console.log(" i am  Addeventlistner method");
  console.log(event.target); //it prints current element
  console.log(event.type); //type of event
  console.log(this); //window
  console.log(event.clientX); //x-axis position
  console.log(event.clientY); //y-axis position
});

let btn = document.getElementById("btn");
btn.addEventListener("click", e => {
  btn.classList.toggle("active");
  let getActiveClass = btn.getAttribute("class", "active");
  console.log(getActiveClass);
});

let btn = document.getElementById("btn");
btn.addEventListener("click", e => {
  let changeColor = e.target.classList.toggle("active");
  console.log(changeColor);
  if (changeColor === true) {
    document.body.style.background = "crimson";
    e.target.style.background = "white";
    e.target.style.border = "none";
    e.target.style.color = "#111";
  } else {
    document.body.style.background = "crimson";
    e.target.style.background = "white";
    e.target.style.border = "none";
    e.target.style.color = "#111";
  }
});

// let btn=document.getElementById("btn")
// btn.addEventListener("click",e=>{
//   let changeText=e.target.classList.toggle("active")
//   console.log(changeText)
//   if(changeText===true){
//     e.target.innerHTML="successfully submited"
//     e.target.className=
//   else{

//   }
// })
