import { GiAerodynamicHarpoon } from "react-icons/gi";
import { MdAddReaction } from "react-icons/md";
import { Container } from "react-bootstrap";

const ReactIconsPage = () => {
    return (
        <Container>
            <h1 className="text-center">REACT ICONS</h1>
            <GiAerodynamicHarpoon
                cursor="pointer"
                size="3rem"
                color="red"
                title="Arrow"
            />
            <MdAddReaction cursor="pointer" size="3rem" color="#adff2f" />
        </Container>
    );
};

export default ReactIconsPage;
