import axios from 'axios';
import { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar'
import Pagination from '../components/Pagination'
import ProductCard from '../components/ProductCard'



const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the dummy data from the public folder
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
