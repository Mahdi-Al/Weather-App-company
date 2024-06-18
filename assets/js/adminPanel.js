// ! imports
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "../../utils/storageUtils.js";
import { createElementRepo } from "../../utils/domUtils.js";
const ids = [];
const userDataShow = getFromLocalStorage("userData");
const tbody = document.querySelector("tbody");
userDataShow.forEach((user) => {
  ids.push(user.id);
  console.log(userDataShow);
  tbody.innerHTML += `
<tr class="user">
  <th scope="row">${user.Email}</th>
  <td>${user.id}</td>
  <td>${user.Password}</td>
  <td>${user.city}</td>
  <td>
  <button class="btn btn-outline-danger">Delete</button>
  </td>
</tr>
`;
});

tbody.addEventListener("click", (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === "BUTTON") {
    getFromLocalStorage("userData");
    console.log(e.target.parentElement.parentElement.children[0]);
  }
});
