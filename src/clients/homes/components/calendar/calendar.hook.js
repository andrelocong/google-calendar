export const useCalendarHook = (value, setValue) => {
	const startDay = value.clone().startOf("month").startOf("week");
	const endDay = value.clone().endOf("month").endOf("week");

	const daysName = ["S", "M", "T", "W", "T", "F", "S"];

	const day = startDay.clone().subtract(1, "day");
	const date = [];

	while (day.isBefore(endDay, "day")) {
		date.push(
			Array(7)
				.fill(0)
				.map(() => day.add(1, "day").clone())
		);
	}

	const monthName = value.format("MMMM");
	const year = value.format("YYYY");

	const handlePrev = async () => {
		setValue(value.clone().subtract(1, "month"));
	};

	const handleNext = () => {
		setValue(value.clone().add(1, "month"));
	};

	const dayStylesSidebar = (day) => {
		return day.isSame(new Date(), "day")
			? "bg-sky-600 text-white"
			: "hover:bg-slate-200" && value.isSame(day, "day")
			? "bg-sky-300 text-white"
			: "hover:bg-slate-200" && day.isBefore(value, "month")
			? "text-slate-300 hover:bg-slate-200"
			: "text-black hover:bg-slate-200" && day.isAfter(value, "month")
			? "text-slate-300 hover:bg-slate-200"
			: "text-black hover:bg-slate-200";
	};

	const dayStylesHome = (day) => {
		return day.isSame(new Date(), "day")
			? "bg-sky-600 text-white"
			: "hover:bg-slate-200" && day.isBefore(value, "month")
			? "text-slate-300 hover:bg-slate-200"
			: "text-black hover:bg-slate-200" && day.isAfter(value, "month")
			? "text-slate-300 hover:bg-slate-200"
			: "text-black hover:bg-slate-200";
	};

	return {
		date,
		daysName,
		monthName,
		year,
		handleNext,
		handlePrev,
		dayStylesSidebar,
		dayStylesHome,
	};
};
