import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap"
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const HomePage = () => {

  const [products, setProducts] = useState([]);
  console.log(products);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_DUMMY_API_URL
      )
      setProducts(response.data.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Container>
      <h1 className="text-center">PRODUCTS</h1>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 gy-4">
        {
          products.map((product) =>(
            <Col key={product.id}>
            <Link to={`/products/${product.id}`}>
              <ProductCard product={product}/>
            </Link>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default HomePage