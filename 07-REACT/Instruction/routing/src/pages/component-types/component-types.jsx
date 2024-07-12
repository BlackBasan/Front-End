import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ComponentTypesPage = () => {
    return (
        <Container className="py-4">
            <h1 className="text-center">COMPONENT TYPES</h1>
            <ul>
                <li>
                    {/* <Link to="class-type">CLASS TYPE COMPONENTS</Link> */}
                    <Link to="/component-types/class-type">
                        CLASS TYPE COMPONENTS
                    </Link>
                </li>
                <li>
                    {/* <Link to="function-type">FUNCTION TYPE COMPONENTS</Link> */}
                    <Link to="/component-types/function-type">
                        FUNCTION TYPE COMPONENTS
                    </Link>
                </li>
            </ul>
        </Container>
    );
};

export default ComponentTypesPage;
