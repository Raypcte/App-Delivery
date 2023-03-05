import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

export default function CustomerProducts() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios.get('http://localhost:3001/products').then(({ data }) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <div>
        { products.map(({ id, urlImage, name, price }) => (
          <ProductCard
            key={ id }
            id={ id }
            urlImage={ urlImage }
            name={ name }
            price={ price.replace('.', ',') }
          />
        ))}
      </div>
    </div>
  );
}
