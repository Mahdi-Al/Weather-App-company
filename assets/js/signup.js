// // ! imports
// import {
//   saveToLocalStorage,
//   getFromLocalStorage,
// } from "../../utils/storageUtils.js";
// import { createElementRepo } from "../../utils/domUtils.js";

// //  *   select
// const usersData = []; // retrieve data from local storage
// const formEle = document.querySelector("form");
// console.log(formEle);
// const inputs = document.querySelectorAll("input");
// const lableEmail = document.querySelector("label");
// console.log(lableEmail);
// let currentId = Math.floor(Math.random() * 1000); // Global variable to keep track of the current ID
// // * functional
// formEle.addEventListener("submit", function getData(e) {
//   e.preventDefault();
//   lableEmail.before("");
//   const data = {
//     id: generateUniqueId(),
//     Email: inputs[0].value,
//     Password: inputs[1].value,
//     Address: inputs[2].value,
//     city: inputs[3].value,
//   };
//   function generateUniqueId() {
//     currentId++;
//     return currentId;
//   }

//   if (
//     inputs[0].value.trim() === "" &&
//     inputs[1].value.trim() === "" &&
//     inputs[2].value.trim() === "" &&
//     inputs[3].value.trim() === ""
//   ) {
//     lableEmail.before("");
//     console.log(data);
//     alert("you should compare all of Kards");
//     return;
//   }

//   if (!inputs[0].value.endsWith("@gmail.com")) {
//     lableEmail.before("");
//     lableEmail.before(
//       createElementRepo("p", "**Your Email Must ended with @gmail.com**", [
//         "text-danger",
//         "col-12",
//         "text-centre",
//       ])
//     );
//     return;
//   }
//   if (inputs[0].value.endsWith("@gmail.com")) {
//     lableEmail.before("");
//     saveToLocalStorage("userData", data);
//     usersData.push(data);

//     inputs[0].value = "";
//     inputs[1].value = "";
//     inputs[2].value = "";
//     inputs[3].value = "";
//     window.location.href = "../../pages/weather-app.html";
//   }
// });
// // localStorage.clear();
// console.log(usersData);
//! imports
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "../../utils/storageUtils.js";
import { createElementRepo } from "../../utils/domUtils.js";

//  *   select
const usersData = getFromLocalStorage("userData") || []; // retrieve data from local storage
const formEle = document.querySelector("form");
console.log(formEle);
const inputs = document.querySelectorAll("input");
const lableEmail = document.querySelector("label");
console.log(lableEmail);
let currentId = Math.floor(Math.random() * 1000); // Global variable to keep track of the current ID
// * functional
formEle.addEventListener("submit", function getData(e) {
  e.preventDefault();
  lableEmail.before("");
  const data = {
    id: generateUniqueId(),
    Email: inputs[0].value,
    Password: inputs[1].value,
    Address: inputs[2].value,
    city: inputs[3].value,
  };

  function generateUniqueId() {
    currentId++;
    return currentId;
  }

  if (
    inputs[0].value.trim() === "" ||
    inputs[1].value.trim() === "" ||
    inputs[2].value.trim() === "" ||
    inputs[3].value.trim() === ""
  ) {
    lableEmail.before("");
    console.log(data);
    alert("you should compare all of filds");
    return;
  }

  if (!inputs[0].value.endsWith("@gmail.com")) {
    lableEmail.before("");
    lableEmail.before(
      createElementRepo("p", "**Your Email Must ended with @gmail.com**", [
        "text-danger",
        "col-12",
        "text-centre",
      ])
    );
    return;
  }

  if (inputs[0].value.endsWith("@gmail.com")) {
    lableEmail.before("");
    usersData.push(data); // push data to usersData array
    saveToLocalStorage("userData", usersData); // save usersData to local storage
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    window.location.replace("../../pages/weather-app.html");
  }
});
// localStorage.clear();
console.log(usersData);
