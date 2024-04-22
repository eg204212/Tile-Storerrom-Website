const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/products');

const verifyToken = require('../middlewears/verifyToken')


router.post('/',ProductController.ProductCreate);

router.put('/:id',ProductController.ProductUpdate)
router.delete('/:id',ProductController.ProductDelete)
router.get('/searchResults',ProductController.SearchProduct)
router.get('/all',ProductController.GetallProducts)

router.get('/:id',ProductController.GetOneProduct)

module.exports = router;