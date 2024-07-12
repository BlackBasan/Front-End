import { BASE_URL } from "../../assets/env/env.js";

// HTML elements
const btnUpdate = document.getElementById("btnUpdate");
const ulEl = document.getElementById("list");

const updateUser = async () => {
    const payload = {
        avatar: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_user_white_tone_icon_159359.png",
    };
    try {
        await fetch(`${BASE_URL}/users/8`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        await getUsers();
    } catch (error) {
        console.log(error);
    }
};

// Event listeners
btnUpdate.addEventListener("click", updateUser);

const renderUsers = (users) => {
    ulEl.innerHTML = "";
    users.forEach((user) => {
        const liEl = document.createElement("li");
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

const getUsers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        const users = await response.json();
        renderUsers(users);
    } catch (error) {
        console.log(error);
    }
};

getUsers();
