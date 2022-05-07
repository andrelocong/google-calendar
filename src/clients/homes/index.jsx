import React, { useState } from "react";
import Navbar from "./components/navbars/navbar";
import Sidebar from "./components/sidebars/sidebar";
import CalendarHome from "./calendar-month/calendar-month";
import moment from "moment";

function Home() {
	const [value, setValue] = useState(moment());
	const [sidebarValue, setSidebarValue] = useState(moment());
	const [isShowSidebar, setIsShowSidebar] = useState(true);
	const [isShowCreate, setIsShowCreate] = useState(false);
	const [time, setTime] = useState(moment());

	return (
		<div className="h-[100vh] w-full">
			<Navbar
				isShowSidebar={isShowSidebar}
				setIsShowSidebar={setIsShowSidebar}
				setIsShowCreate={setIsShowCreate}
				value={value}
				setValue={setValue}
				setSidebarValue={setSidebarValue}
			/>

			<div className="flex w-full">
				<Sidebar
					isShowSidebar={isShowSidebar}
					setIsShowCreate={setIsShowCreate}
					isShowCreate={isShowCreate}
					sidebarValue={sidebarValue}
					setSidebarValue={setSidebarValue}
					setMainValue={setValue}
					time={time}
					setTime={setTime}
				/>

				<CalendarHome
					value={value}
					setValue={setValue}
					setSidebarValue={setSidebarValue}
					sidebarValue={sidebarValue}
					time={time}
					setTime={setTime}
				/>
			</div>
		</div>
	);
}

export default Home;
