import { Button, ButtonGroup, Container } from "react-bootstrap";

const EventsPage = () => {
    const handleClickWithoutParameters = () => {
        alert("Button clicked without parameters");
    };

    const handleClickWithParameters = (name) => {
        alert(`Button clicked with parameters: ${name}`);
    };

    return (
        <Container className="p-5">
            <h1 className="text-center">EVENTS</h1>
            <ButtonGroup className="w-100">
                <Button
                    variant="danger"
                    className="w-50"
                    onClick={handleClickWithoutParameters}>
                    WITHOUT PARAMETERS
                </Button>
                <Button
                    variant="success"
                    className="w-50"
                    onClick={() => handleClickWithParameters("Jane")}>
                    WITH PARAMETERS
                </Button>
            </ButtonGroup>
        </Container>
    );
};

export default EventsPage;
