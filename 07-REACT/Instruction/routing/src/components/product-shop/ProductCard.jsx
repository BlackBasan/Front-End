import { Button, Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const ProductCard = (props) => {
    const totalStars = 5;

    const renderStars = () => {
        const rating = Math.floor(props.rating);
        const stars = [];
        const emptyStars = totalStars - rating;
        for (let i = 0; i < rating; i++) {
            stars.push(
                <AiFillStar key={props.title + i} className="text-warning" />
            );
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<AiFillStar key={i} className="text-secondary" />);
        }
        return stars;
    };

    return (
        <Card className="h-100">
            <Card.Img variant="top" src={props.image} />
            <Card.Body className="d-flex flex-column justify-content-between text-center">
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="text-muted d-flex flex-column mb-2 gap-2">
                    <span title={props.rating}>{renderStars()}</span>
                    {props.desc}
                </Card.Subtitle>
                <Card.Text className="fs-3 text-info">${props.price}</Card.Text>
                <Button variant="warning">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
