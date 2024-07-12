import axios from "axios";
import { useEffect, useState } from "react";
import { Button, ButtonGroup, Container, Spinner } from "react-bootstrap";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const ProductDetails = () => {

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const params = useParams();
  const { productId } = params;

  const getProductById = async (id) => {
      try {
          const response = await axios.get(
              `${import.meta.env.VITE_DUMMY_API_URL}/${id}`
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

  const goBack = () => {
      // window.history.back();
      navigate("/");
  };
  const goToNextItem = () => {
      if (+productId === 100) return;
      navigate(`/products/${+productId + 1}`);
  };

  const goToPreviousItem = () => {
      if (+productId === 1) return;
      navigate(`/products/${+productId - 1}`);
  };

  useEffect(() => {
      getProductById(productId);
  }, [productId]);

  return loading ? (
      <Container
          style={{ height: "300px" }}
          className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
      </Container>
  ) : (
      <Container className="py-4">
          <div className="d-flex justify-content-between">
              <h1>{product?.title}</h1>
              <Button variant="warning" type="button" onClick={goBack}>
                  Back To Home
              </Button>
          </div>
          <p>{product?.brand}</p>
          <img
              src={product?.images[0]}
              width={600}
              alt={product?.title}
              title={product?.title}
          />
          <p className="my-5">{product?.description}</p>
          <h4>${product?.price}</h4>
          <h6>{product?.stock} items left</h6>
          <ButtonGroup className="w-100">
              <Button
                  className="w-50"
                  variant="danger"
                  type="button"
                  onClick={goToPreviousItem}>
                  Go To Previous Item
              </Button>
              <Button className="w-50" type="button" onClick={goToNextItem}>
                  Go To Next Item
              </Button>
          </ButtonGroup>
      </Container>
  );
};

export default ProductDetails