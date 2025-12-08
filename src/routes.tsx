import App from "./app";
import CMAPage from "./pages/contiguous-memory-allocation-page";
import ErrorBoundary from "./pages/error-page";
import EventLoopPage from "./pages/event-loop-page";
import HomePage from "./pages/home-page";
import PathfindingAlgorithmsPage from "./pages/pathfinding-algorithms-page";
import SortingAlgorithmsPage from "./pages/sorting-algorithms-page";

const routes = [
	{
		path: "/",
		Component: App,
		ErrorBoundary: ErrorBoundary,
		children: [
			{ index: true, Component: HomePage },
			{ path: "contiguous-memory-allocation", Component: CMAPage },
			{ path: "event-loop", Component: EventLoopPage },
			{ path: "sorting-algorithms", Component: SortingAlgorithmsPage },
			{ path: "pathfinding-algorithms", Component: PathfindingAlgorithmsPage },
		],
	},
];

export default routes;
