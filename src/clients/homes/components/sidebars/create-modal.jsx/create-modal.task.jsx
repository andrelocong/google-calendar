import CalendarSidebar from "../calendar-sidebar/calendar-sidebar";
import NavigateButton from "./components/navigate.button";
import CloseButton from "./components/close.button";
import InputTimes from "./components/input-times";
import TimeButton from "./components/time.button";
import { useDispatch } from "react-redux";
import { addEvent } from "../../../../../stores/reducers/event.reducer";

function CreateModalTask(props) {
	//props from sidebar.jsx
	const isShowCreateModalTask = props.isShowCreateModalTask;
	const setIsShowCreateModalTask = props.setIsShowCreateModalTask;
	const setIsShowCreateModalEvent = props.setIsShowCreateModalEvent;
	const setIsShowCalendar = props.setIsShowCalendar;
	const isShowCalendar = props.isShowCalendar;
	const value = props.value;
	const setValue = props.setValue;
	const setMainValue = props.setMainValue;
	const title = props.title;
	const setTitle = props.setTitle;
	const description = props.description;
	const setDescription = props.setDescription;
	const showEvent = props.showEvent;
	const time = props.time;
	const setTime = props.setTime;
	const isShowInputTime = props.isShowInputTime;
	const setIsShowInputTime = props.setIsShowInputTime;

	const dayName = value.format("dddd");
	const monthName = value.format("MMMM");
	const day = value.format("D");

	const dispatch = useDispatch();

	const handleSave = () => {
		const newDate = value.format("YYYY-MM-DD") + "T00:00:00.000Z";
		if (isShowInputTime === false) {
			dispatch(
				addEvent({
					title,
					description,
					newDate,
					timeStatus: 0,
					status: "task",
				})
			);
		} else if (isShowInputTime === true) {
			const date = value.format("YYYY-MM-DD");
			const newDate = date + "T" + time + ".000Z";

			dispatch(
				addEvent({
					title,
					description,
					newDate,
					timeStatus: 1,
					status: "task",
				})
			);
		}

		setIsShowCreateModalTask(false);
		showEvent(value);
		setIsShowInputTime(false);
		setTimeout(() => {
			setTitle("");
			setDescription("");
		});
	};

	return (
		<>
			<form
				className={`fixed top-0 right-0 bottom-0 left-0 z-[999] ${
					isShowCreateModalTask ? "visible" : "invisible"
				}`}
				onClick={() => {
					setIsShowCreateModalTask(false);
					setIsShowInputTime(false);
					setDescription("");
					setTitle("");
				}}
			>
				<div
					className={`fixed left-[110px] top-[120px] h-auto w-[470px] rounded-md border border-slate-200 bg-white shadow-lg shadow-slate-400`}
					onClick={(e) => e.stopPropagation()}
				>
					<div className="create-modal__heade flex h-[35px] w-full items-center justify-end rounded-t-md bg-slate-100">
						<CloseButton
							setIsShowCreateModalEvent={setIsShowCreateModalEvent}
							setIsShowCreateModalTask={setIsShowCreateModalTask}
							setIsShowInputTime={setIsShowInputTime}
							setDescription={setDescription}
							setTitle={setTitle}
						/>
					</div>

					<div className="create-modal__body w-full">
						<div className="p-5">
							<div className="mb-5 flex w-full justify-end">
								<input
									className="w-[92%] border-0 border-b-2 text-xl text-slate-700 outline-none"
									type="text"
									placeholder="Add title"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</div>

							<NavigateButton
								isShowCreateModalTask={isShowCreateModalTask}
								setIsShowCreateModalTask={setIsShowCreateModalTask}
								setIsShowCreateModalEvent={setIsShowCreateModalEvent}
							/>

							<div className="mb-3 flex h-[50px] w-full">
								<div className="flex h-full w-[8%] items-center">
									<i className="fa-regular fa-clock" />
								</div>

								<div className="flex h-full w-[80%] cursor-pointer items-center justify-start rounded-md hover:bg-slate-100">
									<div
										className="ml-2 cursor-pointer border-slate-600 text-sm text-slate-600 hover:border-b-[1px]"
										onClick={() => {
											setIsShowCalendar(true);
										}}
									>
										<span>
											{dayName}, {monthName} {day}
										</span>
									</div>

									<InputTimes
										time={time}
										setTime={setTime}
										isShowInputTime={isShowInputTime}
									/>
								</div>

								<TimeButton
									setIsShowInputTime={setIsShowInputTime}
									isShowInputTime={isShowInputTime}
								/>
							</div>

							<div className="flex w-full">
								<div className="flex w-[8%] items-center">
									<i className="fa-solid fa-align-left" />
								</div>

								<div className="flex w-[92%] justify-center rounded-md bg-slate-100">
									<textarea
										className="boder-0 my-2 h-[100px] w-[95%] bg-transparent text-sm text-slate-600 outline-none"
										placeholder="Add description"
										value={description}
										onChange={(e) => setDescription(e.target.value)}
									></textarea>
								</div>
							</div>
						</div>
					</div>

					<div className="create-modal__footer flex h-[60px] w-full items-center justify-end">
						<div
							className="hover: mr-4 cursor-pointer rounded-md bg-blue-500 py-2 px-6 text-sm text-sky-100 hover:opacity-90"
							type="submit"
							onClick={() => handleSave()}
						>
							Save
						</div>
					</div>
				</div>
			</form>

			<div
				className={`fixed top-0 right-0 left-0 bottom-0 z-[9999] ${
					isShowCalendar ? "visible" : "invisible"
				}`}
				onClick={() => {
					setIsShowCalendar(false);
				}}
			>
				<div
					className={`fixed top-[320px] left-[190px] rounded-md border border-slate-200 bg-white pl-3 pt-3 pb-3 shadow-md shadow-slate-300`}
					onClick={(e) => e.stopPropagation()}
				>
					<CalendarSidebar
						sidebarValue={value}
						setSidebarValue={setValue}
						setMainValue={setMainValue}
						setIsShowCalendar={setIsShowCalendar}
					/>
				</div>
			</div>
		</>
	);
}

export default CreateModalTask;
