// ! imports
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "../../utils/storageUtils.js";
import { createElementRepo } from "../../utils/domUtils.js";

//  *   select
const formEle = document.querySelector("form");
console.log(formEle);
const inputs = document.querySelectorAll("input");
const lableEmail = document.querySelector("label");
console.log(lableEmail);
let currentId = 0; // Global variable to keep track of the current ID
// * functional
formEle.addEventListener("submit", function getData(e) {
  e.preventDefault();
  lableEmail.before("");
  const data = [
    {
      id: generateUniqueId(),
      Email: inputs[0].value,
      Password: inputs[1].value,
      Address: inputs[2].value,
      city: inputs[3].value,
    },
  ];

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
    // return getData(data);
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
    // return getData(data);
  } else if (inputs[0].value.endsWith("@gmail.com")) {
    lableEmail.before("");
    // return getData(data);
    saveToLocalStorage("userData", data);

    window.location.replace("../../pages/weather-app.html");

    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
  }
  // else {

  // }
});
// localStorage.clear();
