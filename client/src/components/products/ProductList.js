import ProductItem from "./ProductItem";
import * as React from "react";
import Grid from "@mui/material/Grid";

function ProductList(props) {
	return (
		<Grid
			container
			spacing={{ xs: 2, md: 4 }}
			columns={{ xs: 2, sm: 8, md: 12 }}
			justify="center"
		>
			{props.products.map((product, index) => (
				<Grid item xs={2} sm={4} md={3} key={index}>
					<ProductItem
						key={product.id}
						id={product.id}
						title={product.title}
						image={product.image}
						description={product.description}
						price={product.price}
					/>
				</Grid>
			))}
		</Grid>
	);
}

export default ProductList;
