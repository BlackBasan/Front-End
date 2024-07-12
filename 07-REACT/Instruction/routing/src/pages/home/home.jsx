import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <Container className="py-4">
            <h1 className="text-center">HOME PAGE</h1>
            <ul>
                <li>
                    <Link to="/jsx">JSX</Link>
                </li>
                <li>
                    <Link to="/styles">STYLES</Link>
                </li>
                <li>
                    <Link to="/digital-clocks">DIGITAL CLOCKS</Link>
                </li>
                <li>
                    <Link to="/props">PROPS</Link>
                </li>
                <li>
                    <Link to="/images">IMAGES</Link>
                </li>
                <li>
                    <Link to="/profile-card">PROFILE CARD</Link>
                </li>
                <li>
                    <Link to="/bootstrap">BOOTSTRAP</Link>
                </li>
                <li>
                    <Link to="/icon-libraries">ICON LIBRARIES</Link>
                </li>
                <li>
                    <Link to="/product-shop">PRODUCT SHOP</Link>
                </li>
                <li>
                    <Link to="/use-state">USESTATE</Link>
                </li>
                <li>
                    <Link to="/counters">COUNTER</Link>
                </li>
                <li>
                    <Link to="/born-today">BORN TODAY</Link>
                </li>
                <li>
                    <Link to="/side-effects">SIDE EFFECTS</Link>
                </li>
                <li>
                    <Link to="/use-ref">USEREF</Link>
                </li>
                <li>
                    <Link to="/component-types">COMPONENT TYPES</Link>
                </li>
                <li>
                    <Link to="/countries">COUNTRIES</Link>
                </li>
                <li>
                    <Link to="/lifting-state-up">LIFTING STATE UP</Link>
                </li>
                <li>
                    <Link to="/forms">FORMS</Link>
                </li>
            </ul>
        </Container>
    );
};

export default HomePage;
