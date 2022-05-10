import { useState } from "react";
import CalendarSidebar from "./calendar-sidebar/calendar-sidebar";
import CreateModalEvent from "./create-modal.jsx/create-modal.event";
import CreateModalTask from "./create-modal.jsx/create-modal.task";

function Sidebar({
	isShowSidebar,
	setIsShowCreate,
	isShowCreate,
	sidebarDate,
	setSidebarDate,
	setMainDate,
	mainTime,
	setMainTime,
	isShowInputTime,
	setIsShowInputTime,
}) {
	const [isShowCreateModalEvent, setIsShowCreateModalEvent] = useState(false);
	const [isShowCreateModalTask, setIsShowCreateModalTask] = useState(false);
	const [isShowCalendar, setIsShowCalendar] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	return (
		<>
			<CreateModalEvent
				isShowCreateModalEvent={isShowCreateModalEvent}
				setIsShowCreateModalEvent={setIsShowCreateModalEvent}
				setIsShowCreateModalTask={setIsShowCreateModalTask}
				isShowCalendar={isShowCalendar}
				setIsShowCalendar={setIsShowCalendar}
				sidebarDate={sidebarDate}
				setSidebarDate={setSidebarDate}
				setMainDate={setMainDate}
				title={title}
				setTitle={setTitle}
				setDescription={setDescription}
				mainTime={mainTime}
				setMainTime={setMainTime}
				isShowInputTime={isShowInputTime}
				setIsShowInputTime={setIsShowInputTime}
			/>

			<CreateModalTask
				isShowCreateModalTask={isShowCreateModalTask}
				setIsShowCreateModalTask={setIsShowCreateModalTask}
				setIsShowCreateModalEvent={setIsShowCreateModalEvent}
				isShowCalendar={isShowCalendar}
				setIsShowCalendar={setIsShowCalendar}
				sidebarDate={sidebarDate}
				setSidebarDate={setSidebarDate}
				setMainDate={setMainDate}
				title={title}
				setTitle={setTitle}
				setDescription={setDescription}
				description={description}
				mainTime={mainTime}
				setMainTime={setMainTime}
				isShowInputTime={isShowInputTime}
				setIsShowInputTime={setIsShowInputTime}
			/>
			<div
				className={`sidebar relative z-50 ${
					isShowSidebar
						? "invisible translate-x-0 duration-300 ease-in-out"
						: "visible translate-x-2 duration-300 ease-in-out"
				}`}
			>
				<div
					className={`absolute top-5 left-4 flex h-[50px] w-[53px] cursor-pointer items-center justify-center rounded-full border-2 border-slate-200  ${
						isShowCreate ? "bg-slate-300" : "bg-transparent hover:bg-white"
					}`}
					onClick={() => setIsShowCreate(!isShowCreate)}
				>
					<i className="fa-solid fa-plus text-3xl" />
				</div>
			</div>

			<div
				className={`h-[95vh w-[250px] border-l-[1px] ${
					isShowSidebar
						? "realtive translate-x-0 duration-300 ease-in-out"
						: "absolute translate-x-[-300px] duration-300 ease-in-out"
				}`}
			>
				<div className="sidebar__button-create relative z-50 mb-2">
					<div
						className={`mt-5 ml-2 flex h-[50px] w-[150px] cursor-pointer items-center justify-center rounded-full border-[1px] border-slate-200 shadow-md hover:shadow-lg hover:shadow-slate-400 ${
							isShowCreate ? "bg-slate-300" : "bg-white"
						}`}
						onClick={() => setIsShowCreate(!isShowCreate)}
					>
						<i className="fa-solid fa-plus text-3xl" />
						<div className="px-5">
							<span className="text-sm font-medium text-slate-600">Create</span>
						</div>
						<i className="fa-solid fa-caret-down text-sm text-slate-500" />
					</div>
				</div>

				<div className="sidebar__calendar p-3">
					<CalendarSidebar
						sidebarDate={sidebarDate}
						setSidebarDate={setSidebarDate}
						setIsShowCalendar={setIsShowCalendar}
						isShowCalendar={isShowCalendar}
						setMainDate={setMainDate}
					/>
				</div>
			</div>

			<div
				className={`absolute top-0 right-0 bottom-0 left-0 ${
					isShowCreate
						? "visible z-[49] translate-x-0 translate-y-0 duration-300 ease-in-out"
						: "duration-0 invisible z-[51] translate-x-[-5px] translate-y-[-50px] ease-in-out"
				}`}
				onClick={() => setIsShowCreate(false)}
			>
				<div
					className={`absolute top-32 ml-[20px] mt-[10px] h-auto w-[150px] rounded-lg border-[1px] border-slate-200 bg-white shadow-lg shadow-slate-400`}
					onClick={(e) => e.stopPropagation()}
				>
					<div className="py-2">
						<div
							className="flex h-[30px] w-full cursor-pointer items-center hover:bg-slate-200"
							onClick={() => {
								setIsShowCreateModalEvent(true);
								setIsShowCreate(false);
							}}
						>
							<span className="pl-4 text-sm">Event</span>
						</div>

						<div
							className="flex h-[30px] w-full cursor-pointer items-center hover:bg-slate-200"
							onClick={() => {
								setIsShowCreateModalTask(true);
								setIsShowCreate(false);
							}}
						>
							<span className="pl-4 text-sm">Task</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Sidebar;
