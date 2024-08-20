import axios from 'axios';
import { useState, useEffect } from 'react';



const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/categories/all/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <FilterBar onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default AllProductsPage;
