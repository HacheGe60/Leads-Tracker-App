import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";


const firebaseConfig = {
    databaseURL: "https://leads-tracker-6d2d6-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `<li>
                          <a target='_blank' href='${leads[i]}'>
                             ${leads[i]}
                          </a>
                      </li>`;
    }
    ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
});

inputBtn.addEventListener("click", function () {
    console.log(inputEl.value);
    inputEl.value = "";
});

