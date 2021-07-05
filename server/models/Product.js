const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			maxlength: 50,
			text: true,
		},
		slug: {
			type: String,
			unique: true,
			lowercase: true,
			index: true,
		},
		description: {
			type: String,
			trim: true,
			required: true,
			// maxlength: 150,
		},
		price: {
			type: Number,
			required: true,
			maxlength: 2000,
			text: true,
		},
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category',
		},

		quantity: Number,
		sold: {
			type: Number,
			default: 0,
		},
		images: {
			type: Array,
		},
		shipping: {
			type: String,
			enum: ['Yes', 'No'],
		},
		color: {
			type: String,
		},
		brand: {
			type: String,
		},
		//  ratings: [
		//  	{
		// 		star: Number,
		// 		postedBy: { type: ObjectId,     ref: 'User' },
		// 	},
		//  ],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Product', productSchema);
