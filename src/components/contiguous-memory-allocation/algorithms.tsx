import styles from "../../styles/contiguous-memory-allocation.module.css";
import { Select } from "radix-ui";
import { ChevronDown } from "react-feather";
import { useState } from "react";

export default function Algorithms() {
	let algorithmLocal = localStorage.getItem("algorithm");

	if (!algorithmLocal) {
		algorithmLocal = "...";
	}

	const [algorithm, setAlgorithm] = useState<string>(algorithmLocal);

	function handleChange(e: string) {
		setAlgorithm(e);
		localStorage.setItem("algorithm", e);
	}

	return (
		<section className={styles.algorithmsGridArea}>
			<h2 className={styles.sectionTitle}>Algorithm</h2>
			<Select.Root value={algorithm} onValueChange={(e) => handleChange(e)}>
				<Select.Trigger className={styles.selectTrigger} aria-label="Algorithm">
					<Select.Value className={styles.selectValue}>
						{algorithm === "first-fit"
							? "First-fit"
							: algorithm === "best-fit"
								? "Best-fit"
								: algorithm === "worst-fit"
									? "Worst-fit"
									: "..."}
					</Select.Value>
					<Select.Icon>
						<ChevronDown className={styles.chevronDown} />
					</Select.Icon>
				</Select.Trigger>
				<Select.Portal>
					<Select.Content
						className={styles.selectContent}
						position="popper"
						sideOffset={8}
					>
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
						<Select.ScrollDownButton />
					</Select.Content>
				</Select.Portal>
			</Select.Root>
		</section>
	);
}
