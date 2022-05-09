// import { useState } from "react";

import moment from "moment";

export const useCalendarMonthHook = (value, setValue) => {
	const startDay = value.clone().startOf("month").startOf("week");
	const endDay = value.clone().endOf("month").endOf("week");
	const day = startDay.clone().subtract(1, "day");
	const date = [];
	const dayName = value._locale._weekdaysShort;

	while (day.isBefore(endDay, "day")) {
		date.push(
			Array(7)
				.fill(0)
				.map(() => day.add(1, "day").clone())
		);
	}

	const dayStylesHome = (day) => {
		return day.isSame(new Date(), "day")
			? "bg-sky-600 text-white"
			: "hover:bg-slate-200" && day.isBefore(value, "month")
			? "text-slate-300 hover:bg-slate-200"
			: "text-black hover:bg-slate-200" && day.isAfter(value, "month")
			? "text-slate-300 hover:bg-slate-200"
			: "text-black hover:bg-slate-200";
	};

	const bigEvent = [
		{
			date: "2022-05-01T00:00:00.000Z",
			name: "Hari Buruh Internasional",
		},
		{
			date: "2022-05-02T00:00:00.000Z",
			name: "Hari Idul Fitri",
		},
		{
			date: "2022-05-03T00:00:00.000Z",
			name: "Hari Idul Fitri",
		},
		{
			date: "2022-05-16T00:00:00.000Z",
			name: "Hari Raya Waisak",
		},
		{
			date: "2022-05-26T00:00:00.000Z",
			name: "Kenaikan Isa Al Masih",
		},
		{
			date: "2022-06-01T00:00:00.000Z",
			name: "Hari Lahir Pancasila",
		},
	];

	const showBigEvent = (day) => {
		const newEvent = bigEvent.map((events, index) => {
			if (
				moment(events.date).format("YYYY-MM-DD") === day.format("YYYY-MM-DD")
			) {
				return (
					<div
						className="relative flex h-[20px] w-[95%] items-center overflow-hidden rounded-md bg-green-600"
						key={index}
					>
						<div className="w-[300px] pl-2 text-xs text-white">
							{events.name}
						</div>
					</div>
				);
			} else {
				return null;
			}
		});

		return newEvent;
	};

	return { date, dayName, dayStylesHome, showBigEvent };
};
