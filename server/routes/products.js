const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/", async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (err) {
		res.send("Get products error: " + err);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.json(product);
	} catch (err) {
		res.send("Get product by ID error: " + err);
	}
});

router.post("/", async (req, res) => {
	const product = new Product({
		// id: req.body._id,
		title: req.body.title,
		description: req.body.description,
		image: req.body.image,
		price: req.body.price,
		amount: req.body.amount,
	});
	try {
		const p1 = await product.save();
		res.json(p1);
	} catch (err) {
		res.send("Product post error: " + err);
		console.log("Product post error: " + err);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		product.delete();
	} catch (err) {
		res.send("Product delete error: " + err);
	}
});

module.exports = router;
