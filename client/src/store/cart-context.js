import { createContext, useState } from "react";

const CartContext = createContext({
	Cart: [],
	totalCart: 0,
	addToCart: (product) => {},
	removeFromCart: (productId) => {},
	productInCart: (productId) => {},
});

export function CartContextProvider(props) {
	const [userCart, setUserCart] = useState([]);

	function addToCartHandler(product) {
		setUserCart((prevUserCart) => {
			return prevUserCart.concat(product);
		});
	}

	function removeFromCartHandler(productId) {
		setUserCart((prevUserCart) => {
			return prevUserCart.filter((product) => product.id !== productId);
		});
	}

	function productInCartHandler(productId) {
		return userCart.some((product) => product.id === productId);
	}

	const context = {
		cart: userCart,
		totalCart: userCart.length,
		addToCart: addToCartHandler,
		removeFromCart: removeFromCartHandler,
		productInCart: productInCartHandler,
	};

	return (
		<CartContext.Provider value={context}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartContext;
