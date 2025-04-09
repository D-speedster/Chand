let express = require('express');
let router = express.Router();
let axios = require('axios');
const { FetchData } = require('../Controller/product');

router.get('', (req, res) => {
    res.redirect('/');
});
router.get('/:id/',FetchData )

module.exports = router;