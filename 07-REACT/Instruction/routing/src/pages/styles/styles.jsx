import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const StylesPage = () => {
    return (
        <Container className="py-4">
            <h1 className="text-center">STYLES</h1>
            <ul>
                <li>
                    {/* <Link to="external-styling">External Styling</Link> */}
                    <Link to="/styles/external-styling">External Styling</Link>
                </li>
                <li>
                    {/* <Link to="inline-styling">Inline Styling</Link> */}
                    <Link to="/styles/inline-styling">Inline Styling</Link>
                </li>
                <li>
                    {/* <Link to="internal-styling">Internal Styling</Link> */}
                    <Link to="/styles/internal-styling">Internal Styling</Link>
                </li>
                <li>
                    {/* <Link to="module-styling">Module Styling</Link> */}
                    <Link to="/styles/module-styling">Module Styling</Link>
                </li>
                <li>
                    {/* <Link to="scss">SCSS</Link> */}
                    <Link to="/styles/scss">SCSS</Link>
                </li>
            </ul>
        </Container>
    );
};

export default StylesPage;
