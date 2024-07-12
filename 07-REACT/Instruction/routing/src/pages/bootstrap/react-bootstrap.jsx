import { Button, Col, Container, Image, Row } from "react-bootstrap";
import ProfileCardImage from "../../assets/img/profile-card.jpg";

const ReactBootstrapPage = () => {
    return (
        <Container className="p-5">
            <h1>REACT BOOTSTRAP</h1>
            <Container className="bg-warning my-5">
                <Image
                    src={ProfileCardImage}
                    width={200}
                    height={200}
                    roundedCircle
                />
            </Container>
            <Button variant="warning">REACT BUTTON</Button>
            <Container className="my-5">
                <Row className="text-center">
                    <Col className="bg-primary p-5">H</Col>
                    <Col className="bg-secondary p-5">E</Col>
                    <Col className="bg-warning p-5">L</Col>
                    <Col className="bg-danger p-5">L</Col>
                    <Col className="bg-success p-5">O</Col>
                </Row>
            </Container>
        </Container>
    );
};

export default ReactBootstrapPage;
