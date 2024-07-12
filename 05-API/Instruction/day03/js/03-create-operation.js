import { BASE_URL } from "../../assets/env/env.js";

// HTML elements
const createBtnEl = document.getElementById("create-user-btn");
const ulEl = document.getElementById("list");

const getUsers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        const data = await response.json();
        console.log(data);
        renderUsersList(data);
    } catch (error) {
        console.log(error);
    }
};

const renderUsersList = (users) => {
    // clear the list so that we don't have duplicate users everytime we call getUsers() function
    ulEl.innerHTML = "";
    users.forEach((user) => {
        // const h3El = document.createElement("h3");
        // const imgEl = document.createElement("img");
        const liEl = document.createElement("li");
        // h3El.innerText = user.name;
        // imgEl.setAttribute("src", user.avatar);
        // imgEl.src = user.avatar;
        // imgEl.alt = user.name;
        // imgEl.width = 100;
        // imgEl.height = 100;
        // imgEl.style.borderRadius = "50%";
        // liEl.append(h3El, imgEl);
        liEl.innerHTML = `
        <h3>${user.name}</h3>
        <img
            src="${user.avatar}"
            alt="${user.name}"
            width="100"
            height="100"
            style="border-radius: 50%" />
            `;
        ulEl.appendChild(liEl);
    });
};

getUsers();

const createUser = async () => {
    const payload = {
        name: "Jane Doe",
        avatar: "https://cdn.vectorstock.com/i/1000x1000/50/65/avatar-female-vector-5945065.webp",
    };

    try {
        const response = await fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: {
                // content type is the type of data we are sending to the server, and if we are using POST METHOD we must specify the content type
                "Content-Type": "application/json",
            },
            // payload must be turned into JSON file
            body: JSON.stringify(payload),
        });
        console.log(response);
        getUsers();
    } catch (error) {
        console.log(error);
    }
};

createBtnEl.addEventListener("click", () => {
    createUser();
});
