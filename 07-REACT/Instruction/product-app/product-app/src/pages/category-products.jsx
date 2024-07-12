import axios from "axios";
import { useEffect, useState } from "react";
import { Button, ButtonGroup, Container, Spinner } from "react-bootstrap";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const CategoryProducts = () => {

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const params = useParams();
  const { categoryName } = params;

  const getProductByCategory = async (category) => {
      try {
          const response = await axios.get(
              `${import.meta.env.VITE_DUMMY_API_URL}/${category}`
          );

          if (!response.data) {
              return navigate(-1);
          }

          setProduct(response.data);
          setLoading(false);
      } catch (error) {
          console.log(error);
          return navigate("/");
      }
  };

  useEffect(() => {
    getProductByCategory(categoryName);
  }, [categoryName]);

  return loading ? (
    <Container
        style={{ height: "300px" }}
        className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="primary" />
    </Container>
) : (
    <Container>
      <h1 className="text-center">PRODUCTS</h1>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 gy-4">
        {
          product.map((product) =>(
            <Col key={product.id}>
            <Link to={`/products/${product.id}`}>
              <ProductCard product={product}/>
            </Link>
            </Col>
          ))
        }
      </Row>
    </Container>
);
}

export default CategoryProducts