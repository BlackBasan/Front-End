import "./Card.scss";

const Card = (props) => {
    // console.log(props.title);
    return (
        <div className="props-card-container">
            <img
                src={props.imgUrl}
                alt="men standing in a jacket using googles"
                className="props-card-img"
            />
            <div className="props-card-content">
                <h3 className="props-card-title">{props.title}</h3>
                <p className="props-card-text">{props.text}</p>
                <button className="props-card-button">ADD TO BASKET</button>
            </div>
        </div>
    );
};

export default Card;
