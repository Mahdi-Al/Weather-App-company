// ! imports
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "../../utils/storageUtils.js";
import { createElementRepo } from "../../utils/domUtils.js";
const getDataFromStorage = getFromLocalStorage("userData");
// const saveData = saveToLocalStorage();
const inputs = document.querySelectorAll("input");
window.onload = function () {
  inputs[0].value = "";
  inputs[1].value = "";
};

console.log(getDataFromStorage);
const formSignIn = document.querySelector("form");
formSignIn.addEventListener("submit", (e) => {
  e.preventDefault();
  const admins = getDataFromStorage.filter((user) => {
    return user.Email === "mahdialikhaniapr2005@gmail.com" || "Aghil@gmail.com";
  });
  console.log(admins);
});
