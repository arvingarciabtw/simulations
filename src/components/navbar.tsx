import styles from "../styles/navbar.module.css";
import { Link } from "react-router";

function NavBar() {
	return (
		<header className={`maxWidthWrapper ${styles.header}`}>
			<div className={styles.logo}></div>
			<nav>
				<Link to="/" className={styles.home}>
					See All Simulations
				</Link>
			</nav>
		</header>
	);
}

export default NavBar;
