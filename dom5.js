// let lists = document.querySelectorAll("li");
// let form = document.getElementById("form");
// let input = document.getElementById("input");
// form.addEventListener("submit", e => {
//   e.preventDefault();
//   let item = input.value;
//   console.log(item);
//   lists.forEach(list => {
//     list.append(item);
//   });
// });

// for (let list of lists) {
//   let btn = document.createElement("button");
//   btn.classList.add("btn", "btn-danger", "btn-sm", "float-right");
//   btn.textContent = "Remove";
//   list.appendChild(btn);

//   //dom events
//   list.addEventListener("click", e => {
//     console.log(e.target);
//     list.remove(); //remove method used for deleting nodelist

//     btn.addEventListener("click", e => {
//       console.log(e.target);
//       //list remove();
//       btn.parentElement.remove();
//     });
//   });
// }

child.addEventListener("click", e => {
  console.log("child clicked");
  e.stopPropagation();
});
parent.addEventListener("click", e => {
  console.log("parent clicked");
});
grandParent.addEventListener("click", e => {
  console.log("grand parent clicked");
});
