function NavigateButton({
	isShowCreateModalEvent,
	setIsShowCreateModalEvent,
	isShowCreateModalTask,
	setIsShowCreateModalTask,
}) {
	return (
		<div className="mb-5 flex w-full justify-end">
			<div className="flex w-[92%] justify-start">
				<div
					className={`mr-2 cursor-pointer rounded-md py-2 px-3 text-sm ${
						isShowCreateModalEvent
							? "bg-sky-100 text-sky-800 hover:bg-sky-200"
							: "bg-slate-100 text-slate-800 hover:bg-slate-200"
					}`}
					onClick={() => {
						setIsShowCreateModalEvent(true);
						setIsShowCreateModalTask(false);
					}}
				>
					Event
				</div>

				<div
					className={`mr-2 cursor-pointer rounded-md py-2 px-3 text-sm ${
						isShowCreateModalTask
							? "bg-sky-100 text-sky-800 hover:bg-sky-200"
							: "bg-slate-100 text-slate-800 hover:bg-slate-200"
					}`}
					onClick={() => {
						setIsShowCreateModalEvent(false);
						setIsShowCreateModalTask(true);
					}}
				>
					Task
				</div>
			</div>
		</div>
	);
}

export default NavigateButton;
