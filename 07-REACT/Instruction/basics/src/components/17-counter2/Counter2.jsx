import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const Counter2 = () => {
    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
        setCounter((prev) => prev + 1);
    };

    useEffect(() => {
        if (counter > 0) {
            document.title = `Counter: ${counter}`;
        }

        return () => {
            document.title = "REACT Basics";
        };
    }, [counter]);

    return (
        <Container className="my-5 p-5">
            <h1>Counter Title</h1>
            <h2>{counter} times the button below was clicked</h2>
            <Button onClick={handleCounter}>CLICK HERE</Button>
        </Container>
    );
};

export default Counter2;