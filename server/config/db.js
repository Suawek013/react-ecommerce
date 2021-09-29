const mongoose = require("mongoose");
const uri =
	"mongodb+srv://slawek:haslo@cluster0.o3ytz.mongodb.net/shop?retryWrites=true&w=majority";
mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.catch((err) => {
		console.log("Connection error " + err);
	});
const db = mongoose.connection;

db.on("open", () => {
	console.log("connected...");
});

module.exports = db;
