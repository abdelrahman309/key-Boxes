// script.js// This script captures key presses and displays them, while also storing the history in localStorage
// and allowing the user to clear the history.
"use strict";
// Selecting the necessary DOM elements
const insert = document.getElementById("insert");
const historyList = document.getElementById("history");
const clearBtn = document.getElementById("clear");
//localstorage rendering
let history = JSON.parse(localStorage.getItem("keyHistory")) || [];
renderHistory();
// Keydown event listener to capture key presses and display them
window.addEventListener("keydown", (e) => {
  const keyPressed = e.key === " " ? "space" : e.key;
  insert.innerHTML = ` <div class="key">
        ${keyPressed}
        <small>event.key</small>
      </div>
      <div class="key">
        ${e.keyCode}
        <small>event.keyCode</small>
      </div>
      <div class="key">
        ${e.code}
        <small>event.code</small>
      </div>`;
  history.push(keyPressed);
  localStorage.setItem("keyHistory", JSON.stringify(history));
  renderHistory();
});
// Keydown event listener to capture key presses and display them
// and store them in localStorage
function renderHistory() {
  historyList.innerHTML = "";
  history.forEach((element, index) => {
    let li = document.createElement("li");
    li.textContent = `${index + 1} : ${element}`;
    historyList.appendChild(li);
  });
}
clearBtn.addEventListener("click", () => {
  localStorage.removeItem("keyHistory");
  history = [];
  renderHistory();
});
// Clear button functionality
