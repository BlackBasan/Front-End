const JsxPage2 = () => {
    const isLoading = false;
    const isAdmin = true;

    // if (isLoading) {
    //     return (
    //         <div>
    //             <h1>Loading...</h1>
    //         </div>
    //     );
    // }

    return (
        <div>
            {isLoading ? (
                <>
                    <h1>Loading...</h1>
                    <p>
                        Loading...Loading...Loading...Loading...Loading...Loading...
                    </p>
                </>
            ) : (
                <>
                    <h1>JSX — 2</h1>
                    <p>
                        JSX — 2 JSX — 2 JSX — 2 JSX — 2 JSX — 2 JSX — 2 JSX — 2
                    </p>
                </>
            )}
            <p>{isAdmin ? "Admin" : "User"}</p>
            {isAdmin ? (
                <>
                    <h2>Admin Menu</h2>
                    <ul>
                        <li>Create User</li>
                        <li>Delete User</li>
                        <li>Update User</li>
                    </ul>
                </>
            ) : (
                <>
                    <h2>User Menu</h2>
                    <ul>
                        <li>View Profile</li>
                        <li>Update Profile</li>
                    </ul>
                </>
            )}
        </div>
    );
};

export default JsxPage2;
