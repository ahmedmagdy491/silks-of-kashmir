const Product = require('../../models/Product');
const Async = require('express-async-handler');
const slugify = require('slugify');

const createProduct = Async(async (req, res) => {
	req.body.slug = slugify(req.body.name);
	res.json(await new Product(req.body).save());
});

const getProducts = Async(async (req, res) => {
	let products = await Product.find()
		.populate('category')
		.sort([['cratedAt', 'desc']])
		.exec();
	res.json(products);
});

const getCatProduct = Async(async (req, res) => {
	let { category } = req.body;
	let products = await Product.find({ category })
		// .populate('category')
		.sort([['cratedAt', 'desc']])
		.exec();
	res.json(products.length > 0 ? products : 'No products');
});

module.exports = { createProduct, getProducts, getCatProduct };
