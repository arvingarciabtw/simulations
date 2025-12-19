import styles from "../../styles/contiguous-memory-allocation.module.css";
import type { SetStateAction } from "react";

interface ParametersProps {
	parameters: {
		memorySize: {
			value: number;
			setMemorySize: React.Dispatch<SetStateAction<number>>;
		};
		compactionTime: {
			value: number;
			setCompactionTime: React.Dispatch<SetStateAction<number>>;
		};
		coalescingTime: {
			value: number;
			setCoalescingTime: React.Dispatch<SetStateAction<number>>;
		};
	};
}

export default function Parameters({ parameters }: ParametersProps) {
	function handleChange(e: React.ChangeEvent<HTMLInputElement>, type: string) {
		const regExp = /^[0-9\b]+$/;

		if (e.target.value === "" || regExp.test(e.target.value)) {
			if (type === "memorySize") {
				parameters.memorySize.setMemorySize(+e.target.value);
				localStorage.setItem("memorySize", String(+e.target.value));
			} else if (type === "compactionTime") {
				parameters.compactionTime.setCompactionTime(+e.target.value);
				localStorage.setItem("compactionTime", String(+e.target.value));
			} else if (type === "coalescingTime") {
				parameters.coalescingTime.setCoalescingTime(+e.target.value);
				localStorage.setItem("coalescingTime", String(+e.target.value));
			}
		}
	}

	return (
		<section className={styles.parametersGridArea}>
			<div className={styles.memorySize}>
				<label htmlFor="memory-size">Memory Size</label>
				<input
					type="text"
					name="memory-size"
					id="memory-size"
					onChange={(e) => handleChange(e, "memorySize")}
					value={parameters.memorySize.value}
					required
				/>
			</div>
			<div className={styles.compactionTime}>
				<label htmlFor="compaction-time">Compaction Time</label>
				<input
					type="text"
					name="compaction-time"
					id="compaction-time"
					onChange={(e) => handleChange(e, "compactionTime")}
					value={parameters.compactionTime.value}
					required
				/>
			</div>
			<div className={styles.coalescingTime}>
				<label htmlFor="coalescing-time">Coalescing Time</label>
				<input
					type="text"
					name="coalescing-time"
					id="coalescing-time"
					onChange={(e) => handleChange(e, "coalescingTime")}
					value={parameters.coalescingTime.value}
					required
				/>
			</div>
		</section>
	);
}
