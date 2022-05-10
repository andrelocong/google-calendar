const ShowEvent = ({
	time,
	event,
	eventStatus,
	eventTimeStatus,
	eventTitle,
	handleShowDetailEvent,
	setIsShowDetailEvent,
}) => {
	return (
		<div
			className="relative mb-1 flex h-[20px] w-[95%] cursor-pointer items-center overflow-hidden rounded-md hover:bg-slate-200"
			onClick={() => {
				handleShowDetailEvent(event);
				setIsShowDetailEvent(true);
			}}
		>
			<div
				className={`ml-2 h-[10px] w-[10px] rounded-full ${
					eventStatus === "task" ? "bg-indigo-500" : "bg-sky-500"
				}`}
			></div>
			<div
				className={`ml-1 w-[60px] text-xs text-slate-800 ${
					eventTimeStatus === 1 ? "visible relative" : "invisible absolute"
				}`}
			>
				{time}
			</div>
			<div className="w-[50%]">
				<div className="ml-1 w-[300px] text-xs font-semibold text-slate-800">
					{eventTitle}
				</div>
			</div>
		</div>
	);
};

export default ShowEvent;
