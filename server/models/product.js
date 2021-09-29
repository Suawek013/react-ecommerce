const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	_id: {
		type: Number,
	},
	title: {
		type: String,
	},
	description: {
		type: String,
	},
	image: {
		type: String,
	},
	price: {
		type: Number,
	},
	amount: {
		type: Number,
	},
});

module.exports = mongoose.model("Product", productSchema);
