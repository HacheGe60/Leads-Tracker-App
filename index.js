// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
// import {
//     getDatabase,
//     ref,
//     push,
//     onValue
// } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// const firebaseConfig = {
//     databaseURL: "https://leads-tracker-app-18b45-default-rtdb.firebaseio.com/",
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const referenceInDB = ref(database, "leads");

// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");
// const deleteBtn = document.getElementById("delete-btn");

// function render(leads) {
//     let listItems = "";
//     for (let i = 0; i < leads.length; i++) {
//         listItems += `
//             <li>
//                 <a target='_blank' href='${leads[i]}'>
//                     ${leads[i]}
//                 </a>
//             </li>
//         `;
//     }
//     ulEl.innerHTML = listItems;
// }

// // Challenge: Log out a snapshot of your database when a new value is added to it
// onValue(referenceInDB, function (snapshot) {
//     console.log(snapshot);
// });

// deleteBtn.addEventListener("dblclick", function () {

// });

// inputBtn.addEventListener("click", function () {
//     push(referenceInDB, inputEl.value);
//     inputEl.value = "";
// });

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
    getDatabase,
    ref,
    push,
    onValue,
    remove
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-18b45-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads");

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}

// Challenge: Log out a snapshot of your database when a new value is added to it
onValue(referenceInDB, function (snapshot) {
    if (snapshot.exists()) {
        const snapshotValues = snapshot.val();
        const leads = Object.values(snapshotValues);
        render(leads);
    }
});

deleteBtn.addEventListener("dblclick", function () {
    remove(referenceInDB);
    ulEl.innerHTML = "";
});

inputBtn.addEventListener("click", function () {
    push(referenceInDB, inputEl.value);
    inputEl.value = "";
});