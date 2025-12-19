import styles from "../../styles/contiguous-memory-allocation.module.css";
import type { Process, ProcessProps } from "../../types/process.model.ts";
import { Dialog } from "radix-ui";
import { Trash2, Plus, X } from "react-feather";
import type { SetStateAction } from "react";
import { useState } from "react";

interface ProcessesProps {
	processes: {
		value: Process[];
		setProcesses: React.Dispatch<SetStateAction<Process[]>>;
	};
	processData: {
		value: {
			id: string;
			name: string;
			size: number;
			time: number;
		};
		setProcessData: React.Dispatch<SetStateAction<Process>>;
	};
}

export default function Processes({ processes, processData }: ProcessesProps) {
	const [open, setOpen] = useState(false);

	function handleProcessData(
		e: React.ChangeEvent<HTMLInputElement>,
		type: string,
	) {
		if (type === "name") {
			processData.setProcessData({
				id: crypto.randomUUID(),
				name: e.target.value,
				size: processData.value.size,
				time: processData.value.time,
			});
		} else if (type === "size") {
			processData.setProcessData({
				id: crypto.randomUUID(),
				name: processData.value.name,
				size: +e.target.value,
				time: processData.value.time,
			});
		} else if (type === "time") {
			processData.setProcessData({
				id: crypto.randomUUID(),
				name: processData.value.name,
				size: processData.value.size,
				time: +e.target.value,
			});
		}
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setOpen(false);
		processes.setProcesses([...processes.value, processData.value]);
		localStorage.setItem(
			"processes",
			JSON.stringify([...processes.value, processData.value]),
		);
	}

	function deleteProcess(id: string) {
		const newProcesses = processes.value.filter((process) => process.id !== id);
		processes.setProcesses(newProcesses);
		localStorage.setItem("processes", JSON.stringify(newProcesses));
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
										<button
											className={`${styles.btnDialogAddProcess}`}
											type="submit"
										>
											Add
										</button>
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
					{processes.value.map((el, index) => (
						<Process key={index} process={el} onDelete={deleteProcess} />
					))}
				</div>
			</div>
		</section>
	);
}

function Process({ process, onDelete }: ProcessProps) {
	const [open, setOpen] = useState(false);

	function closeModal() {
		setOpen(false);
	}

	return (
		<div className={styles.process}>
			<p>{process.name}</p>
			<p>{process.size}</p>
			<p>{process.time}</p>
			<Dialog.Root open={open} onOpenChange={setOpen}>
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
							<button
								onClick={() => {
									onDelete(process.id);
									closeModal();
								}}
								className={`${styles.btnDialogDeleteProcess}`}
							>
								Delete
							</button>
						</div>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</div>
	);
}
