import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const DigitalClocksPage = () => {
    return (
        <Container className="py-4">
            <h1 className="text-center">DIGITAL CLOCKS</h1>
            <ul>
                <li>
                    {/* <Link to="1">DIGITAL CLOCK 1</Link> */}
                    <Link to="/digital-clocks/1">DIGITAL CLOCK 1</Link>
                </li>
                <li>
                    {/* <Link to="2">DIGITAL CLOCK 2</Link> */}
                    <Link to="/digital-clocks/2">DIGITAL CLOCK 2</Link>
                </li>
                <li>
                    {/* <Link to="3">DIGITAL CLOCK 3</Link> */}
                    <Link to="/digital-clocks/3">DIGITAL CLOCK 3</Link>
                </li>
            </ul>
        </Container>
    );
};

export default DigitalClocksPage;
