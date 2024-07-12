import { useEffect, useState } from "react";
import { Alert, Button, ButtonGroup, Container } from "react-bootstrap";

const UseEffect = () => {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState(
        "Hello World. This is unchanged message."
    );

    // console.log("1st runs");

    // FUNCTIONS
    const handleCounter = () => {
        setCounter((prev) => prev + 1);
    };

    const changeMessage = () => {
        setMessage("This is changed message.");
    };

    let contentMessage = "";

    const changeContentMessage = () => {
        // console.log("clicked");
        contentMessage = "This is content message.";
    };

    const runImmediately = () => {
        // console.log("3rd runs");
    };

    // USEEFFECTS

    useEffect(() => {
        // console.log(
        //     "1 - runs when the component mounted and component re-renders"
        // );
    });

    useEffect(() => {
        // console.log("2 - runs only when the component mounted");

        return () => {
            //  console.log("4 - runs when the component unmounted");
        };
    }, []);

    useEffect(() => {
        // console.log("3 - runs when the component mounted and counter changes");
    }, [counter, message]);

    // console.log("2nd runs");

    return (
        <Container className="my-5 p-5">
            <h1>USEEFFECT HOOK</h1>
            <Alert onClick={changeContentMessage}>{contentMessage}</Alert>
            <Alert onClick={changeMessage}>{message}</Alert>
            <ButtonGroup>
                <Button variant="success" onClick={changeMessage}>
                    CHANGE THE MESSAGE
                </Button>
                <Button variant="warning" onClick={handleCounter}>
                    COUNTER {counter}
                </Button>
                <Button onClick={runImmediately()}>
                    CLICK TO CHECK RENDER
                </Button>
            </ButtonGroup>
        </Container>
    );
};

export default UseEffect;
