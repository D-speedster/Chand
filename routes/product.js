let express = require('express');
let router = express.Router();
let axios = require('axios');
router.get('', (req, res) => {
    res.redirect('/');
});
router.get('/:id/', async(req, res) => {
    const productId = req.params.id;
    const TypeProduct = req.params.type;
    // res.send(`<h1>${productId}</h1>`)
    let axiosFetch = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    let axiosData = axiosFetch.data;
    console.log(axiosData

    )
    res.render('product' , {Title : axiosData.title , ImageFake : axiosData.image ,Price : axiosData.price})
})

module.exports = router;