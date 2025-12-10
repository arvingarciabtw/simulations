import styles from "../styles/contiguous-memory-allocation.module.css";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Information from "../components/information";

function CMAPage() {
	return (
		<>
			<NavBar />
			<Information
				title="Contiguous Memory Allocation"
				description="
          A visualizer for contiguous memory allocation. Provide the parameters
          you want, and specify your chosen algorithm on the top left.
        "
			/>
			<Main />
			<Footer />
		</>
	);
}

function Main() {
	return (
		<main className={`maxWidthWrapper ${styles.main}`}>
			<section className={styles.algorithms}>Algorithms</section>
			<section className={styles.processes}>Processes</section>
			<section className={styles.parameters}>Parameters</section>
			<section className={styles.players}>Players</section>
			<section className={styles.chart}>Chart</section>
			<section className={styles.simulation}>Simulation</section>
		</main>
	);
}

export default CMAPage;
