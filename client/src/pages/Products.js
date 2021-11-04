import { useState, useEffect } from "react";
import ProductList from "../components/products/ProductList";

function ProductsPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedProducts, setLoadedProducts] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch(process.env.REACT_APP_URL_API + "/products")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const products = [];

				for (const key in data) {
					const product = {
						id: key,
						...data[key],
					};

					products.push(product);
				}

				setIsLoading(false);
				setLoadedProducts(products);
			})
			.catch((err) => {
				console.log("Error while fetching products: ", err);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<section>
			<ProductList products={loadedProducts} />
		</section>
	);
}

export default ProductsPage;
