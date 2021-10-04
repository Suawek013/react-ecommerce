import { useHistory } from "react-router";
import NewProductForm from "../components/products/NewProductForm";

function NewProductPage() {
	const history = useHistory();

	function addProductHandler(productData) {
		fetch("/api/products", {
			method: "POST",
			body: JSON.stringify(productData),
			headers: {
				"Content-type": "application/json",
			},
		}).then(() => {
			history.replace("/");
		});
	}

	return <NewProductForm onAddProduct={addProductHandler} />;
}

export default NewProductPage;
