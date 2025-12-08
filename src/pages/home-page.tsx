import { Link } from "react-router";

function HomePage() {
	return (
		<>
			<p>At the home page...</p>
			<Link to="/contiguous-memory-allocation">Go to the CMA page...</Link>
			<Link to="/event-loop">Go to the event loop page...</Link>
			<Link to="/sorting-algorithms">Go to the sorting algorithms page...</Link>
			<Link to="/pathfinding-algorithms">
				Go to the pathfinding algorithms page...
			</Link>
		</>
	);
}

export default HomePage;
