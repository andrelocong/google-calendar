import profile from "../../../img/photo-1622548331053-105252394.jpeg";

function Navbar(props) {
	return (
		<nav className="h-[4rem] w-full border-b-[1px] border-slate-200">
			<div className="flex h-full items-center justify-between p-2">
				<div className="flex w-[350px] justify-start">
					<div
						className="mr-2 flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full hover:bg-slate-200"
						onClick={() => {
							props.setIsShowSidebar(!props.isShowSidebar);
							props.setIsShowCreate(false);
						}}
					>
						<i className="fa-solid fa-bars text-slate-500" />
					</div>
					<h1 className="flex items-center text-2xl">Calendar</h1>
				</div>

				<div className="flex w-full justify-between">
					<div className="flex">
						<div className="mr-5 flex h-full items-center">
							<div className="mr-8 flex h-[40px] w-[68px] cursor-pointer items-center justify-center rounded-md border-[1px] text-sm hover:bg-slate-200">
								Today
							</div>

							<div className="mr-1 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full hover:bg-slate-200">
								<i className="fa-solid fa-angle-left text-slate-500" />
							</div>

							<div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full hover:bg-slate-200">
								<i className="fa-solid fa-angle-right text-slate-500" />
							</div>
						</div>

						<div className="flex h-full items-center">
							<h1 className="text-2xl text-slate-700">May 1, 2022</h1>
						</div>
					</div>

					<div className="flex">
						<div className="flex h-full items-center">
							<div className="mr-2 flex h-[40px] w-[40px] items-center justify-center rounded-full hover:bg-slate-200">
								<i className="fa-solid fa-magnifying-glass text-slate-500" />
							</div>

							<div className="mr-2 flex h-[40px] w-[40px] items-center justify-center rounded-full hover:bg-slate-200">
								<i className="fa-regular fa-circle-question text-xl text-slate-500" />
							</div>

							<div className="mr-2 flex h-[40px] w-[40px] items-center justify-center rounded-full hover:bg-slate-200">
								<i className="fa-solid fa-gear text-lg text-slate-500" />
							</div>
						</div>

						<div className="flex h-[40px] w-[68px] cursor-pointer items-center justify-center rounded-md border-[1px] text-sm hover:bg-slate-200">
							Day
						</div>
					</div>
				</div>

				<div className="flex h-full w-[200px] items-center justify-end">
					<div className="mr-2 flex h-[45px] w-[45px] items-center justify-center rounded-full hover:bg-slate-200">
						<i className="fa-solid fa-bars text-slate-500" />
					</div>

					<div className="mr-3 flex h-[45px] w-[45px] items-center justify-center rounded-full hover:bg-slate-200">
						<img
							className="h-[35px] w-[35px] rounded-full object-cover object-center"
							src={profile}
							alt="profile"
						/>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
