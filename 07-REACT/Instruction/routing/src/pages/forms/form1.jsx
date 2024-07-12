import { useState } from "react";
import { Button, Container } from "react-bootstrap";

const Form1Page = () => {
    const [username, setUsername] = useState("John Doe");

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    return (
        <Container className="my-5">
            <h1>FORM 1</h1>
            <form style={{ width: 350 }} className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-5">
                    <label className="flex-grow-1" htmlFor="username">
                        USERNAME
                    </label>
                    <input
                        className="flex-grow-1"
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleInputChange}
                    />
                </div>
                <Button type="submit">SEND</Button>
            </form>
        </Container>
    );
};

export default Form1Page;
