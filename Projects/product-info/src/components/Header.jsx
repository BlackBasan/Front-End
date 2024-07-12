import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 535);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 535);
      setIsActive(false);
    };

    if(window.innerWidth < 535){
      setIsMobile(false);
    }
    else{
      setIsMobile(true);
    }
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
  }

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
  
    useEffect(() => {
        const fetchCategoriesWithProducts = async () => {
            try {
              const categoriesResponse = await axios.get('https://dummyjson.com/products/categories');
              if (categoriesResponse.status !== 200) {
                throw new Error('Failed to fetch categories');
              }
              const allCategories = categoriesResponse.data;
      
              const productsResponse = await axios.get('https://dummyjson.com/products');
              if (productsResponse.status !== 200) {
                throw new Error('Failed to fetch products');
              }
              const allProducts = productsResponse.data.products;
      
              const categoriesWithProducts = new Set(allProducts.map(product => product.category));
      
              const nonEmptyCategories = allCategories.filter(category => {
                const categorySlug = category.slug;
                const hasProducts = categoriesWithProducts.has(categorySlug);
                return hasProducts;
              });
      
              setCategories(nonEmptyCategories);
            } catch (err) {
              setError(err.message);
              console.error('Error fetching data:', err);
            } finally {
              setLoading(false);
            }
          };

          fetchCategoriesWithProducts();
        }, []);
      
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;
  
    if (!Array.isArray(categories)) {
        return <p>Categories data is not an array</p>;
    }

    return (
      <nav>
        {isMobile ? (
                <ul>
                  <li><Link to={`/`}>All</Link></li>
                  {categories.map(category => (
                    <li key={category.slug}>
                      <Link to={`/category/${category.slug}`}>{capitalizeFirstLetter(category.slug)}</Link>
                    </li>
                  ))}
                </ul>
              ):(
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="33" height="33" viewBox="0 0 50 50" onClick={handleIsActive}>
                  <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                  </svg>
              )}
              {isActive && (
                <div className="nav-box">
                  <button className="close-button" onClick={handleIsActive}>X</button>
                  <ul>
                    <li><Link to={`/`}>All</Link></li>
                    {categories.map(category => (
                      <li key={category.slug}>
                        <Link to={`/category/${category.slug}`}>{capitalizeFirstLetter(category.slug)}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
      </nav>
    );
}

export default Header