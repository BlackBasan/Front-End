import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CountersPage = () => {
    return (
        <Container className="py-4">
            <h1 className="text-center">COUNTERS</h1>
            <ul>
                <li>
                    {/* <Link to="1">COUNTER 1</Link> */}
                    <Link to="/counters/1">COUNTER 1</Link>
                </li>
                <li>
                    {/* <Link to="2">COUNTER 2</Link> */}
                    <Link to="/counters/2">COUNTER 2</Link>
                </li>
            </ul>
        </Container>
    );
};

export default CountersPage;
