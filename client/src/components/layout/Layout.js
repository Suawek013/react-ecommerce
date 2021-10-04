import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	content: {
		padding: "2rem",
	},
});

function Layout(props) {
	const classes = useStyles();

	return (
		<div>
			<Navbar />
			<main>
				<div className={classes.content}>{props.children}</div>
			</main>
		</div>
	);
}

export default Layout;
