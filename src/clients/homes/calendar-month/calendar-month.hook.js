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

	return { date, dayName, dayStylesHome };
};
