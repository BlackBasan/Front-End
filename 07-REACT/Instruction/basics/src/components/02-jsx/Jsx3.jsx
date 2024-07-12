const Jsx3 = () => {
    const user = {
        firstName: "John",
        lastName: "Doe",
        age: 17,
        email: "johndoe@example.com",
        occupation: "Software Engineer",
        isAdmin: true,
    };

    return (
        <div>
            {user.isAdmin && <h2>Admin Menu</h2>}
            {user.age > 18 && <h2>Adult Menu</h2>}
            {user.age > 18 || <h2>Child Menu</h2>}
        </div>
    );
};

export default Jsx3;
