import { Button, Container } from "react-bootstrap";

const ChildComponent = (props) => {
    return (
        <Container fluid className="p-0">
            <h3>CHILD COMPONENT</h3>
            <Button onClick={() => props.setCounter((prev) => prev + 1)}>
                INCREASE COUNTER
            </Button>
        </Container>
    );
};

export default ChildComponent;
