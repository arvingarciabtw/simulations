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
import type { Process } from "../types/process.model.ts";
import { useState } from "react";

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
	let algorithmLocal, memorySizeLocal, compactionTimeLocal, coalescingTimeLocal;

	algorithmLocal = localStorage.getItem("algorithm");
	memorySizeLocal = localStorage.getItem("memorySize");
	compactionTimeLocal = localStorage.getItem("compactionTime");
	coalescingTimeLocal = localStorage.getItem("coalescingTime");

	if (!algorithmLocal) {
		algorithmLocal = "...";
	}

	if (!memorySizeLocal) {
		memorySizeLocal = 1000;
	}

	if (!compactionTimeLocal) {
		compactionTimeLocal = 4;
	}

	if (!coalescingTimeLocal) {
		coalescingTimeLocal = 20;
	}

	const processesLocal = localStorage.getItem("processes");
	let parsedLocalProcesses = [];

	if (typeof processesLocal === "string") {
		parsedLocalProcesses = JSON.parse(processesLocal);
	}

	const [algorithm, setAlgorithm] = useState<string>(algorithmLocal);
	const [memorySize, setMemorySize] = useState(+memorySizeLocal);
	const [compactionTime, setCompactionTime] = useState(+compactionTimeLocal);
	const [coalescingTime, setCoalescingTime] = useState(+coalescingTimeLocal);
	const [processes, setProcesses] = useState<Process[]>(parsedLocalProcesses);
	const [processData, setProcessData] = useState<Process>({
		id: "",
		name: "",
		size: +"",
		time: +"",
	});

	return (
		<main className={`maxWidthWrapper ${styles.main}`}>
			<Players
				algorithm={algorithm}
				parameters={{
					memorySize,
					compactionTime,
					coalescingTime,
				}}
				processes={processes}
			/>
			<Algorithms algorithm={algorithm} setAlgorithm={setAlgorithm} />
			<Parameters
				parameters={{
					memorySize: {
						value: memorySize,
						setMemorySize,
					},
					compactionTime: {
						value: compactionTime,
						setCompactionTime,
					},
					coalescingTime: {
						value: coalescingTime,
						setCoalescingTime,
					},
				}}
			/>
			<Processes
				processes={{
					value: processes,
					setProcesses,
				}}
				processData={{
					value: processData,
					setProcessData,
				}}
			/>
			<Chart />
			<Simulation />
		</main>
	);
}

export default CMAPage;
