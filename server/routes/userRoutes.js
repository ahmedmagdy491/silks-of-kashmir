const router = require('express').Router();
const {
	loginUser,
	registerUser,
} = require('../controllers/User/userController.js');

const { admin, protect } = require('../middlewares/authMiddleware.js');

router.route('/user/register').post(registerUser);
router.route('/user/login').post(loginUser);

module.exports = router;
