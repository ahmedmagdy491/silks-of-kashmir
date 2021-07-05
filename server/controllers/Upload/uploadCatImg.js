const multer = require('multer');

const multerConfig = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/uploads');
	},
	filename: (req, file, cb) => {
		const ext = file.mimetype.split('/')[1];
		cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
	},
});
const isImage = (req, file, cb) => {
	if (file.mimetype.startsWith('image')) {
		cb(null, true);
	} else {
		cb(new Error('Only Images is Allowed..'));
	}
};
const upload = multer({
	storage: multerConfig,
	fileFilter: isImage,
});

exports.uploadImage = upload.single('catImg');

exports.upload = (req, res) => {
	console.log(req.file);
	res.status(200).json({
		image: 'Image Uploaded',
	});
};
