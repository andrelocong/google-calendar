const BigEvent = ({ eventName }) => {
	return (
		<div className="relative flex h-[20px] w-[95%] items-center overflow-hidden rounded-md bg-green-600">
			<div className="w-[300px] pl-2 text-xs text-white">{eventName}</div>
		</div>
	);
};

export default BigEvent;
