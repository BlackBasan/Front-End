// import React from "react";

const Jsx1 = () => {
    // you can use React.Fragment instead of div so it will be rendered as a single element and invisible in the DOM, or simply leave it empty as <> </>
    // React.Fragment = <>

    const x = 5;

    const user = {
        name: "John",
        age: 25,
        address: "USA",
    };

    // this is a comment line

    return (
        <>
            <h1 className="heading">JSX — 1</h1>
            <h2>I NEED A PARENT</h2>
            <p>{x}</p>
            <p>Your name: {user.name}</p>
            <p>Your age: {user.age}</p>
            {/* This is a comment line inside JSX */}
            <p>Your address: {user.address}</p>
            <label htmlFor="username">USERNAME:</label>
            <input type="text" id="username" />
        </>
    );
};

export default Jsx1;
