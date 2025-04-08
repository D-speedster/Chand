let express = require("express");
let App = express.Router();
const axios = require('axios');
App.get('/', async (req, res) => {
    // res.send(`<h1>The word Search IS : </h1> ${req.query.product}`);
    const response = await axios.get('https://fakestoreapi.com/products');
    let product = response.data;
    const filteredProducts = product.filter(product => {
        return product.id == req.query.product;
    });
    let TEST = filteredProducts.map(product => {
        // res.send(`<h1>${product.title}</h1> <h2>${product.id}</h2>`)
        res.render('Search');
    });


})
module.exports = App;