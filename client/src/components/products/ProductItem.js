import classes from "./ProductItem.module.css";
import * as React from "react";
import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CartContext from "../../store/cart-context";

function ProductItem(props) {
	const cartContext = useContext(CartContext);

	const productInCart = cartContext.productInCart(props.id);

	function toggleCartStatusHandler() {
		if (productInCart) {
			cartContext.removeFromCart(props.id);
		} else {
			cartContext.addToCart({
				id: props.id,
				title: props.title,
				description: props.description,
				image: props.image,
				price: props.price,
				amount: props.amount,
			});
		}
	}

	return (
		<section className={classes.image}>
			<Card sx={{ height: 600 }}>
				<CardActionArea>
					<CardMedia component="img" image={props.image} alt={props.title} />
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{props.id}
						</Typography>
						<Typography variant="h6" component="div">
							{props.price} zł
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{props.description}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						size="small"
						color="primary"
						onClick={toggleCartStatusHandler}
					>
						{productInCart ? "Usuń z koszyka" : "Do koszyka"}
					</Button>
				</CardActions>
			</Card>
		</section>
	);
}

export default ProductItem;
