import axios from 'axios';

export const authenticateCompany = async () => {
  try {
    const response = await axios.post('http://20.244.56.144/test/auth', {
      companyName: 'AffordMed',
      clientID: 'b055fec6-1206-495a-94b8-be70a7640391',
      clientSecret: 'XyEvHiLFzvgwNjSy',
      ownerName: 'Anish Kushwaha',
      ownerEmail: 'anishkh0276@gmail.com',
      rollNo: '1210432080'
    });

    console.log('Authentication successful:', response.data);
  } catch (error) {
    console.error('Error authenticating company:', error.response?.data || error.message);
  }
};
