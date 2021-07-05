const router = require('express').Router();

const {
	createCategory,
	getCategories,
	updateCategory,
	removeCategory,
} = require('../controllers/Category/categoryController');
const { upload, uploadImage } = require('../controllers/Upload/uploadCatImg');

router.route('/category').post(createCategory).get(getCategories);
router.route('/category/:slug').put(updateCategory).delete(removeCategory);

router.post('/uploadCatImg', uploadImage, upload);
module.exports = router;
