import styles from "../styles/toast.module.css";
import { X } from "react-feather";

export default function Toast({ children }: React.PropsWithChildren) {
	return (
		<div className={styles.toast}>
			<div className={styles.content}>{children}</div>
			<button className={styles.btnDelete}>
				<X />
			</button>
		</div>
	);
}
