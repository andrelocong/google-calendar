import moment from "moment";

export const useNavbarHook = (mainDate, setMainDate, setSidebarDate) => {
	const monthName = mainDate.format("MMMM");
	const year = mainDate.format("YYYY");

	const handleToday = () => {
		setMainDate(moment(new Date(), "day"));
		setSidebarDate(moment(new Date(), "day"));
	};

	const handlePrev = () => {
		setMainDate(mainDate.clone().subtract(1, "month"));
		setSidebarDate(mainDate.clone().subtract(1, "month"));
	};

	const handleNext = () => {
		setMainDate(mainDate.clone().add(1, "month"));
		setSidebarDate(mainDate.clone().add(1, "month"));
	};

	return { handleToday, handleNext, handlePrev, monthName, year };
};
