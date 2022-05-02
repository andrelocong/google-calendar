import { useEffect, useState } from "react";
import { useCalendarMonthHook } from "./calendar-month.hook";

function CalendarHome(props) {
	const [calendar, setCalendar] = useState([]);

	const { date, dayStylesHome, dayName } = useCalendarMonthHook(
		props.value,
		props.setValue
	);

	useEffect(() => {
		setCalendar(date);
		// eslint-disable-next-line
	}, [props.value]);

	return (
		<div className="calendar-home w-full">
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
									>
										<div className="flex w-full justify-center">
											<div
												className={`h-[30px] w-[30px] cursor-pointer rounded-full pt-2 text-center text-xs ${dayStylesHome(
													day
												)}`}
											>
												{day.format("D").toString()}
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
