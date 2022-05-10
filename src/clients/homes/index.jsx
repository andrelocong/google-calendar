import React, { useState } from "react";
import Navbar from "./components/navbars/navbar";
import Sidebar from "./components/sidebars/sidebar";
import CalendarMonth from "./calendar-month/calendar-month";
import moment from "moment";

function Home() {
	const [mainDate, setMainDate] = useState(moment());
	const [sidebarDate, setSidebarDate] = useState(moment());
	const [isShowSidebar, setIsShowSidebar] = useState(true);
	const [isShowCreate, setIsShowCreate] = useState(false);
	const [isShowInputTime, setIsShowInputTime] = useState(false);
	const [mainTime, setMainTime] = useState(moment());

	return (
		<div className="h-[100vh] w-full">
			<Navbar
				isShowSidebar={isShowSidebar}
				setIsShowSidebar={setIsShowSidebar}
				setIsShowCreate={setIsShowCreate}
				mainDate={mainDate}
				setMainDate={setMainDate}
				setSidebarDate={setSidebarDate}
			/>

			<div className="flex w-full">
				<Sidebar
					isShowSidebar={isShowSidebar}
					setIsShowCreate={setIsShowCreate}
					isShowCreate={isShowCreate}
					sidebarDate={sidebarDate}
					setSidebarDate={setSidebarDate}
					setMainDate={setMainDate}
					mainTime={mainTime}
					setMainTime={setMainTime}
					isShowInputTime={isShowInputTime}
					setIsShowInputTime={setIsShowInputTime}
				/>

				<CalendarMonth
					mainDate={mainDate}
					setMainDate={setMainDate}
					setSidebarDate={setSidebarDate}
					sidebarDate={sidebarDate}
					mainTime={mainTime}
					setMainTime={setMainTime}
					isShowInputTime={isShowInputTime}
					setIsShowInputTime={setIsShowInputTime}
				/>
			</div>
		</div>
	);
}

export default Home;
