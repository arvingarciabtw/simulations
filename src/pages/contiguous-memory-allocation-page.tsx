import styles from "../styles/contiguous-memory-allocation.module.css";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Information from "../components/information";
import type { Process } from "../types/process.model";
import { Select } from "radix-ui";
import { ChevronDown, Trash2, Play, FastForward } from "react-feather";
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
	return (
		<main className={`maxWidthWrapper ${styles.main}`}>
			<Players />
			<Algorithms />
			<Processes />
			<Parameters />
			<Chart />
			<Simulation />
		</main>
	);
}

function Algorithms() {
	return (
		<section className={styles.algorithms}>
			<h2 className={styles.sectionTitle}>Algorithm</h2>
			<Select.Root>
				<Select.Trigger className={styles.selectTrigger} aria-label="Algorithm">
					<Select.Value className={styles.selectValue} placeholder="..." />
					<Select.Icon>
						<ChevronDown className={styles.chevronDown} />
					</Select.Icon>
				</Select.Trigger>
				<Select.Portal>
					<Select.Content className={styles.selectContent}>
						<Select.ScrollUpButton />
						<Select.Viewport className={styles.selectViewport}>
							<Select.Group>
								<Select.Item className={styles.selectItem} value="first-fit">
									<Select.ItemText>First-fit</Select.ItemText>
								</Select.Item>
								<Select.Item className={styles.selectItem} value="best-fit">
									<Select.ItemText>Best-fit</Select.ItemText>
								</Select.Item>
								<Select.Item className={styles.selectItem} value="worst-fit">
									<Select.ItemText>Worst-fit</Select.ItemText>
								</Select.Item>
							</Select.Group>
						</Select.Viewport>

						<Select.ScrollUpButton />
					</Select.Content>
				</Select.Portal>
			</Select.Root>
		</section>
	);
}

function Processes() {
	const [placeholderData, setPlaceholderData] = useState([
		{ name: "Process 1", size: 100, time: 5 },
		{ name: "Process 2", size: 200, time: 2 },
		{ name: "Process 3", size: 300, time: 4 },
		{ name: "Process 4", size: 400, time: 8 },
		{ name: "Process 5", size: 500, time: 9 },
		{ name: "Process 6", size: 600, time: 1 },
		{ name: "Process 7", size: 700, time: 1 },
		{ name: "Process 8", size: 800, time: 3 },
		{ name: "Process 9", size: 900, time: 6 },
		{ name: "Process 10", size: 950, time: 4 },
	]);
	return (
		<section className={styles.processesGridArea}>
			<div className={styles.processesContainer}>
				<div className={styles.processHeader}>
					<p>Name</p>
					<p>Size</p>
					<p>Time</p>
				</div>
				<div className={styles.separator}></div>
				<div className={styles.processes}>
					{placeholderData.map((el) => (
						<Process
							key={el.name}
							name={el.name}
							size={el.size}
							time={el.time}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function Process({ name, size, time }: Process) {
	return (
		<div className={styles.process}>
			<p>{name}</p>
			<p>{size}</p>
			<p>{time}</p>
			<button className={styles.btnDeleteProcess}>
				<Trash2 />
			</button>
		</div>
	);
}

function Parameters() {
	return <section className={styles.parameters}>Parameters</section>;
}

function Players() {
	return (
		<section className={styles.players}>
			<h2 className={styles.sectionTitle}>Players</h2>
			<div className={styles.playersContainer}>
				<button className={styles.btnForward}>
					<Play />
				</button>
				<button className={styles.btnBackward}>
					<Play />
				</button>
				<button className={styles.btnFastForward}>
					<FastForward />
				</button>
				<button className={styles.btnFastBackward}>
					<FastForward />
				</button>
			</div>
		</section>
	);
}

function Chart() {
	return <section className={styles.chart}>Chart</section>;
}

function Simulation() {
	return <section className={styles.simulation}>Simulation</section>;
}

export default CMAPage;
