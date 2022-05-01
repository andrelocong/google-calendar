import Calendar from "./calendar";

function Sidebar(props) {
	return (
		<>
			<div
				className={`sidebar relative z-50 ${
					props.isShowSidebar
						? "invisible translate-x-0 duration-300 ease-in-out"
						: "visible translate-x-2 duration-300 ease-in-out"
				}`}
			>
				<div
					className={`absolute top-5 left-4 flex h-[50px] w-[53px] cursor-pointer items-center justify-center rounded-full border-2 border-slate-200  ${
						props.isShowCreate
							? "bg-slate-300"
							: "bg-transparent hover:bg-white"
					}`}
					onClick={() => props.setIsShowCreate(!props.isShowCreate)}
				>
					<i className="fa-solid fa-plus text-3xl" />
				</div>

				<div
					className={`absolute top-16 z-[999] ml-[15px] mt-[10px] h-auto w-[150px] rounded-lg border-[1px] border-slate-200 bg-white shadow-lg shadow-slate-400 ${
						props.isShowCreate
							? "visible translate-x-0 translate-y-0 duration-300 ease-in-out"
							: "duration-0 invisible translate-x-[-5px] translate-y-[-50px] ease-in-out"
					}`}
				>
					<div className="py-2">
						<div className="flex h-[30px] w-full cursor-pointer items-center hover:bg-slate-200">
							<span className="pl-4 text-sm">Event</span>
						</div>

						<div className="flex h-[30px] w-full cursor-pointer items-center hover:bg-slate-200">
							<span className="pl-4 text-sm">Task</span>
						</div>
					</div>
				</div>
			</div>

			<div
				className={`h-[95vh w-[250px] border-l-[1px] ${
					props.isShowSidebar
						? "translate-x-0 duration-300 ease-in-out"
						: "translate-x-[-300px] duration-300 ease-in-out"
				}`}
			>
				<div className="sidebar__button-create relative mb-2">
					<div
						className={`mt-5 ml-2 flex h-[50px] w-[150px] cursor-pointer items-center justify-center rounded-full border-[1px] border-slate-200 shadow-md hover:shadow-lg hover:shadow-slate-400 ${
							props.isShowCreate ? "bg-slate-300" : "bg-white"
						}`}
						onClick={() => props.setIsShowCreate(!props.isShowCreate)}
					>
						<i className="fa-solid fa-plus text-3xl" />
						<div className="px-5">
							<span className="text-sm font-medium text-slate-600">Create</span>
						</div>
						<i className="fa-solid fa-caret-down text-sm text-slate-500" />
					</div>
				</div>

				<div className="sidebar__calendar p-3">
					<Calendar />
				</div>
			</div>
		</>
	);
}

export default Sidebar;
