const ProductDetailsPage = ({ match }) => {
    const [product, setProducts] = useState(null);
  
    useEffect(() => {
      fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
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
      </div>
    );
  };
  
  export default ProductDetailsPage;
  