const express = require('express');
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')
const getMockData = require('./getMOCK')
const app = express();

const port = 3001;

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);
app.get('/api/mockData', getMockData)

app.listen(port, () => {
    console.log(`Server listening on port: ${port} ⌛`);
});