import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./clients/homes";

function App() {
	return (
		<div className="h-[100vh] overflow-hidden">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
