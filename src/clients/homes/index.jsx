import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

function Home() {
	return (
		<div className="w-full h-[100vh]">
			<Navbar />

			<div className="w-full flex">
				<div className="sidebar">
					<Sidebar />
				</div>
			</div>
		</div>
	);
}

export default Home;
