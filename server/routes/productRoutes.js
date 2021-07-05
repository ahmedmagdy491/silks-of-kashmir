const router = require('express').Router();
const {
	createProduct,
	getProducts,
	getCatProduct,
} = require('../controllers/Product/productController');
router.route('/product').post(createProduct).get(getProducts);
router.route('/catproduct').get(getCatProduct);
module.exports = router;
