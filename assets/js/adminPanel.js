// ! imports
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "../../utils/storageUtils.js";
import { createElementRepo } from "../../utils/domUtils.js";
const ids = [];
let userData = getFromLocalStorage("userData");
const userDataShow = getFromLocalStorage("userData");
const tbody = document.querySelector("tbody");
userDataShow.forEach((user, index) => {
  user.id = index;
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
// userData.forEach((user) => {

tbody.addEventListener("click", (e) => {
  console.log(e.target.parentElement.parentElement.children[4].children[0]);
  if (
    e.target.parentElement.parentElement.children[0].textContent ===
    "mahdialikhaniapr2005@gmail.com"
  ) {
    e.target.parentElement.parentElement.children[4].children[0].classList.add(
      "disabled"
    );
    alert("You can not Delete the admins data ❌");
    return;
  }

  if (
    e.target.parentElement.parentElement.children[0].textContent ===
    "Aghil@gmail.com"
  ) {
    e.target.parentElement.parentElement.children[4].children[0].classList.add(
      "disabled"
    );
    alert("You can not Delete the admins data ❌");
    return;
  }
  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.parentElement.children[1].textContent;
    const deleted = userData.splice(Number(id), 1);
    saveToLocalStorage("userData", userData); // Save the updated array to local storage
    console.log(userData);
    e.target.parentElement.parentElement.remove();
  }
});
