// let username = document.getElementById("username");
// console.log("username");
// username.addEventListener("keyup", e => {
//   console.log(e);
// });

// let username = document.getElementById("username");
// console.log("username");
// username.addEventListener("keyup", e => {
//   console.log(e.target.value); //it is getting current value
// });

// let textarea = document.getElementById("textarea");
// let textareaClone = document.getElementById("textareaClone");

// textarea.addEventListener("keyup", e => {
//   let result = e.target.value;
//   textareaClone.innerHTML = result;
//   textareaClone.innerHTML = [...result].reverse().join(""); //to reverse//
//   if (result.length > 10 && result.length < 20) {
//     textareaClone.style.color = "red";
//   } else if (result.length > 20 && result.length > 30) {
//     textareaClone.style.color = "green";
//   }
// });

// let textarea = document.getElementById("textarea");
// let textareaClone = document.getElementById("textareaClone");
// textarea.addEventListener("keyup", e => {
//   let result = e.target.value;
//   textareaClone.innerHTML = result;
//   if (result.length > 20) {
//     textareaClone.innerHTML = [...result].reverse().join("");
//   }
// });

// let textarea = document.getElementById("textarea");
// let textareaClone = document.getElementById("textareaClone");
// textarea.addEventListener("keyup", e => {
//   let result = e.target.value;
//   textareaClone.innerHTML = result;
//   if (result.length > 20) {
//     document.textareaClone.innerHTML =
//     <Image src="./images/"></Image>
//   }
// });

let username = document.getElementById("username");
let password = document.getElementById("password");
username.addEventListener("keyup", e => {
  let res = e.target.value;
  if (res.length < 3) {
    username.style.borderColor = "red";
    username.style.background = "red";
    username.style.color = "red";
  } else if (res.length > 3 && res.length < 10) {
    username.borderColor = "orange";
    username.background = "orange";
  } else if (res.length > 10) {
    username.style.borderColor = "green";
    username.style.background = "green";
    username.style.color = "white";
  }
});
