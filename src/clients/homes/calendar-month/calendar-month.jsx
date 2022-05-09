import { useEffect, useState } from "react";
import { useCalendarMonthHook } from "./calendar-month.hook";
import { useShowEvents } from "./show-event.hook";
import DetailEvent from "./detail-event";
import CreateModalEvent from "../components/sidebars/create-modal.jsx/create-modal.event";
import CreateModalTask from "../components/sidebars/create-modal.jsx/create-modal.task";

function CalendarHome(props) {
	const sidebarValue = props.sidebarValue;
	const setSidebarValue = props.setSidebarValue;
	const mainValue = props.value;
	const setMainValue = props.setValue;
	const time = props.time;
	const setTime = props.setTime;
	const isShowInputTime = props.isShowInputTime;
	const setIsShowInputTime = props.setIsShowInputTime;

	const [calendar, setCalendar] = useState([]);
	const [isShowDetailEvent, setIsShowDetailEvent] = useState(false);
	const [isShowCreateModalEvent, setIsShowCreateModalEvent] = useState(false);
	const [isShowCreateModalTask, setIsShowCreateModalTask] = useState(false);
	const [isShowCalendar, setIsShowCalendar] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const { date, dayStylesHome, dayName, showBigEvent } = useCalendarMonthHook(
		mainValue,
		setMainValue
	);

	const { showEvent, eventValue } = useShowEvents(setIsShowDetailEvent);

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
				time={time}
				setTime={setTime}
				isShowInputTime={isShowInputTime}
				setIsShowInputTime={setIsShowInputTime}
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
				time={time}
				setTime={setTime}
				isShowInputTime={isShowInputTime}
				setIsShowInputTime={setIsShowInputTime}
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
												{showBigEvent(day)}
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
