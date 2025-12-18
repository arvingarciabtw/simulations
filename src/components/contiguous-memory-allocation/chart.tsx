import styles from "../../styles/contiguous-memory-allocation.module.css";
import type { ProcessCell } from "../../types/process-cell.model";
import { useState } from "react";

export default function Chart() {
	const [placeholderData] = useState([
		// { id: 1, name: "P1", type: "normal" },
		// { id: 2, name: "P2", type: "normal" },
		// { id: 3, name: "P1", type: "normal" },
		// { id: 4, name: "P5", type: "normal" },
		// { id: 5, name: "P3", type: "normal" },
		// { id: 6, name: "P4", type: "normal" },
		// { id: 7, name: "P2", type: "normal" },
		// { id: 8, name: "P6", type: "ch" },
		// { id: 9, name: "P8", type: "normal" },
		// { id: 10, name: "P6", type: "normal" },
		// { id: 11, name: "P3", type: "normal" },
		// { id: 12, name: "P7", type: "ch" },
		// { id: 13, name: "P1", type: "normal" },
		// { id: 14, name: "P5", type: "normal" },
		// { id: 15, name: "P2", type: "normal" },
		// { id: 16, name: "P8", type: "sc" },
		// { id: 17, name: "P4", type: "sc" },
		// { id: 18, name: "P3", type: "sc" },
		// { id: 19, name: "P6", type: "normal" },
		// { id: 20, name: "P7", type: "ch" },
		// { id: 21, name: "P1", type: "normal" },
		// { id: 22, name: "P5", type: "normal" },
		// { id: 23, name: "P2", type: "normal" },
		// { id: 24, name: "P8", type: "normal" },
		// { id: 25, name: "P4", type: "normal" },
		// { id: 26, name: "P3", type: "normal" },
		// { id: 27, name: "P6", type: "normal" },
		// { id: 28, name: "P7", type: "ch" },
		// { id: 29, name: "P2", type: "normal" },
		// { id: 30, name: "P8", type: "normal" },
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
