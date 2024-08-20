import axios from 'axios';

const BASE_URL = process.env.BASE_URL;
const AUTH_TOKEN = process.env.AUTH_TOKEN;

export const getProducts = async (req, res) => {
  const { categoryname } = req.params;
  const { top = 10, minPrice = 0, maxPrice = 10000, page = 1, sort = 'price' } = req.query;

  try {
    const url = `${BASE_URL}/categories/${categoryname}/products`;
    
    const response = await axios.get(url, {
      params: { top, minPrice, maxPrice, page, sort },
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`, 
      }
    });

    res.json(response.data);
  } catch (error) {
    if (error.response) {
    
      res.status(error.response.status).json({
        message: 'Error fetching products',
        error: error.response.data || error.message,
      });
    } else if (error.request) {
      
      res.status(500).json({ message: 'No response from server', error: error.message });
    } else {
    
      res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
  }
};

export const getProductDetails = async (req, res) => {
  const { categoryname, productid } = req.params;

  try {
    const response = await axios.get(`${BASE_URL}/categories/${categoryname}/products/${productid}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`, 
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product details', error: error.message });
  }
};
