const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');

router.get('/'. productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', controller.createProduct);
router.put('/:id', controller.updateProductById);
router.delete('/:id', controller.deleteProductById);

module.exports = router;