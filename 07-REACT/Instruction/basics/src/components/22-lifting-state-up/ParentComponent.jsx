import { useState } from "react";
import { Container } from "react-bootstrap";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [counter, setCounter] = useState(0);

    return (
        <Container>
            <h1>PARENT COMPONENT</h1>
            <h2>{counter} times clicked</h2>
            <ChildComponent setCounter={setCounter} />
        </Container>
    );
};

export default ParentComponent;
