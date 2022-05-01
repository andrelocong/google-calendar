import profile from "../../img/photo-1622548331053-105252394.jpeg";

function Navbar() {
	return (
		<nav className="w-full h-[4rem] border-b-[1px] border-slate-200">
			<div className="p-2 h-full flex items-center justify-between">
				<div className="flex justify-start w-[350px]">
					<div className="w-[48px] h-[48px] rounded-full hover:bg-slate-200 flex items-center justify-center mr-2">
						<i className="fa-solid fa-bars text-slate-500" />
					</div>
					<h1 className="text-2xl flex items-center">Calendar</h1>
				</div>

				<div className="w-full flex justify-between">
					<div className="flex">
						<div className="h-full flex items-center mr-5">
							<div className="w-[68px] h-[40px] mr-8 cursor-pointer flex justify-center items-center rounded-md border-[1px] text-sm hover:bg-slate-200">
								Today
							</div>

							<div className="w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-slate-200 mr-1 cursor-pointer">
								<i className="fa-solid fa-angle-left text-slate-500" />
							</div>

							<div className="w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-slate-200 cursor-pointer">
								<i className="fa-solid fa-angle-right text-slate-500" />
							</div>
						</div>

						<div className="h-full flex items-center">
							<h1 className="text-2xl text-slate-700">May 1, 2022</h1>
						</div>
					</div>

					<div className="flex">
						<div className="flex h-full items-center">
							<div className="w-[40px] h-[40px] rounded-full hover:bg-slate-200 flex justify-center items-center mr-2">
								<i className="fa-solid fa-magnifying-glass text-slate-500" />
							</div>

							<div className="w-[40px] h-[40px] rounded-full hover:bg-slate-200 flex justify-center items-center mr-2">
								<i className="fa-regular fa-circle-question text-slate-500 text-xl" />
							</div>

							<div className="w-[40px] h-[40px] rounded-full hover:bg-slate-200 flex justify-center items-center mr-2">
								<i className="fa-solid fa-gear text-slate-500 text-lg" />
							</div>
						</div>

						<div className="w-[68px] h-[40px] cursor-pointer flex justify-center items-center rounded-md border-[1px] text-sm hover:bg-slate-200">
							Day
						</div>
					</div>
				</div>

				<div className="flex justify-end w-[200px] h-full items-center">
					<div className="w-[45px] h-[45px] flex justify-center items-center hover:bg-slate-200 rounded-full mr-2">
						<i className="fa-solid fa-bars text-slate-500" />
					</div>

					<div className="w-[45px] h-[45px] mr-3 rounded-full hover:bg-slate-200 flex justify-center items-center">
						<img
							className="object-cover object-center w-[35px] h-[35px] rounded-full"
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
