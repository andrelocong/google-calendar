function CloseButton({
	setIsShowCreateModalEvent,
	setIsShowCreateModalTask,
	setIsShowInputTime,
	setDescription,
	setTitle,
}) {
	return (
		<div
			className="mr-2 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full hover:bg-slate-200"
			onClick={() => {
				setIsShowCreateModalEvent(false);
				setIsShowCreateModalTask(false);
				setIsShowInputTime(false);
				setTitle("");
				setDescription("");
			}}
		>
			<i className="fa-solid fa-xmark text-lg text-slate-600" />
		</div>
	);
}

export default CloseButton;
