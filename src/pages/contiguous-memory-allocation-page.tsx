import styles from "../styles/contiguous-memory-allocation.module.css";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

function CMAPage() {
	return (
		<>
			<NavBar />
			<main className={`maxWidthWrapper ${styles.main}`}>
				The simulation here.
			</main>
			<Footer />
		</>
	);
}

export default CMAPage;
