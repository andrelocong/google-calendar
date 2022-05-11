import { useEffect, useState } from "react";
import { useCalendarMonthHook } from "./calendar-month.hook";
import DetailEvent from "./detail-event";
import CreateModalEvent from "../components/sidebars/create-modal.jsx/create-modal.event";
import CreateModalTask from "../components/sidebars/create-modal.jsx/create-modal.task";
import { bigEvent } from "./big-event.data";
import BigEvent from "./big-event.component";
import ShowEvent from "./show-event.component";
import moment from "moment";
// import PropTypes from "prop-types";

function CalendarMonth({
	sidebarDate,
	setSidebarDate,
	mainDate,
	setMainDate,
	mainTime,
	setMainTime,
	isShowInputTime,
	setIsShowInputTime,
}) {
	const [calendar, setCalendar] = useState([]);
	const [isShowDetailEvent, setIsShowDetailEvent] = useState(false);
	const [isShowCreateModalEvent, setIsShowCreateModalEvent] = useState(false);
	const [isShowCreateModalTask, setIsShowCreateModalTask] = useState(false);
	const [isShowCalendar, setIsShowCalendar] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const {
		date,
		dayStylesHome,
		dayName,
		isBigEvent,
		eventList,
		eventValue,
		handleShowDetailEvent,
	} = useCalendarMonthHook(mainDate);

	useEffect(() => {
		setCalendar(date);
		// eslint-disable-next-line
	}, [mainDate]);

	return (
		<div className="calendar-home relative w-full">
			<DetailEvent
				isShowDetailEvent={isShowDetailEvent}
				setIsShowDetailEvent={setIsShowDetailEvent}
				eventValue={eventValue}
			/>

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
											setMainDate(day);
											setSidebarDate(day);
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
													{eventList.map((event, _index) => {
														if (
															moment(event.newDate).format("YYYY-MM-DD") ===
															day.format("YYYY-MM-DD")
														) {
															const time = moment(event.newDate).format("LT");
															return (
																<ShowEvent
																	key={_index}
																	time={time}
																	event={event}
																	eventStatus={event.status}
																	eventTimeStatus={event.timeStatus}
																	eventTitle={event.title}
																	setIsShowDetailEvent={setIsShowDetailEvent}
																	handleShowDetailEvent={handleShowDetailEvent}
																/>
															);
														}
														return null;
													})}
												</div>

												{bigEvent.map((event, _index) => {
													if (isBigEvent(event, day)) {
														return (
															<BigEvent key={_index} eventName={event.name} />
														);
													}
													return null;
												})}
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

// CalendarMonth.propTypes = {
// 	mainDate: PropTypes.object,
// 	setMainDate: PropTypes.object,
// 	setSidebarDate: PropTypes.object,
// 	sidebarDate: PropTypes.object,
// 	mainTime: PropTypes.object,
// 	setMainTime: PropTypes.object,
// 	isShowInputTime: PropTypes.bool,
// 	setIsShowInputTime: PropTypes.bool,
// };

export default CalendarMonth;
