import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
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
      <section className='product-section'>
        <h1>Product List</h1>
        <ul>
          {products.map(product => (
              <Link to={`/products/${product.id}`}>
                  <li key={product.id}>
                      <h2>{product.title}</h2>
                      <p>{product.description}</p>
                      <p>Price: ${product.price}</p>
                      <img src={product.thumbnail} alt={product.title} width="100" />
                  </li>
              </Link>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;