import ProductFooter from "./ProductFooter";
import ProductHeader from "./ProductHeader";
import ProductList from "./ProductList";
import { Container } from "react-bootstrap";

const ProductShop = () => {
    return (
        <Container fluid className="p-0">
            <ProductHeader />
            <ProductList />
            <ProductFooter />
        </Container>
    );
};

export default ProductShop;
