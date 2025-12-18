import styles from "../../styles/contiguous-memory-allocation.module.css";
import type { ProcessBlock } from "../../types/process-block.model";
import { useState } from "react";

export default function Simulation() {
	const [placeholderData] = useState([
		// { type: "sc", name: "125 KB", height: 12.5 },
		// { type: "sc", name: "175 KB", height: 17.5 },
		// { type: "normal", name: "Process 3", height: 10 },
		// { type: "normal", name: "Process 4", height: 30 },
		// { type: "ch", name: "200 KB", height: 20 },
		// { type: "normal", name: "Process 6", height: 10 },
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
