import styles from "../styles/coming-soon.module.css";
import { Link } from "react-router";

interface ComingSoon {
	simulationName: string;
}

function ComingSoon({ simulationName = "simulation" }: ComingSoon) {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Coming soon...</h1>
			<p className={styles.description}>
				This {simulationName} will be developed in the future. Soon though!
			</p>
			<Link to="/" className={styles.back}>
				Back to home
			</Link>
		</main>
	);
}

export default ComingSoon;
