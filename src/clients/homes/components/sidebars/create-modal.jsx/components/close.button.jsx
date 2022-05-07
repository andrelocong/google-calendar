function CloseButton(props) {
	const setIsShowCreateModalEvent = props.setIsShowCreateModalEvent;
	const setIsShowCreateModalTask = props.setIsShowCreateModalTask;
	const setDescription = props.setDescription;
	const setTitle = props.setTitle;
	return (
		<div
			className="mr-2 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full hover:bg-slate-200"
			onClick={() => {
				setIsShowCreateModalEvent(false);
				setIsShowCreateModalTask(false);
				setTitle("");
				setDescription("");
			}}
		>
			<i className="fa-solid fa-xmark text-lg text-slate-600" />
		</div>
	);
}

export default CloseButton;
