import { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";

const Counter1Page = () => {
    const [counter, setCounter] = useState(0);

    // console.log(counter);

    const handleCounterChange = (type) => {
        // console.log(type);
        if (type === "increment") {
            setCounter((prev) => prev + 1);
        } else if (type === "decrement") {
            setCounter((prev) => prev - 1);
        } else if (type === "reset") {
            setCounter(0);
        }
    };

    return (
        <Container className="my-5 p-5">
            <h1>COUNTER 1</h1>
            <ButtonGroup>
                <Button
                    onClick={() => handleCounterChange("increment")}
                    variant="success">
                    +
                </Button>
                <Button variant="secondary">{counter}</Button>
                <Button
                    onClick={() => handleCounterChange("decrement")}
                    variant="danger">
                    -
                </Button>
                <Button
                    onClick={() => handleCounterChange("reset")}
                    variant="info"
                    type="reset">
                    RESET
                </Button>
            </ButtonGroup>
        </Container>
    );
};

export default Counter1Page;
