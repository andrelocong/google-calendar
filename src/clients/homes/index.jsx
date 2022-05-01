import React, { useState } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

function Home() {
	const [isShowSidebar, setIsShowSidebar] = useState(true);
	const [isShowCreate, setIsShowCreate] = useState(false);

	return (
		<div className="h-[100vh] w-full">
			<Navbar
				isShowSidebar={isShowSidebar}
				setIsShowSidebar={setIsShowSidebar}
				setIsShowCreate={setIsShowCreate}
			/>

			<div className="flex w-full">
				<Sidebar
					isShowSidebar={isShowSidebar}
					setIsShowCreate={setIsShowCreate}
					isShowCreate={isShowCreate}
				/>
			</div>
		</div>
	);
}

export default Home;
