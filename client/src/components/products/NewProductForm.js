import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function NewProductForm(props) {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			title: data.get("title"),
			description: data.get("description"),
			image: data.get("image"),
		});

		const productData = {
			title: data.get("title"),
			description: data.get("description"),
			image: data.get("image"),
			price: data.get("price"),
			amount: data.get("amount"),
		};

		props.onAddProduct(productData);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Typography component="h1" variant="h5">
				Dodaj produkt
			</Typography>
			<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
				<TextField
					margin="normal"
					required
					fullWidth
					id="title"
					label="Nazwa"
					name="title"
					autoFocus
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="description"
					label="Opis"
					id="description"
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="image"
					type="url"
					label="Adres URL zdjęcia"
					id="image"
				/>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							margin="normal"
							required
							fullWidth
							name="price"
							label="Cena"
							type="number"
							id="price"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							margin="normal"
							required
							fullWidth
							name="amount"
							label="Ilość"
							type="number"
							id="amount"
						/>
					</Grid>
				</Grid>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2, height: 50 }}
				>
					Dodaj produkt
				</Button>
			</Box>
		</Box>
	);
}

export default NewProductForm;
