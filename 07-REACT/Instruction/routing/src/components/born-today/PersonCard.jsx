import { Card } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";

const PersonCard = (props) => {
    return (
        <Card style={{ maxWidth: "300px", minWidth: "300px" }}>
            <Card.Img src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.age}</Card.Text>
                <BsFillTrashFill
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                    title={`Delete ${props.name}`}
                    onClick={() => props.handleDeletePerson(props.id)}
                />
            </Card.Body>
        </Card>
    );
};

export default PersonCard;
