import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

function Cart() {
	const cartContext = useContext(CartContext);

	return (
		<section>
			<Typography variant="h6" gutterBottom>
				Produkty w koszyku
			</Typography>
			<List>
				{cartContext.cart.map((product) => (
					<ListItem key={product.title} sx={{ py: 1, px: 0 }}>
						<img src={product.image} height="150" />
						<ListItemText
							primary={product.title}
							secondary={product.description}
						/>
						<Typography variant="body2">{product.price}zł</Typography>
					</ListItem>
				))}

				{/* <ListItem sx={{ py: 1, px: 0 }}>
					<ListItemText primary="Razem" />
					<Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
						$34.06
					</Typography>
				</ListItem> */}
			</List>
		</section>
	);
}

export default Cart;
