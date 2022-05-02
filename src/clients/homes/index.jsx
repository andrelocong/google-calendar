import React, { useState } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import CalendarHome from "./components/calendar/calendar.home";
import moment from "moment";

function Home() {
	const [value, setValue] = useState(moment());
	const [isShowSidebar, setIsShowSidebar] = useState(true);
	const [isShowCreate, setIsShowCreate] = useState(false);

	return (
		<div className="h-[100vh] w-full">
			<Navbar
				isShowSidebar={isShowSidebar}
				setIsShowSidebar={setIsShowSidebar}
				setIsShowCreate={setIsShowCreate}
				value={value}
				setValue={setValue}
			/>

			<div className="flex w-full">
				<Sidebar
					isShowSidebar={isShowSidebar}
					setIsShowCreate={setIsShowCreate}
					isShowCreate={isShowCreate}
					value={value}
					setValue={setValue}
				/>

				<CalendarHome value={value} setValue={setValue} />
			</div>
		</div>
	);
}

export default Home;
