import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const FormsPage = () => {
    return (
        <Container className="py-4">
            <h1 className="text-center">FORMS</h1>
            <ul>
                <li>
                    <Link to="/forms/1">FORM 1</Link>
                </li>
                <li>
                    <Link to="/forms/2">FORM 2</Link>
                </li>
                <li>
                    <Link to="/forms/3">FORM 3</Link>
                </li>
                <li>
                    <Link to="/forms/4">FORM 4</Link>
                </li>
                <li>
                    <Link to="/forms/5">FORM 5</Link>
                </li>
                <li>
                    <Link to="/forms/formik-and-yup-1">FORMIK & YUP 1</Link>
                </li>
                <li>
                    <Link to="/forms/formik-and-yup-2">FORMIK & YUP 2</Link>
                </li>
            </ul>
        </Container>
    );
};

export default FormsPage;
