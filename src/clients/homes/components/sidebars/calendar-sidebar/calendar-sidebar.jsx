import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMomentValue } from "../../../../../stores/reducers/moment.reducer";
import { useCalendarSidebarHook } from "./calendar-sidebar.hook";

function CalendarSidebar(props) {
	//props from sidebar.jsx & create-modal.jsx
	const value = props.sidebarValue;
	const setValue = props.setSidebarValue;
	const setMainValue = props.setMainValue;
	const setIsShowCalendar = props.setIsShowCalendar;

	const [calendar, setCalendar] = useState([]);

	const dispatch = useDispatch();

	const {
		date,
		daysName,
		monthName,
		year,
		handleNext,
		handlePrev,
		dayStylesSidebar,
	} = useCalendarSidebarHook(value, setValue);

	useEffect(() => {
		setCalendar(date);
		// eslint-disable-next-line
	}, [value]);

	return (
		<div className="mr-2 w-[230px]">
			<div className="calendar__head">
				<div className="mb-3 flex justify-between px-2">
					<span className="flex items-end text-sm">
						{monthName} {year}
					</span>

					<div className="flex">
						<div
							className="mr-1 flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full text-sm hover:bg-slate-200"
							onClick={() => handlePrev()}
						>
							<i className="fa-solid fa-angle-left text-slate-500" />
						</div>

						<div
							className="flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full text-sm hover:bg-slate-200"
							onClick={() => handleNext()}
						>
							<i className="fa-solid fa-angle-right text-slate-500" />
						</div>
					</div>
				</div>

				<div className="flex">
					{daysName.map((day, index) => {
						return (
							<div
								className={`mr-[2px] flex w-[30px] justify-center text-[11px]`}
								key={index}
							>
								{day}
							</div>
						);
					})}
				</div>
			</div>

			<div className="calendar__body">
				{calendar.map((week, index) => {
					return (
						<div key={index}>
							{week.map((day, idx) => {
								return (
									<div
										className="day relative m-0 box-border inline-block h-[32px] w-[32px] p-0 text-center text-[11px] leading-[10px]"
										key={idx}
										onClick={() => {
											setMainValue(day);
											setValue(day);
											dispatch(setMomentValue(day));
											setIsShowCalendar(false);
										}}
									>
										<div
											className={`flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-full ${dayStylesSidebar(
												day
											)}`}
										>
											{day.format("D").toString()}
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

export default CalendarSidebar;
