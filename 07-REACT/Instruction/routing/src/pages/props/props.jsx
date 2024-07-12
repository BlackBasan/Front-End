import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PropsPage = () => {
    return (
        <Container className="py-4">
            <h1 className="text-center">PROPS</h1>
            <ul>
                <li>
                    {/* <Link to="card">PROPS CARD</Link> */}
                    <Link to="/props/card">PROPS CARD</Link>
                </li>
                <li>
                    {/* <Link to="parent">PARENT</Link> */}
                    <Link to="/props/parent">PARENT</Link>
                </li>
            </ul>
        </Container>
    );
};

export default PropsPage;
