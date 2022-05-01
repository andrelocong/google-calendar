import React, { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

function Home() {
	const [isShowSidebar, setIsShowSidebar] = useState(true);
	return (
		<div className="h-[100vh] w-full">
			<Navbar
				isShowSidebar={isShowSidebar}
				setIsShowSidebar={setIsShowSidebar}
			/>

			<div className="flex w-full">
				<Sidebar isShowSidebar={isShowSidebar} />
			</div>
		</div>
	);
}

export default Home;
