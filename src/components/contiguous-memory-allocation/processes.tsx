import styles from "../../styles/contiguous-memory-allocation.module.css";
import type { Process } from "../../types/process.model.ts";
import { Dialog } from "radix-ui";

import { Trash2, Plus, X } from "react-feather";
import { useState } from "react";

export default function Processes() {
	const [open, setOpen] = useState(false);
	const [processes, setProcesses] = useState<Process[]>([]);
	const [processData, setProcessData] = useState<Process>({
		name: "",
		size: +"",
		time: +"",
	});

	function handleProcessData(
		e: React.ChangeEvent<HTMLInputElement>,
		type: string,
	) {
		if (type === "name") {
			setProcessData({
				name: e.target.value,
				size: processData.size,
				time: processData.time,
			});
		} else if (type === "size") {
			setProcessData({
				name: processData.name,
				size: +e.target.value,
				time: processData.time,
			});
		} else if (type === "time") {
			setProcessData({
				name: processData.name,
				size: processData.size,
				time: +e.target.value,
			});
		}
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setOpen(false);
		setProcesses([...processes, processData]);
	}

	return (
		<section className={styles.processesGridArea}>
			<div className={styles.processesContainer}>
				<div className={styles.processHeader}>
					<p>Name</p>
					<p>Size</p>
					<p>Time</p>
					<Dialog.Root open={open} onOpenChange={setOpen}>
						<Dialog.Trigger asChild>
							<button className={styles.btnAddProcess}>
								<Plus />
							</button>
						</Dialog.Trigger>
						<Dialog.Portal>
							<Dialog.Overlay className={styles.dialogOverlay} />
							<Dialog.Content className={styles.dialogContent}>
								<Dialog.Title className={styles.dialogTitle}>
									Add a Process
								</Dialog.Title>
								<Dialog.Description className={styles.dialogDescription}>
									Specify the parameters of the process below. Click add when
									you are done.
								</Dialog.Description>
								<form onSubmit={(e) => handleSubmit(e)}>
									<div className={styles.addProcessInputs}>
										<fieldset className={styles.fieldset}>
											<label className={styles.label} htmlFor="name">
												Name
											</label>
											<input
												required
												className={styles.input}
												id="name"
												placeholder="Process 1"
												onChange={(e) => handleProcessData(e, "name")}
											/>
										</fieldset>
										<fieldset className={styles.fieldset}>
											<label className={styles.label} htmlFor="size">
												Size
											</label>
											<input
												required
												className={styles.input}
												id="size"
												inputMode="numeric"
												pattern="\d*"
												title="Only numbers are allowed"
												placeholder="100"
												onChange={(e) => handleProcessData(e, "size")}
											/>
										</fieldset>
										<fieldset className={styles.fieldset}>
											<label className={styles.label} htmlFor="time">
												Time
											</label>
											<input
												required
												className={styles.input}
												id="time"
												inputMode="numeric"
												pattern="\d*"
												title="Only numbers are allowed"
												placeholder="5"
												onChange={(e) => handleProcessData(e, "time")}
											/>
										</fieldset>
									</div>
									<div
										style={{
											display: "flex",
											marginTop: 24,
											justifyContent: "flex-end",
										}}
									>
										{/* <Dialog.Close asChild> */}
										<button
											className={`${styles.btnDialogAddProcess}`}
											type="submit"
										>
											Add
										</button>
										{/* </Dialog.Close> */}
									</div>
								</form>
								<Dialog.Close asChild>
									<button className={styles.iconButton} aria-label="Close">
										<X />
									</button>
								</Dialog.Close>
							</Dialog.Content>
						</Dialog.Portal>
					</Dialog.Root>
				</div>
				<div className={styles.separator}></div>
				<div className={styles.processes}>
					{processes.map((el, index) => (
						<Process key={index} name={el.name} size={el.size} time={el.time} />
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
			<Dialog.Root>
				<Dialog.Trigger asChild>
					<button className={styles.btnDeleteProcess}>
						<Trash2 />
					</button>
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay className={styles.dialogOverlay} />
					<Dialog.Content className={styles.deleteDialog}>
						<Dialog.Title className={styles.dialogTitle}>
							Delete a Process
						</Dialog.Title>
						<Dialog.Description className={styles.dialogDescription}>
							Are you sure you want to delete this process?
						</Dialog.Description>
						<div className={styles.deleteDialogBtns}>
							<Dialog.Close asChild>
								<button className={styles.btnDialogCancel}>Cancel</button>
							</Dialog.Close>
							<Dialog.Close asChild>
								<button className={`${styles.btnDialogDeleteProcess}`}>
									Delete
								</button>
							</Dialog.Close>
						</div>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</div>
	);
}
