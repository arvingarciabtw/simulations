import styles from "../styles/contiguous-memory-allocation.module.css";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Information from "../components/information";
import Processes from "../components/contiguous-memory-allocation/processes";
import Parameters from "../components/contiguous-memory-allocation/parameters";
import type { ProcessCell } from "../types/process-cell.model";
import type { ProcessBlock } from "../types/process-block.model";
import { Select } from "radix-ui";
import { ChevronDown, RotateCw, Play, FastForward } from "react-feather";
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
			<Parameters />
			<Processes />
			<Chart />
			<Simulation />
		</main>
	);
}

function Players() {
	return (
		<section className={styles.playersGridArea}>
			<h2 className={styles.sectionTitle}>Players</h2>
			<div className={styles.playersContainer}>
				<button className={styles.btnReset}>
					<RotateCw />
				</button>
				<button className={styles.btnForward}>
					<Play />
				</button>
				<button className={styles.btnFastForward}>
					<FastForward />
				</button>
			</div>
		</section>
	);
}

function Algorithms() {
	return (
		<section className={styles.algorithmsGridArea}>
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

function Chart() {
	const [placeholderData] = useState([
		{ id: 1, name: "P1", type: "normal" },
		{ id: 2, name: "P2", type: "normal" },
		{ id: 3, name: "P1", type: "normal" },
		{ id: 4, name: "P5", type: "normal" },
		{ id: 5, name: "P3", type: "normal" },
		{ id: 6, name: "P4", type: "normal" },
		{ id: 7, name: "P2", type: "normal" },
		{ id: 8, name: "P6", type: "ch" },
		{ id: 9, name: "P8", type: "normal" },
		{ id: 10, name: "P6", type: "normal" },
		{ id: 11, name: "P3", type: "normal" },
		{ id: 12, name: "P7", type: "ch" },
		{ id: 13, name: "P1", type: "normal" },
		{ id: 14, name: "P5", type: "normal" },
		{ id: 15, name: "P2", type: "normal" },
		{ id: 16, name: "P8", type: "sc" },
		{ id: 17, name: "P4", type: "sc" },
		{ id: 18, name: "P3", type: "sc" },
		{ id: 19, name: "P6", type: "normal" },
		{ id: 20, name: "P7", type: "ch" },
		{ id: 21, name: "P1", type: "normal" },
		{ id: 22, name: "P5", type: "normal" },
		{ id: 23, name: "P2", type: "normal" },
		{ id: 24, name: "P8", type: "normal" },
		{ id: 25, name: "P4", type: "normal" },
		{ id: 26, name: "P3", type: "normal" },
		{ id: 27, name: "P6", type: "normal" },
		{ id: 28, name: "P7", type: "ch" },
		{ id: 29, name: "P2", type: "normal" },
		{ id: 30, name: "P8", type: "normal" },
	]);
	return (
		<section className={styles.chartGridArea}>
			<div className={styles.processCells}>
				{placeholderData.map((el) => (
					<ProcessCell key={el.id} name={el.name} type={el.type} />
				))}
			</div>
		</section>
	);
}

function ProcessCell({ type, name }: ProcessCell) {
	return (
		<>
			{type === "ch" ? (
				<article className={`${styles.processCell} ${styles.coalescingHole}`}>
					CH
				</article>
			) : type === "sc" ? (
				<article
					className={`${styles.processCell} ${styles.storageCompaction}`}
				>
					SC
				</article>
			) : (
				<article className={styles.processCell}>{name}</article>
			)}
		</>
	);
}

function Simulation() {
	const [placeholderData] = useState([
		{ type: "sc", name: "125 KB", height: 12.5 },
		{ type: "sc", name: "175 KB", height: 17.5 },
		{ type: "normal", name: "Process 3", height: 10 },
		{ type: "normal", name: "Process 4", height: 30 },
		{ type: "ch", name: "200 KB", height: 20 },
		{ type: "normal", name: "Process 6", height: 10 },
	]);
	return (
		<section className={styles.simulationGridArea}>
			<h2 className={styles.sectionTitle}>Simulation</h2>
			<div className={styles.processBlocks}>
				{placeholderData.map((el) => (
					<ProcessBlock
						key={el.name}
						type={el.type}
						name={el.name}
						height={el.height}
					/>
				))}
			</div>
		</section>
	);
}

function ProcessBlock({ type, name, height }: ProcessBlock) {
	return (
		<>
			{type === "ch" ? (
				<article
					className={`${styles.processBlock} ${styles.coalescingHoleBlock}`}
					style={{
						height: `${height}%`,
					}}
				>
					<span>{name}</span>
				</article>
			) : type === "sc" ? (
				<article
					className={`${styles.processBlock} ${styles.storageCompactionBlock}`}
					style={{
						height: `${height}%`,
					}}
				>
					{name}
				</article>
			) : (
				<article
					className={styles.processBlock}
					style={{
						height: `${height}%`,
					}}
				>
					{name}
				</article>
			)}
		</>
	);
}

export default CMAPage;
