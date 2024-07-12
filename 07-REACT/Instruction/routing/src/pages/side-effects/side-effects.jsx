import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import UseEffect from "../../components/side-effects/UseEffect";

const SideEffectsPage = () => {
    const [isShowing, setIsShowing] = useState(true);

    const handleToggle = () => {
        setIsShowing((prev) => !prev);
    };
    return (
        <Container className="pt-5">
            <h1 className="text-center">SIDE EFFECTS</h1>
            <Button onClick={handleToggle}>TOGGLE SHOW</Button>
            {isShowing && <UseEffect />}
        </Container>
    );
};

export default SideEffectsPage;
