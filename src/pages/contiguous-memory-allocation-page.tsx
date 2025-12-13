import styles from "../styles/contiguous-memory-allocation.module.css";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Information from "../components/information";
import type { Process } from "../types/process.model";
import { Select, Dialog } from "radix-ui";
import { ChevronDown, Trash2, Play, FastForward, Plus, X } from "react-feather";
import { useState } from "react";
import type { ProcessCell } from "../types/process-cell.model";

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
				<button className={styles.btnForward}>
					<Play />
				</button>
				<button className={styles.btnBackward}>
					<Play />
				</button>
				<button className={styles.btnFastForward}>
					<FastForward />
				</button>
				<button className={styles.btnFastBackward}>
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

function Processes() {
	const [placeholderData] = useState([
		{ name: "Process 1", size: 100, time: 5 },
		{ name: "Process 2", size: 200, time: 2 },
		{ name: "Process 3", size: 300, time: 4 },
		{ name: "Process 4", size: 400, time: 8 },
		{ name: "Process 5", size: 500, time: 9 },
		{ name: "Process 6", size: 600, time: 1 },
		{ name: "Process 7", size: 700, time: 1 },
		{ name: "Process 8", size: 800, time: 3 },
		{ name: "Process 9", size: 900, time: 6 },
		{ name: "Process 10", size: 950, time: 4 },
	]);

	return (
		<section className={styles.processesGridArea}>
			<div className={styles.processesContainer}>
				<div className={styles.processHeader}>
					<p>Name</p>
					<p>Size</p>
					<p>Time</p>
					<Dialog.Root>
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
								<div className={styles.addProcessInputs}>
									<fieldset className={styles.fieldset}>
										<label className={styles.label} htmlFor="name">
											Name
										</label>
										<input
											className={styles.input}
											id="name"
											defaultValue="Process 1"
										/>
									</fieldset>
									<fieldset className={styles.fieldset}>
										<label className={styles.label} htmlFor="size">
											Size
										</label>
										<input
											className={styles.input}
											id="size"
											defaultValue={100}
										/>
									</fieldset>
									<fieldset className={styles.fieldset}>
										<label className={styles.label} htmlFor="time">
											Time
										</label>
										<input
											className={styles.input}
											id="time"
											defaultValue={5}
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
									<Dialog.Close asChild>
										<button className={`${styles.btnDialogAddProcess}`}>
											Add
										</button>
									</Dialog.Close>
								</div>
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
					{placeholderData.map((el) => (
						<Process
							key={el.name}
							name={el.name}
							size={el.size}
							time={el.time}
						/>
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

function Parameters() {
	return (
		<section className={styles.parametersGridArea}>
			<div className={styles.memorySize}>
				<label htmlFor="memory-size">Memory Size</label>
				<input
					type="text"
					name="memory-size"
					id="memory-size"
					value="1000"
					required
				/>
			</div>
			<div className={styles.compactionTime}>
				<label htmlFor="compaction-time">Compaction Time</label>
				<input
					type="text"
					name="compaction-time"
					id="compaction-time"
					value="16"
					required
				/>
			</div>
			<div className={styles.coalescingTime}>
				<label htmlFor="coalescing-time">Coalescing Time</label>
				<input
					type="text"
					name="coalescing-time"
					id="coalescing-time"
					value="4"
					required
				/>
			</div>
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
		{ type: "sc", name: "150 KB", height: 15 },
		{ type: "sc", name: "150 KB", height: 15 },
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

interface ProcessBlock {
	type: string;
	name: string;
	height: number;
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
