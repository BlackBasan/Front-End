import { Link } from "react-router-dom";

const BootstrapPage = () => {
    return (
        <div className="text-center">
            <h1>BOOTSTRAP</h1>
            <button className="btn btn-outline-danger">VANILLA</button>
            {/* <Link to="react-bootstrap">REACT BOOTSTRAP</Link> */}
            <br />
            <Link to="/bootstrap/react-bootstrap">REACT BOOTSTRAP</Link>
        </div>
    );
};

export default BootstrapPage;
