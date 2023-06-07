const express = require('express');
const Product = require('./models/Product'); 

const app = express();

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({}, 'name price'); 
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
