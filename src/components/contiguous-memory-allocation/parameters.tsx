import styles from "../../styles/contiguous-memory-allocation.module.css";
import { useState } from "react";

export default function Parameters() {
	let memorySizeLocal, compactionTimeLocal, coalescingTimeLocal;

	memorySizeLocal = localStorage.getItem("memorySize");
	compactionTimeLocal = localStorage.getItem("compactionTime");
	coalescingTimeLocal = localStorage.getItem("coalescingTime");

	if (!memorySizeLocal) {
		memorySizeLocal = 1000;
	}

	if (!compactionTimeLocal) {
		compactionTimeLocal = 4;
	}

	if (!coalescingTimeLocal) {
		coalescingTimeLocal = 20;
	}

	const [memorySize, setMemorySize] = useState(+memorySizeLocal);
	const [compactionTime, setCompactionTime] = useState(compactionTimeLocal);
	const [coalescingTime, setCoalescingTime] = useState(coalescingTimeLocal);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>, type: string) {
		const regExp = /^[0-9\b]+$/;

		if (e.target.value === "" || regExp.test(e.target.value)) {
			if (type === "memorySize") {
				setMemorySize(+e.target.value);
				localStorage.setItem("memorySize", String(+e.target.value));
			} else if (type === "compactionTime") {
				setCompactionTime(+e.target.value);
				localStorage.setItem("compactionTime", String(+e.target.value));
			} else if (type === "coalescingTime") {
				setCoalescingTime(+e.target.value);
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
					value={memorySize}
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
					value={compactionTime}
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
					value={coalescingTime}
					required
				/>
			</div>
		</section>
	);
}
