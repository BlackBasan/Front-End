import {
    getUsers,
    deleteUser,
    updateUser,
    createUser,
} from "../../assets/services/user-services.js";

// HTML ELEMENTS
const btnGetUsers = document.getElementById("btnGetUsers");
const btnCreateUser = document.getElementById("btnCreateUser");
const ulEl = document.getElementById("list");

// EVENT LISTENERS
btnGetUsers.addEventListener("click", async () => {
    const users = await getUsers();
    renderUsers(users);
});

btnCreateUser.addEventListener("click", async () => {
    const payload = {
        name: "Geralt of Rivia",
        avatar: "https://image.api.playstation.com/vulcan/ap/rnd/202211/1415/ZNLQs42V6wLVjXSWVr1lIZjU.png",
    };
    await createUser(payload);
    const users = await getUsers();
    renderUsers(users);
});

ulEl.addEventListener("click", async (event) => {
    if (event.target.tagName === "BUTTON") {
        const userId = event.target.dataset.userid;

        if (event.target.dataset.method === "delete") {
            await deleteUser(userId);
        } else if (event.target.dataset.method === "update") {
            const payload = {
                name: "Avatar",
                avatar: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg",
            };

            await updateUser(userId, payload);
        }

        const users = await getUsers();
        renderUsers(users);
    }
});

// FUNCTIONS
const renderUsers = (arr) => {
    ulEl.innerHTML = "";
    arr.forEach((item) => {
        const liEl = document.createElement("li");
        liEl.innerHTML = `
        <h3>${item.name}</h3>
        <img
            src="${item.avatar}"
            alt="${item.name}"
            width="100"
            height="100"
            style="border-radius: 50%" />
            <button type="button" data-method="delete" data-userid="${item.id}">DELETE USER</button>
            <button type="button" data-method="update" data-userid="${item.id}">UPDATE USER</button>
        `;
        ulEl.appendChild(liEl);
    });
};
