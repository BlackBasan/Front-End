import { Container } from "react-bootstrap";
import ProductHeader from "../../components/product-shop/ProductHeader";
import ProductList from "../../components/product-shop/ProductList";
import ProductFooter from "../../components/product-shop/ProductFooter";

const ProductShopPage = () => {
    return (
        <Container fluid className="p-0">
            <ProductHeader />
            <ProductList />
            <ProductFooter />
        </Container>
    );
};

export default ProductShopPage;
