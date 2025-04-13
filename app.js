let express = require("express");
let App = express();
let BodyParser = require("body-parser");
let path = require('path');
let Search = require('./routes/search')
let Product = require('./routes/product');
const { render } = require("pug");
App.set('view engine', 'pug');
App.set('views', path.join(__dirname, 'views'));
App.use(BodyParser.urlencoded({ extended: false }))
App.use(express.static(path.join(__dirname, 'public')));
App.get('/', (req, res) => {

    res.render('index.pug')

})
App.use('/search', Search);
App.use('/product', Product);
App.use('/seller', (req, res) => {
    res.render('Seller/index');

});
App.use('/shop-list', (req, res) => {
    res.render('ShopList')
})
App.use('', (req, res) => {
    res.status(404).send('<h1 style="text-algin : center">Not Found Mr</h1>')
})
App.listen(3000);