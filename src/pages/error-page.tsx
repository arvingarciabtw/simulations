import styles from "../styles/error-page.module.css";
import { useRouteError, isRouteErrorResponse } from "react-router";
import { Link } from "react-router";

function ErrorBoundary() {
	const error = useRouteError();
	if (isRouteErrorResponse(error)) {
		return (
			<main className={styles.main}>
				<h1 className={styles.errorHeading}>
					{error.status} {error.statusText}
				</h1>
				<p>{error.data}</p>
				<Link to="/" className={styles.back}>
					Back to home
				</Link>
			</main>
		);
	} else if (error instanceof Error) {
		return (
			<div>
				<h1>Error</h1>
				<p>{error.message}</p>
				<p>The stack trace is:</p>
				<pre>{error.stack}</pre>
			</div>
		);
	} else {
		return <h1>Unknown Error</h1>;
	}
}

export default ErrorBoundary;
