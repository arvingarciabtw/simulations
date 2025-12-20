import styles from "../../styles/contiguous-memory-allocation.module.css";
import Toast from "../toast";
import { RotateCw, Play, FastForward } from "react-feather";
import type { Process } from "../../types/process.model";
import type { SetStateAction } from "react";

interface PlayersProps {
	algorithm: string;
	parameters: {
		memorySize: number;
		compactionTime: number;
		coalescingTime: number;
	};
	processes: Process[];
	toast: {
		isToastShown: boolean;
		showToast(): void;
		hideToast(): void;
		toastMessage: string;
		setToastMessage: React.Dispatch<SetStateAction<string>>;
	};
}

export default function Players({
	algorithm,
	parameters,
	processes,
	toast,
}: PlayersProps) {
	function handleClick() {
		const hasAlgorithm = algorithm !== "...";
		const hasParameters =
			parameters.memorySize > 0 &&
			parameters.compactionTime > 0 &&
			parameters.coalescingTime > 0;
		const hasProcess = Boolean(processes.length > 0);

		toast.showToast();
		if (hasAlgorithm && hasParameters && hasProcess) {
			toast.setToastMessage(`Simulating with the ${algorithm} algorithm...`);
		} else {
			toast.setToastMessage(
				"Make sure you have at least one process, and all inputs have valid values.",
			);
		}

		setTimeout(() => {
			toast.hideToast();
		}, 5000);
	}

	return (
		<section className={styles.playersGridArea}>
			<h2 className={styles.sectionTitle}>Players</h2>
			<div className={styles.playersContainer}>
				<button className={styles.btnReset} onClick={handleClick}>
					<RotateCw />
				</button>
				<button className={styles.btnForward} onClick={handleClick}>
					<Play />
				</button>
				<button className={styles.btnFastForward} onClick={handleClick}>
					<FastForward />
				</button>
			</div>
			{toast.isToastShown ? (
				<Toast onHide={toast.hideToast}>{toast.toastMessage}</Toast>
			) : null}
		</section>
	);
}
