export interface Process {
	id: string;
	name: string;
	size: number;
	time: number;
}

export interface ProcessProps {
	process: Process;
	onDelete(id: string): void;
}
