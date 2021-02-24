console.log(" i am server ");
//output method//

//popup methods//
// alert();
// confirm();
// prompt();

// built in window functions---and these work with client side//

// window.alert("i am alert");

// alert("it is working only inside browser"); //it has only one option  ok //
// confirm("i am confirm"); //it has two options that is cancel and ok

// let age = 10;
// if (age > 21) {
//   alert("you are eligible");
// } else {
//   alert("you are not");
// }

//prompt//
// prompt("please enter your name");

// let username = prompt("enter your name");
// document.write(reverseAstring(username));

// function reverseAstring(str) {
//   return [...str].reverse().join("");
// }

// let username = prompt("enter your name");
// document.write(reverseAstring(username));

//print  content on a webpage use document.write();//
//dom method//
// document.getElementById("h1").innerHTML("h1") = " i am devi";
// document.getElementById("h1").innerText() = '<h1 style="color:red">i am anjana devi</h1>';

//let keyword and var keyword//

for (var i = 0; i <= 100; i++) {
  let username = "anjana"; //block scope//
  console.log(i);
}
console.log(username);

// "use-strict"
console.log(username); //undefined if var key word variable hoisting is working
var username;

// console.log(username1); //if let keyword
//uncaught referenceError:cannaot access "username1" before intialization
//variable hoisting is not working in let keyword.//

var username2 = "anjana";
username2 = "devi";
console.log(username2);

var username3 = "sai";
console.log(username3);
var username3 = "anjana";
console.log(username3);

//if var keyword  valid declaration//

// let user1 = "sashi";
// let user1 = "shshira";
//if let keyword
//uncaught SyntaxError:Identifer user1 has already defined//

// let username4 = "sai";
// username4 = "pushkal";
// console.log(username4);

// const user2 = "anjana";
// user2 = "devi";
// console.log(user2);
//if const keyword
//Uncaught TypeError: Assignment to constant variable.

//if it is object  in const keyword we can change const keyword value//

// const users = {
//   name: "anjana",
//   company: "google",
//   pancard: "234556",
// };

// users = {
//   age: 20,
//   salary: 400000,
// };
// console.log(users);

const user5 = {
  name: "anitha",
  company: "wipro",
  pancard: "45677",
};
user5.pancard = "56789";
console.log(user5);

// Uncaught TypeError: Assignment to constant variable.//

const employee = [];
employee.unshift("anjana");
console.log(employee);

//this keyword//
//in browser this means window//
//console.log(this);// if browser window object
//console.log(this);// if server global object//

var fullstack = "nodejs";
console.log(this.fullstack);
console.log(this === window);

let fullstack1 = function () {
  console.log(this);
};
new fullstack1();

let fullstack2 = function () {
  console.log(this);
};
fullstack2();

let userObject = {
  name: "anjana",
  age: 22,
  company: "wipro",
  salary: 300000000,
  details() {
    console.log(this);
  },
};
userObject.details();

// let userObject1 = {
//   name: "anjana",
//   age: 22,
//   company: "wipro",
//   salary: 300000000,
//   details=function(){
//     console.log(this);
//   },
// };
// userObject1.details(); Uncaught SyntaxError: Invalid shorthand property initializer

let userObject4 = {
  name: "anjana",
  age: 22,
  company: "wipro",
  salary: 300000000,
  details: () => {
    console.log(this);
  },
};
userObject4.details();

let userObject5 = {
  name: "anjana",
  age: 22,
  company: "wipro",
  salary: 300000000,
  details: function () {
    console.log(`my name is ${this.name} my age is ${this.age}
     i work for ${this.company}  
     i am getting salary ${this.salary}rs..
     `);
  },
};
userObject5.details();

let userObject6 = {
  name: "anjana",
  age: 22,
  company: "wipro",
  salary: 300000000,
  details: () => {
    console.log(`my name is ${this.name} my age is ${this.age}
     i work for ${this.company}  
     i am getting salary ${this.salary}rs..
     `);
  },
};
userObject6.details(); //undefined for arrow function//

let userObject7 = {
  name: "anjana",
  age: 22,
  company: "wipro",
  salary: 300000000,
  details: () => {
    console.log(`my name is ${userObject7.name} my age is ${userObject7.age}
     i work for ${this.company}  
     i am getting salary ${userObject7.salary}rs..
     `);
  },
};
userObject7.details(); //current object//

let users3 = {
  name: "anjana",
  age: 23,
  skills: ["java", "nodejs", "python", "reactjs"],
  details: function () {
    this.skills.forEach(function (skills) {
      console.log(this.name, skills);
    }, this);
  },
};
users3.details();

var myName = "sashi";

function Username7() {
  var myname = "shishira";
  console.log(myname);
  console.log(this.myName);
}
Username7();

let fullName = {
  getFullName: function () {
    return this.firstname + this.lastname;
  },
};

let userData = {
  firstname: "anjana",
  lastname: "devi",
};

let user6 = {
  firstname: "anitha",
  lastname: "devi",
};
console.log(fullName.getFullName.call(userData, "myName"));
console.log(fullName.getFullName.apply());

//call apply and bind methods//

let obj = {
  num: 10,
};

function addNumber(a, b, c) {
  return this.num + a + b + c;
}

console.log(addNumber.call(obj, 100, 50, 60));
console.log(addNumber.apply(obj, [100, 50, 60]));
let result = addNumber.bind(obj, 100, 50, 60);
console.log(result());

//callback function//
function username45() {
  console.log("sai");
}
function user45(callback) {
  return callback();
}
console.log(user45(username45)); //sai//

//convert nornal function to callback function//
//without callback//

function calculate(num1, num2, calType) {
  if (calType == "add") {
    return num1 + num2;
  } else if (calcType == "multiply") {
    return num1 * num2;
  } else {
    return "no operation";
  }
}
console.log(calculate(10, 10, "add"));
console.log(calculate(10, 10, "multiply"));

function outerFunction() {
  var i = "i am outertext";
}
outerFunction();
