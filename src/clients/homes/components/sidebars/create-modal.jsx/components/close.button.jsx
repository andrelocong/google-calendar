function CloseButton(props) {
	const setIsShowCreateModalEvent = props.setIsShowCreateModalEvent;
	const setIsShowCreateModalTask = props.setIsShowCreateModalTask;
	return (
		<div
			className="mr-2 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full hover:bg-slate-200"
			onClick={() => {
				setIsShowCreateModalEvent(false);
				setIsShowCreateModalTask(false);
			}}
		>
			<i className="fa-solid fa-xmark text-lg text-slate-600" />
		</div>
	);
}

export default CloseButton;
