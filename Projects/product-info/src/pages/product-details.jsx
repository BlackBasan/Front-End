import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://dummyjson.com/products/${productId}`);
        setProduct(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <div className='orange-border'>
      <div className='detail-flex'>
        <div className='detail-left'>
          <h2>{product.title}</h2>
          <img src={product.thumbnail} alt={product.title}/>
        </div>
        <div className='detail-right'>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductDetails