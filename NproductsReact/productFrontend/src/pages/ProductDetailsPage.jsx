const ProductDetailsPage = ({ match }) => {
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      const fetchProductDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/categories/product/${match.params.id}`);
          setProduct(response.data);
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      };
  
      fetchProductDetails();
    }, [match.params.id]);
  
    if (!product) return <div>Loading...</div>;
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">{product.productName}</h1>
        <p>Company: {product.company}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Discount: {product.discount}%</p>
        <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
        {/* Add more detailed info and style appropriately */}
      </div>
    );
  };
  
  export default ProductDetailsPage;
  