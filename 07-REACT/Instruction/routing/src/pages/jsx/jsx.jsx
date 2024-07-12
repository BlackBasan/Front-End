import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Jsx = () => {
    return (
        <Container className="py-4">
            <h1 className="text-center">JSX</h1>
            <ul>
                <li>
                    {/* <Link to="1">JSX 1</Link> */}
                    <Link to="/jsx/1">JSX 1</Link>
                </li>
                <li>
                    <Link to="/jsx/2">JSX 2</Link>
                </li>
                <li>
                    <Link to="/jsx/3">JSX 3</Link>
                </li>
                <li>
                    <Link to="/jsx/4">JSX 4</Link>
                </li>
            </ul>
        </Container>
    );
};

export default Jsx;
