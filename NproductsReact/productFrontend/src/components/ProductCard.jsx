const ProductCard = ({ product }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
        <div className="mt-4">
          <h2 className="text-lg font-bold">{product.productName}</h2>
          <p className="text-gray-600">Company: {product.company}</p>
          <p className="text-gray-600">Category: {product.category}</p>
          <p className="text-gray-900 font-semibold">${product.price}</p>
          <p className="text-yellow-500">Rating: {product.rating}</p>
          <p className="text-green-500">Discount: {product.discount}%</p>
          <p className={`mt-2 ${product.availability ? 'text-green-600' : 'text-red-600'}`}>
            {product.availability ? 'In Stock' : 'Out of Stock'}
          </p>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  