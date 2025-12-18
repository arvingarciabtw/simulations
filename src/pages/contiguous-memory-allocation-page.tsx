import styles from "../styles/contiguous-memory-allocation.module.css";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Information from "../components/information";
import Processes from "../components/contiguous-memory-allocation/processes";
import Parameters from "../components/contiguous-memory-allocation/parameters";
import Algorithms from "../components/contiguous-memory-allocation/algorithms";
import Players from "../components/contiguous-memory-allocation/players";
import Chart from "../components/contiguous-memory-allocation/chart";
import Simulation from "../components/contiguous-memory-allocation/simulation";
import Toast from "../components/toast";

function CMAPage() {
	return (
		<>
			<NavBar />
			<Information
				title="Contiguous Memory Allocation"
				description="
          A visualizer for contiguous memory allocation. Provide the parameters
          you want, and specify your chosen algorithm.
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
			<Players />
			<Algorithms />
			<Parameters />
			<Processes />
			<Chart />
			<Simulation />
		</main>
	);
}

export default CMAPage;
