import CalendarIcon from "@/assets/images/calendar.png";

const Welcome = () => {
	return (
		<div className="flex justify-between items-start mt-2 mb-[13px] w-full text-[#121212] pr-5">
			<div className="flex flex-col gap-1.5">
				<h4 className="leading-6 tracking-normal text-lg font-bold">
					Hi Nazeer, what would you like to do today?
				</h4>
				<p className="tracking-normal text-[12px] font-medium">
					Last login:{" "}
					<span className="font-normal ">26/11/2024 14:39:58</span>
				</p>
			</div>
			<div className="flex items-center gap-2 text-[11px] text-[#121212] rounded-[4px] px-[13px] py-2 border border-[#D0D5DD]">
				<div className="flex gap-1 items-center">
					<button type="button" className="cursor-pointer">
						<img
							src={CalendarIcon}
							alt="notification"
							className="w-[14px] h-[14px]"
						/>
					</button>
					<div className=" border-r border-r-gray-200 pr-2">
						Today
					</div>
					<p>11 Nov 2024</p>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
