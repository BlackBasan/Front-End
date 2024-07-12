// if you import the image using import statement, you can locate the image without imagining yourself inside public. You must start from your file's location.
import dogImage from "../../assets/img/dog.jpg";

const Image = () => {
    const imageStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
    };

    return (
        <div className="image-subject-container">
            <h1 style={{ textAlign: "center" }}>IMAGE</h1>
            <div style={imageStyle}>
                {/* STATIC METHOD */}
                {/* Imagine yourself inside public folder, and then start searching for the image from that location */}
                <img src="/image/dog.jpg" alt="dog" width={300} />
                {/* IMPORT METHOD */}
                <img src={dogImage} alt="dog" width={300} />
            </div>
        </div>
    );
};

export default Image;
