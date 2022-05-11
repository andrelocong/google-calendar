import { useState } from "react";
import moment from "moment";
import { store } from "../../../stores";

export const useCalendarMonthHook = (mainDate) => {
	const startDay = mainDate.clone().startOf("month").startOf("week");
	const endDay = mainDate.clone().endOf("month").endOf("week");
	const day = startDay.clone().subtract(1, "day");
	const date = [];
	const dayName = mainDate._locale._weekdaysShort;
	const eventList = store.getState().event.events;
	const [eventValue, setEventValue] = useState({
		id: "",
		title: "",
		description: "",
		value: "",
		timeStatus: 0,
		status: "",
	});

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
			: "hover:bg-slate-200" && day.isBefore(mainDate, "month")
			? "text-slate-300 hover:bg-slate-200"
			: "text-black hover:bg-slate-200" && day.isAfter(mainDate, "month")
			? "text-slate-300 hover:bg-slate-200"
			: "text-black hover:bg-slate-200";
	};

	const isBigEvent = (event, day) => {
		if (moment(event.date).format("YYYY-MM-DD") === day.format("YYYY-MM-DD")) {
			return true;
		}
		return false;
	};

	const handleShowDetailEvent = (event) => {
		setEventValue({
			id: event.id,
			title: event.title,
			description: event.description,
			value: event.newDate,
			timeStatus: event.timeStatus,
			status: event.status,
		});
	};

	return {
		date,
		dayName,
		dayStylesHome,
		isBigEvent,
		eventList,
		eventValue,
		handleShowDetailEvent,
	};
};
