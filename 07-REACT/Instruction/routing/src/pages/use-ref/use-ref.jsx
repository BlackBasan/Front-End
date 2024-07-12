import { useRef } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";

const UseRefPage = () => {
    const inputRef = useRef(null);
    const spanRef = useRef(null);
    // console.log(inputRef);

    const handleFocusChange = () => {
        inputRef.current.focus();
        inputRef.current.value = "Hello World";
    };

    // console.log("It doesn't re-render the component when the value changes");

    const increaseNumber = () => {
        console.log(++spanRef.current.innerText);
    };

    const updateTitle = () => {
        document.title = spanRef.current.innerText;
    };

    const goToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Container className="my-5 p-5">
            <h1>
                USEREF HOOK <span ref={spanRef}>0</span>
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quia, voluptates, quibusdam voluptate
                doloribus voluptatibus quos repellendus voluptas magnam quod.
                Quisquam voluptatum, quia, voluptates, quibusdam voluptate
                doloribus voluptatibus quos repellendus voluptas magnam quod.
            </p>
            <InputGroup className="my-3">
                <Form.Control type="text" ref={inputRef} />
                <Button onClick={handleFocusChange}>CLICK TO FOCUS</Button>
            </InputGroup>
            <Button onClick={increaseNumber}>
                CLICK TO INCREASE THE NUMBER
            </Button>
            <Button onClick={updateTitle}>UPDATE THE TITLE</Button>
            <Button onClick={goToTop}>GO TO TOP OF THE PAGE</Button>
        </Container>
    );
};

export default UseRefPage;
