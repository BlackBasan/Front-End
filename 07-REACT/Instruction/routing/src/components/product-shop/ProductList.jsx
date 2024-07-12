import { Col, Container, Row } from "react-bootstrap";
import { productsData } from "../../data/products";
import ProductCard from "./ProductCard";

const ProductList = () => {
    return (
        <Container className="my-5">
            <h1 className="text-warning my-5 text-center">PRODUCTS</h1>
            <Row className="gy-4">
                {productsData.map((product) => (
                    <Col key={product.id} md={6} lg={5} xl={4}>
                        <ProductCard {...product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductList;
