const express = require("express");
const db = require("./config/db");
const PORT = process.env.PORT || 4000;
const path = require("path");

const app = express();

app.use(express.json());

const productRouter = require("./routes/products");
app.use("/api/products", productRouter);

app.get("/api", (req, res) => {
	res.json({ message: "Hello from server!" });
});

app.use(express.static(path.join("client/build")));

app.use((req, res, next) => {
	res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});

// app.get("*", (req, res) => {
// 	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });
