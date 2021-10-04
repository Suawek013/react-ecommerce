import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Tab, Tabs } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import CartContext from "../../store/cart-context";

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
}));

function Navbar() {
	const [value, setValue] = React.useState(0);
	const handleChange = (_, newValue) => setValue(newValue);

	const cartContext = useContext(CartContext);

	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
					className={useStyles.menuButton}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6">Sklep</Typography>
				<Box flexGrow={1} />
				<Tabs value={value} onChange={handleChange} textColor="inherit">
					<Tab component={RouterLink} to="/" label="Produkty" />
					<Tab component={RouterLink} to="/new-product" label="Dodaj produkt" />
					<Tab component={RouterLink} to="/checkout" label="Koszyk" />
					<span className={classes.badge}>{cartContext.totalCart}</span>
					<Tab component={RouterLink} to="/login" label="Zaloguj się" />
					<Tab component={RouterLink} to="/register" label="Zarejestruj się" />
				</Tabs>
				{/* <Button component={RouterLink} to="login" color="inherit">
					Zaloguj się
				</Button>
				/
				<Button component={RouterLink} to="register" color="inherit">
					Zarejestruj się
				</Button> */}
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
