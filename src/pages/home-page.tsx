import styles from "../styles/home-page.module.css";
import { Link } from "react-router";
import type { Simulation } from "../types/simulation.model";
import Footer from "../components/footer";

function HomePage() {
	return (
		<>
			<header className="maxWidthWrapper">
				<div className={styles.logo}></div>
			</header>
			<main className={`maxWidthWrapper ${styles.main}`}>
				<Description />
				<Simulations />
			</main>
			<Footer />
		</>
	);
}

function Simulations() {
	return (
		<section className={styles.simulations}>
			<Simulation
				link="/contiguous-memory-allocation"
				name="Contiguous Memory Allocation"
			/>
			<Simulation link="/event-loop" name="Event Loop" />
			<Simulation link="/sorting-algorithms" name="Sorting Algorithms" />
			<Simulation
				link="/pathfinding-algorithms"
				name="Pathfinding Algorithms"
			/>
		</section>
	);
}

function Simulation({ link, name }: Simulation) {
	return (
		<Link to={link} className={styles.simulation}>
			{name}
		</Link>
	);
}

function Description() {
	return (
		<section className={`maxWidthWrapper ${styles.description}`}>
			<h1 className={styles.title}>Simulations</h1>
			<p>
				A collection of simulations and visualizers of various programming
				concepts.
			</p>
		</section>
	);
}

export default HomePage;
