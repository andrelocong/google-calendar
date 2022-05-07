import moment from "moment";

function InputTimes(props) {
	const time = props.time;
	const setTime = props.setTime;
	const isShowInputTime = props.isShowInputTime;

	const startTime = moment().clone().startOf("day");
	const endTime = moment().clone().endOf("day");
	const hours = [];

	while (startTime.isBefore(endTime, "hour")) {
		hours.push(startTime.add(1, "hour").clone());
	}

	return (
		<div className={`flex ${isShowInputTime ? "visible" : "invisible"}`}>
			<span className="ml-3">-</span>
			<div className="ml-3 border-slate-600 hover:border-b-[1px]">
				<select
					className="cursor-pointer border-0 bg-transparent text-sm text-slate-600 outline-none"
					value={time}
					onChange={(e) => setTime(e.target.value)}
				>
					{hours.map((hour, index) => {
						return (
							<option value={hour.format("hh:mm:ss")} key={index}>
								{hour.format("LT")}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
}

export default InputTimes;
