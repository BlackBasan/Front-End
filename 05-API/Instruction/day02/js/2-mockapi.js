import { BASE_URL } from "../../assets/env/env.js";

// HTML ELEMENTS
const getUsersBtnEl = document.getElementById("get-users-btn");
const ulEl = document.getElementById("list");

// document.addEventListener("click", (event) => {
//     console.log(event.target);
//     console.log(event.target.tagName);
// });

ulEl.addEventListener("click", async (event) => {
    console.log(event.target);
    console.log(event.target.tagName);
    if (event.target.tagName === "BUTTON") {
        const id = event.target.getAttribute("data-id");
        console.log(id);
        // send a DELETE request to the API using the id
        await deleteUser(id);
        await fetchUsers();
    }
});

const fetchUsers = async () => {
    await fetch(`${BASE_URL}/users`, {
        method: "GET", // default is GET
    })
        .then((response) => {
            // if (response.status === 404) {
            //     throw new Error("There is a problem with your fetch information");
            // }
            if (!response.ok) {
                throw new Error(
                    "There is a problem with your fetch information"
                );
            }
            return response.json();
        })
        .then((data) => {
            renderData(data);
        });
};

const renderData = (arrayOfData) => {
    ulEl.innerHTML = "";
    arrayOfData.forEach((data) => {
        const liEl = document.createElement("li");
        const h3El = document.createElement("h3");
        const imgEl = document.createElement("img");
        const btnDelEl = document.createElement("button");
        btnDelEl.innerText = "Delete this user";
        btnDelEl.setAttribute("data-id", data.id);
        btnDelEl.setAttribute("type", "button");
        h3El.innerText = data.name;
        imgEl.setAttribute("src", data.avatar);
        imgEl.setAttribute("alt", data.name);
        imgEl.style.width = "50px";
        liEl.style.marginBottom = "20px";
        liEl.appendChild(imgEl);
        liEl.appendChild(h3El);
        liEl.appendChild(btnDelEl);
        ulEl.appendChild(liEl);
    });
};

getUsersBtnEl.addEventListener("click", async () => {
    ulEl.innerHTML = "<li>Loading....</li>";
    await fetchUsers();
});

const deleteUser = async (userId) => {
    await fetch(`${BASE_URL}/users/${userId}`, {
        method: "DELETE",
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
};
