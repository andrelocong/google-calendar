export const useCalendarSidebarHook = (sidebarDate, setSidebarDate) => {
	const startDay = sidebarDate.clone().startOf("month").startOf("week");
	const endDay = sidebarDate.clone().endOf("month").endOf("week");

	const day = startDay.clone().subtract(1, "day");
	const date = [];

	while (day.isBefore(endDay, "day")) {
		date.push(
			Array(7)
				.fill(0)
				.map(() => day.add(1, "day").clone())
		);
	}

	const daysName = ["S", "M", "T", "W", "T", "F", "S"];
	const monthName = sidebarDate.format("MMMM");
	const year = sidebarDate.format("YYYY");

	const handlePrev = () => {
		setSidebarDate(sidebarDate.clone().subtract(1, "month"));
	};

	const handleNext = () => {
		setSidebarDate(sidebarDate.clone().add(1, "month"));
	};

	const dayStylesSidebar = (day) => {
		return day.isSame(new Date(), "day")
			? "bg-sky-600 text-white"
			: "hover:bg-slate-200" && sidebarDate.isSame(day, "day")
			? "bg-sky-300 text-white"
			: "hover:bg-slate-200" && day.isBefore(sidebarDate, "month")
			? "text-slate-300 hover:bg-slate-200"
			: "text-black hover:bg-slate-200" && day.isAfter(sidebarDate, "month")
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
	};
};
