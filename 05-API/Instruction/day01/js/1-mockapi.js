// import ZDY, { BASE_URL as XYZ } from "./env.js";
// console.log("EXPORT CONST " + XYZ);
// console.log("EXPORT DEFAULT " + ZDY);
import { BASE_URL } from "../../assets/env/env.js";
// console.log(BASE_URL);

// let users = [];
// // async
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//         users = data;
//         console.log(users);
//     })
//     .catch((error) => {
//         console.log("There is a problem while fetching the data");
//     });

// // async
// const response = await fetch("https://jsonplaceholder.typicode.com/users");
// const data = await response.json();
// console.log(data);

// HTML ELEMENTS
const ulEl = document.querySelector(".users-container");

// ulEl.innerHTML = `<li>HELLO WORLD</li>`

const fetchUsers = () => {
    fetch(`${BASE_URL}/users`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // ulEl.innerHTML = "";
            // data.forEach((user) => {
            //     ulEl.innerHTML += `
            //     <li>
            //         <img src='${user.avatar}' />
            //         <h3>${user.name}</h3>
            //     </li>
            // `});
            renderUsers(data);
        })
        .catch((error) => console.log(error));
};

fetchUsers();

const renderUsers = (users) => {
    ulEl.innerHTML = "";
    users.forEach((user) => {
        ulEl.innerHTML += `
        <li>
            <img src='${user.avatar}' />
            <h3>${user.name}</h3>
        </li>
        `;
    });
};
