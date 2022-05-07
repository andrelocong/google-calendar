import { useState } from "react";
import moment from "moment";
import { store } from "../../../stores";

export const useShowEvents = (setIsShowDetailEvent) => {
	const events = store.getState().event.events;

	const [eventValue, setEventValue] = useState({
		title: "",
		value: "",
	});

	const handleShowDetailEvent = (evn) => {
		setEventValue({
			title: evn.title,
			value: evn.newDate,
			timeStatus: evn.timeStatus,
		});
	};

	const showEvent = (day) => {
		const newEvent = events.map((evn, ind) => {
			if (
				moment(evn.newDate).format("YYYY-MM-DD") === day.format("YYYY-MM-DD")
			) {
				const time = moment(evn.newDate).format("LT");
				return (
					<div
						className="relative flex h-[20px] w-[95%] cursor-pointer items-center overflow-hidden rounded-md hover:bg-slate-200"
						key={ind}
						onClick={() => {
							handleShowDetailEvent(evn);
							setIsShowDetailEvent(true);
						}}
					>
						<div className="ml-2 h-[10px] w-[10px] rounded-full bg-sky-700"></div>
						<div
							className={`ml-1 w-[60px] text-xs text-slate-800 ${
								evn.timeStatus === 1 ? "visible relative" : "invisible absolute"
							}`}
						>
							{time}
						</div>
						<div className="w-[50%]">
							<div className="ml-1 w-[300px] text-xs font-semibold text-slate-800">
								{evn.title}
							</div>
						</div>
					</div>
				);
			} else {
				return null;
			}
		});

		return newEvent;
	};

	return { showEvent, eventValue };
};
