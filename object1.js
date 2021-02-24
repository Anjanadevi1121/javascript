//getElementById

let demo = document.getElementById("demo");
console.log(demo);

//getElementsByClassName
// let links=document.getElementsByClassName ("links");
// console.log("links");
// console.log(Array.isArray(links));
// links[0].style.background="red"; //for single element
// for(let i=0;i<=links.length;i++)
// {
// 	links[i].style.background="crimson";

// }

//getElementsByTagName
// let links1=document.getElementsByTagName("a");
// // links1[0].style.color="black";
// for(let i=0;i<=links1.length;i++)
// {
// 	links1[i].style.color="hotpink";

// }

// //add attributes
let demo1 = document.getElementById("demo");
demo1.setAttribute("class", "btn btn-danger");
demo1.setAttribute("title", "i am a toolkit");

console.log(demo1.getAttribute("id")); //demo
console.log(demo1.getAttribute("class")); //btn btn-danger

// // //dom property way0
// demo1.className="lead";

// //token way
let token = demo.classList.add("java", "javascript", "html");
console.log(demo.classList);
console.log(demo.className);

// //remove
let demo3 = document.getElementById("demo");
demo3.classList.remove("lead");

// let links=document.getElementsByTagName("a");
// for(let i=0;i<links.length;i++){
// 	links[i].className="links-"+i;
// }

// //for-of statements

let links2 = document.getElementsByTagName("a");
for (let link of links2) {
  console.log(link);
  // link.className="link"+;
}

// //for each
// let links3=document.getElementsByTagName("a");
// links3.forEach(function(link,i){
// 	console.log(link);

// }); //error because for each is not a function we have to use spread or array from

// //spread
let links3 = document.getElementsByTagName("a");
[...links3].forEach(function (link, i) {
  console.log(link);
  link.className = "link" + i; //spread
});

// //array from
// let links4=document.getElementsByTagName("a");
// Array.from(links4).forEach(function(link,i){
// 	console.log(link); //array.from

// });

//iterating over an array
let array1 = [10, 30, 40];
for (let value of array1) {
  console.log(value);
}

//iterating over string
let string = "sana";
for (let value1 of string) {
  console.log(value1);
}

//arguments object
(function () {
  for (let argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3);
// //iterating over string
function Jspiders() {
  return arguments;
}
let str = "hello jspiders";
let users = Jspiders("sana", "ganesh", "cherry");
for (let user of users) {
  console.log(user);
}
for (let s of str) {
  console.log(s);
}

// //tagname and query selector
let linksold = document.getElementsByTagName("a");
console.log(linksold, "tagname way"); //htmlcollection

let linksnew = document.querySelectorAll("a");
console.log(linksnew, "queryselector way"); //nodelist here we can use css selectors like id,class,elementand psuedo

// //to add colors
let linksodd = document.querySelectorAll("a:nth-child(odd)");
let linkseven = document.querySelectorAll("a:nth-child(even)");
console.log(Array.isArray(linksodd));
linksodd.forEach(odd => odd.classList.add("btn", "btn-success"));
linkseven.forEach(even => even.classList.add("btn", "btn-danger"));

let template = document.querySelector(".template");
let demo5 = document.querySelector("#demo1");
// let p=document.querySelector(p);
console.log(template);
console.log(demo5);
// console.log(p);
