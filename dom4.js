let username = document.getElementById("username");
let password = document.getElementById("password");
let form = document.getElementById("form");
let errorBlock = document.getElementById("error");
console.log(username.value);

//submit event//
form.addEventListener("submit", e => {
  let errorMessages = [];
  e.preventDefault();
  var name = username.value;
  var pass = password.value;

  if (name == "" || name === null) {
    // console.log("username is required");
    errorMessages.push("username is required");
  } //username

  if (pass === "" || pass === null) {
    // console.log("password is required");
    errorMessages.push("password is required");
  } //password

  if (pass.length <= 6) {
    errorMessages.push("passwod should be minium 6 letters");
  }

  //checking errors//
  if (errorMessages.length > 0) {
    errorBlock.innerHTML = errorMessages.join("");
  } else {
    alert(`username is ${name}  password is ${pass}`);
    console.log(name);
    console.log(password);
    username.value = "";
    password.value = "";
  }

  //clent side validation
  //html5  built  in validation required minlength,maxlength,patter
});
