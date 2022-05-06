import moment from "moment";
import { useEffect, useState } from "react";
import { useCalendarMonthHook } from "./calendar-month.hook";
import { store } from "../../../stores";
import DetailEvent from "./detail-event";
import CreateModalEvent from "../components/sidebars/create-modal.jsx/create-modal.event";
import CreateModalTask from "../components/sidebars/create-modal.jsx/create-modal.task";

function CalendarHome(props) {
	const sidebarValue = props.sidebarValue;
	const setSidebarValue = props.setSidebarValue;
	const mainValue = props.value;
	const setMainValue = props.setValue;
	const [isShowDetailEvent, setIsShowDetailEvent] = useState(false);

	const events = store.getState().event.events;

	const [calendar, setCalendar] = useState([]);

	const [isShowCreateModalEvent, setIsShowCreateModalEvent] = useState(false);
	const [isShowCreateModalTask, setIsShowCreateModalTask] = useState(false);
	const [isShowCalendar, setIsShowCalendar] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const { date, dayStylesHome, dayName } = useCalendarMonthHook(
		mainValue,
		setMainValue
	);

	const [eventValue, setEventValue] = useState({
		title: "",
		value: "",
	});

	const handleShowDetailEvent = (evn) => {
		setEventValue({
			title: evn.title,
			value: evn.value,
		});
	};

	const showEvent = (day) => {
		const newEvent = events.map((evn, ind) => {
			if (moment(evn.value).format("LL") === day.format("LL")) {
				return (
					<div
						className="relative flex h-[20px] w-[90%] cursor-pointer items-center rounded-md hover:bg-slate-200"
						key={ind}
						onClick={() => {
							handleShowDetailEvent(evn);
							setIsShowDetailEvent(true);
						}}
					>
						<div className="ml-2 h-[10px] w-[10px] rounded-full bg-sky-700"></div>
						<div className="px-2 text-xs">{evn.title}</div>
					</div>
				);
			} else {
				return <div className="" key={ind}></div>;
			}
		});

		return newEvent;
	};

	useEffect(() => {
		setCalendar(date);
		// eslint-disable-next-line
	}, [props.value]);

	return (
		<div className="calendar-home relative w-full">
			<DetailEvent
				isShowDetailEvent={isShowDetailEvent}
				setIsShowDetailEvent={setIsShowDetailEvent}
				eventValue={eventValue}
				showEvent={showEvent}
			/>

			<CreateModalEvent
				isShowCreateModalEvent={isShowCreateModalEvent}
				setIsShowCreateModalEvent={setIsShowCreateModalEvent}
				setIsShowCreateModalTask={setIsShowCreateModalTask}
				isShowCalendar={isShowCalendar}
				setIsShowCalendar={setIsShowCalendar}
				value={sidebarValue}
				setValue={setSidebarValue}
				setMainValue={setMainValue}
				title={title}
				setTitle={setTitle}
				setDescription={setDescription}
				showEvent={showEvent}
			/>

			<CreateModalTask
				isShowCreateModalTask={isShowCreateModalTask}
				setIsShowCreateModalTask={setIsShowCreateModalTask}
				setIsShowCreateModalEvent={setIsShowCreateModalEvent}
				isShowCalendar={isShowCalendar}
				setIsShowCalendar={setIsShowCalendar}
				value={sidebarValue}
				setValue={setSidebarValue}
				setMainValue={setMainValue}
				title={title}
				setTitle={setTitle}
				setDescription={setDescription}
				description={description}
				showEvent={showEvent}
			/>

			<div className="calendar-home__head flex w-full">
				{dayName.map((name, index) => {
					return (
						<div
							className="h-8 w-[calc(100%/7)] border border-b-0 border-r-0 border-t-0 border-slate-200 pt-2 text-center text-xs text-slate-500"
							key={index}
						>
							{name}
						</div>
					);
				})}
			</div>
			<div className="calendar-home__body w-full">
				{calendar.map((week, index) => {
					return (
						<div key={index} className="w-full">
							{week.map((day, idx) => {
								return (
									<div
										className={`relative m-0 box-border inline-block h-[calc(87vh/5)] w-[calc(100%/7)] border border-r-0 border-slate-200 p-0 ${
											idx < 7 ? "border-t-0" : ""
										}`}
										key={idx}
										onClick={() => {
											setMainValue(day);
											setSidebarValue(day);
											setIsShowCreateModalEvent(true);
										}}
									>
										<div className="w-full">
											<div className="mb-1 flex w-full justify-center">
												<div
													className={`h-[30px] w-[30px] cursor-pointer rounded-full pt-2 text-center text-xs ${dayStylesHome(
														day
													)}`}
												>
													{day.format("D").toString()}
												</div>
											</div>
											<div className="absolute h-full w-full">
												<div onClick={(e) => e.stopPropagation()}>
													{showEvent(day)}
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default CalendarHome;
