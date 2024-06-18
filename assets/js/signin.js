// ! imports
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "../../utils/storageUtils.js";
import { createElementRepo } from "../../utils/domUtils.js";
const getDataFromStorage = getFromLocalStorage("userData", [0]);
console.log(getDataFromStorage);
const saveData = saveToLocalStorage();
