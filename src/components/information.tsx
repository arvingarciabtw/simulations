import styles from "../styles/information.module.css";
import type { Information } from "../types/information.model";

function Information({ title, description }: Information) {
	return (
		<section className={`maxWidthWrapper ${styles.information}`}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.description}>{description}</p>
		</section>
	);
}

export default Information;
