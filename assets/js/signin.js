// ! imports
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "../../utils/storageUtils.js";
import { createElementRepo } from "../../utils/domUtils.js";

const getDataFromStorage = getFromLocalStorage("userData");
// const saveData = saveToLocalStorage();
const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
window.onload = function () {
  inputs[0].value = "";
  inputs[1].value = "";
};

console.log(getDataFromStorage);
const formSignIn = document.querySelector("form");
formSignIn.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    inputs[0].value.trim() === "mahdialikhaniapr2005@gmail.com" &&
    inputs[1].value.trim() === "D85FHDq65jMmjZ!"
  ) {
    window.location.replace("../../pages/adminPanel.html");
  } else if (
    inputs[0].value.trim() === "Aghil@gmail.com" &&
    inputs[1].value.trim() === "987654321"
  ) {
    window.location.replace("../../pages/adminPanel.html");
  } else {
    window.location.replace("../../pages/weather-app.html");
  }
});
