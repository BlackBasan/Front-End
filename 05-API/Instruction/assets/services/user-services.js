import { BASE_URL } from "../env/env.js";

// GET METHOD
export const getUsers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        const users = await response.json();
        return users;
    } catch (error) {
        console.log(error);
    }
};

// POST METHOD
export const createUser = async (payload) => {
    await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
};

// PUT METHOD
export const updateUser = async (userId, payload) => {
    await fetch(`${BASE_URL}/users/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
};

// DELETE METHOD
export const deleteUser = async (userId) => {
    try {
        await fetch(`${BASE_URL}/users/${userId}`, {
            method: "DELETE",
        });
    } catch (error) {
        console.log(error);
    }
};
