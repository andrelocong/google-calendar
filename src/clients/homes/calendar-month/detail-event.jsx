import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../../../stores/reducers/event.reducer";

function DetailEvent({ isShowDetailEvent, setIsShowDetailEvent, eventValue }) {
	const dispatch = useDispatch();

	const deleteDataEvent = () => {
		dispatch(deleteEvent(eventValue.id));
		setIsShowDetailEvent(false);
	};

	const date = moment(eventValue.value).format("LL");
	const time = moment(eventValue.value).format("LT");

	const showTime = () => {
		if (eventValue.timeStatus === 0) {
			return null;
		} else if (eventValue.timeStatus === 1) {
			return time;
		}
	};

	const showDescription = () => {
		if (eventValue.status === "task") {
			return (
				<div className={`flex w-full`}>
					<div className="flex w-[20%] items-center justify-center">
						<i className="fa-solid fa-align-left text-slate-700" />
					</div>

					<div className="w-[75%] text-sm text-slate-700">
						{eventValue.description}
					</div>
				</div>
			);
		} else {
			return null;
		}
	};

	return (
		<div
			className={`absolute top-0 right-0 bottom-0 left-0 z-[99999] ${
				isShowDetailEvent ? "visible" : "invisible"
			}`}
			onClick={() => setIsShowDetailEvent(false)}
		>
			<div
				className={`absolute top-[100px] left-[300px] h-auto w-[400px] rounded-xl border border-slate-300 bg-white shadow-lg shadow-slate-400`}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="detail-event__head flex h-[50px] w-full items-center justify-end">
					<div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full hover:bg-slate-200">
						<i className="fa-solid fa-pencil text-slate-500" />
					</div>

					<div
						className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full hover:bg-slate-200"
						onClick={() => {
							deleteDataEvent();
						}}
					>
						<i className="fa-regular fa-trash-can text-slate-500" />
					</div>

					<div
						className="ml-3 mr-2 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full hover:bg-slate-200"
						onClick={() => setIsShowDetailEvent(false)}
					>
						<i className="fa-solid fa-xmark text-xl text-slate-500" />
					</div>
				</div>

				<div className="detail-event__body w-full py-5">
					<div className="mb-5 flex w-full">
						<div className="flex w-[20%] items-center justify-center">
							<div
								className={`h-[15px] w-[15px] rounded-md ${
									eventValue.status === "task" ? "bg-indigo-500" : "bg-sky-500"
								}`}
							></div>
						</div>

						<div className="w-[80%]">
							<h2 className="text-xl text-slate-700">{eventValue.title}</h2>
							<div className="flex">
								<p className="text-sm tracking-wide text-slate-700">{date}</p>
								<p className="ml-3 text-sm tracking-wide text-slate-700">
									{showTime()}
								</p>
							</div>
						</div>
					</div>

					{showDescription()}
				</div>
			</div>
		</div>
	);
}

export default DetailEvent;
