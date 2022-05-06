import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../../../stores/reducers/event.reducer";

function DetailEvent(props) {
	const isShowDetailEvent = props.isShowDetailEvent;
	const setIsShowDetailEvent = props.setIsShowDetailEvent;
	const eventValue = props.eventValue;

	const dispatch = useDispatch();

	const deleteDataEvent = () => {
		dispatch(deleteEvent(eventValue.value));
		setIsShowDetailEvent(false);
	};

	const date = moment(eventValue.value).format("LL");
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
					<div className="flex w-full">
						<div className="flex w-[20%] items-center justify-center">
							<div className="h-[15px] w-[15px] rounded-md bg-sky-700"></div>
						</div>

						<div className="w-[80%]">
							<h2 className="text-xl text-slate-700">{eventValue.title}</h2>
							<p className="text-sm tracking-wide text-slate-700">{date}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailEvent;
