import { Switch, Route } from "react-router";
import Layout from "./components/layout/Layout";
import NewProductPage from "./pages/NewProduct";
import ProductsPage from "./pages/Products";
import LoginPage from "./pages/Login";
import CheckoutPage from "./pages/Checkout";
import RegisterPage from "./pages/Register";

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<ProductsPage />
				</Route>
				<Route path="/new-product">
					<NewProductPage />
				</Route>
				<Route path="/checkout">
					<CheckoutPage />
				</Route>
				<Route path="/login">
					<LoginPage />
				</Route>
				<Route path="/register">
					<RegisterPage />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
