import styles from "../styles/toast.module.css";
import { X } from "react-feather";

interface ToastProps {
	children: React.ReactNode;
	onHide(): void;
}

export default function Toast({ children, onHide }: ToastProps) {
	return (
		<div className={styles.toast}>
			<div className={styles.content}>{children}</div>
			<button className={styles.btnDelete} onClick={onHide}>
				<X />
			</button>
		</div>
	);
}
