import { useState } from "react";
import { Button, Container } from "react-bootstrap";

const State = () => {
    const [username, setUsername] = useState("john");
    // console.log(username);

    let day = "MONDAY";

    return (
        <Container>
            <h1>{username}</h1>
            <h2>{day}</h2>
            <Button onClick={() => setUsername("JANE DOE")}>
                CHANGE THE NAME
            </Button>
            <Button
                onClick={() => {
                    day = "SUNDAY";
                    // console.log(day);
                }}>
                UPDATE THE DAY
            </Button>
        </Container>
    );
};

export default State;

// username = "JANE DOE"
