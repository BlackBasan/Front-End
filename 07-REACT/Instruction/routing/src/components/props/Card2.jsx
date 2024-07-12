import "./Card.scss";

const Card2 = ({ title, imgUrl, text }) => {
    // console.log(title);

    return (
        <div className="props-card-container">
            <img
                src={imgUrl}
                alt="men standing in a jacket using googles"
                className="props-card-img"
            />
            <div className="props-card-content">
                <h3 className="props-card-title">{title}</h3>
                <p className="props-card-text">{text}</p>
                <button className="props-card-button">ADD TO BASKET</button>
            </div>
        </div>
    );
};

export default Card2;
