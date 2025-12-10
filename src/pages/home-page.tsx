import styles from "../styles/home-page.module.css";
import { Link } from "react-router";
import type { Simulation } from "../types/simulation.model";
import Footer from "../components/footer";

function HomePage() {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}

function Header() {
	return (
		<header className="maxWidthWrapper">
			<div className={styles.logo}></div>
		</header>
	);
}

function Main() {
	return (
		<main className={`maxWidthWrapper ${styles.main}`}>
			<Description />
			<Simulations />
		</main>
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
		/*
      While this looks a bit weird, the component is structured like
      this to prevent 'doom flicker'. Essentially, when the Link is
      hovered, the transform is applied on the span, preventing the
      issue. The link below shows a demo of said issue:

      https://www.joshwcomeau.com/animation/css-transitions/
    */
		<Link to={link} className={styles.simulation}>
			<span className={styles.simulationContents}>{name}</span>
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
