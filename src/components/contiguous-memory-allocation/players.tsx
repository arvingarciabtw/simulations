import styles from "../../styles/contiguous-memory-allocation.module.css";
import Toast from "../toast";
import { RotateCw, Play, FastForward } from "react-feather";
import { useState } from "react";

export default function Players() {
	const [showToast, setShowToast] = useState(false);
	const [toastMessage, setToastMessage] = useState("");

	function handleClick(message: string) {
		setShowToast(true);
		setToastMessage(message);
		setTimeout(() => {
			setShowToast(false);
		}, 3000);
	}

	return (
		<section className={styles.playersGridArea}>
			<h2 className={styles.sectionTitle}>Players</h2>
			<div className={styles.playersContainer}>
				<button
					className={styles.btnReset}
					onClick={() => handleClick("Clicked reset!")}
				>
					<RotateCw />
				</button>
				<button
					className={styles.btnForward}
					onClick={() => handleClick("Clicked forward player!")}
				>
					<Play />
				</button>
				<button
					className={styles.btnFastForward}
					onClick={() => handleClick("Clicked fast forward player!")}
				>
					<FastForward />
				</button>
			</div>
			{showToast ? <Toast>{toastMessage}</Toast> : null}
		</section>
	);
}
