import express from 'express';
import axios from 'axios';

const router = express.Router();

// Registration Route
router.post('/register', async (req, res) => {
  try {
    const response = await axios.post('http://20.244.56.144/test/register', {
      companyName: req.body.companyName,
      ownerName: req.body.ownerName,
      rollNo: req.body.rollNo,
      ownerEmail: req.body.ownerEmail,
      accessCode: req.body.accessCode,
    });

    res.status(200).json({
      message: 'Registration successful',
      data: response.data
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error registering company',
      error: error.response?.data || error.message
    });
  }
});

// Authentication Route
router.post('/auth', async (req, res) => {
  try {
    const response = await axios.post('http://20.244.56.144/test/auth', {
      companyName: req.body.companyName,
      clientID: req.body.clientID,
      clientSecret: req.body.clientSecret,
      ownerName: req.body.ownerName,
      ownerEmail: req.body.ownerEmail,
      rollNo: req.body.rollNo,
    });

    res.status(200).json({
      message: 'Authentication successful',
      data: response.data
    });
  } catch (error) {
    res.status(401).json({
      message: 'Authentication failed',
      error: error.response?.data || error.message
    });
  }
});

export default router;
