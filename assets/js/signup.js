// ! imports
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "../../utils/storageUtils.js";
import { createElement } from "../../utils/domUtils.js";

//  *   select
const formEle = document.querySelector("form");
console.log(formEle);
const inputs = document.querySelectorAll("input");
let currentId = 0; // Global variable to keep track of the current ID
// * functional
formEle.addEventListener("submit", function getData(e) {
  e.preventDefault();

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
  console.log(data);
  // console.log(saveToLocalStorage("userData", data));
  saveToLocalStorage("userData", data);

  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";
  inputs[3].value = "";
});
