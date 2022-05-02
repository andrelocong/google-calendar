import moment from "moment";

export const useNavbarHook = (value, setValue, setSidebarValue) => {
	const monthName = value.format("MMMM");
	const year = value.format("YYYY");

	const handleToday = () => {
		setValue(moment(new Date(), "day"));
		setSidebarValue(moment(new Date(), "day"));
	};

	const handlePrev = () => {
		setValue(value.clone().subtract(1, "month"));
		setSidebarValue(value.clone().subtract(1, "month"));
	};

	const handleNext = () => {
		setValue(value.clone().add(1, "month"));
		setSidebarValue(value.clone().add(1, "month"));
	};

	return { handleToday, handleNext, handlePrev, monthName, year };
};
