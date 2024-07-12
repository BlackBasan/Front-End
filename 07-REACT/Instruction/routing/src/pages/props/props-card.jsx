import { Container } from "react-bootstrap";
import Card from "../../components/props/Card";
import clothingData from "../../data/clothing.json";

const PropsCardPage = () => {
    return (
        <Container className="pt-4">
            <h1 className="text-center">PROPS CARD</h1>
            <div
                style={{
                    padding: "3rem",
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                    flexWrap: "wrap",
                }}>
                {clothingData.map((item) => (
                    <Card
                        key={item.id}
                        // {...item}
                        title={item.title}
                        text={item.text}
                        imgUrl={item.imgUrl}
                    />
                ))}
            </div>
        </Container>
    );
};

export default PropsCardPage;
