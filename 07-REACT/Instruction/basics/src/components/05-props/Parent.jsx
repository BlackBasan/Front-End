const Parent = ({ children }) => {
    const user = {
        name: "John",
        age: 25,
        email: "example@example.com",
        role: "admin",
    };

    return (
        <div style={{ margin: "2rem", padding: "2rem" }}>
            <header>HEADER</header>
            <h1>I&apos;M THE PARENT COMPONENT CONTENT</h1>
            {user.role === "admin" ? children : "THIS CONTENT IS PRIVATE"}
            <footer>FOOTER</footer>
        </div>
    );
};

export default Parent;
