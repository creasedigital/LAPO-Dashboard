import { HomeIcon } from "@/icons";
import { Link } from "react-router";
import SearchIcon from "@/assets/images/search-md.png";
import NotificationIcon from "@/assets/images/bell-01.png";
import UserIcon from "@/assets/images/user-01.png";

const TopNavigation = () => {
	return (
		<header
			className="flex justify-between items-center h-[48px] pl-5  border border-[#DEDEDF] gap-4 flex-wrap lg:flex-nowrap w-full lg:[width:calc(100vw-230px)]"
			// style={{ width: "calc(100vw - 230px)" }}
		>
			<div className="flex items-center gap-2">
				<HomeIcon />
				<Link to="/" className="text-xs tracking-[0%] font-medium">
					Dashboard
				</Link>
			</div>
			<div className="flex gap-7 items-center">
				{/* Border moved here */}
				<div
					className="flex items-center gap-2 border h-8 border-[#1018280D] rounded-full px-2 py-1"
					style={{ width: "200px" }}
				>
					<img
						src={SearchIcon}
						alt="Search"
						className="w-4 h-4 cursor-pointer placeholder:text-[11.76px] placeholder:text-[#344054]"
					/>
					<input
						type="text"
						placeholder="Search"
						className="text-xs tracking-[0%] font-medium w-full outline-none border-none bg-transparent"
					/>
				</div>
				{/* <button type="button"></button> */}
				<button type="button" className="cursor-pointer">
					<img
						src={NotificationIcon}
						alt="notification"
						className="w-5 h-5"
					/>
				</button>
        <button type="button" className="cursor-pointer w-8 h-8 bg-[#F2F4F7] mr-5 items-center justify-center rounded-full flex">
					<img src={UserIcon} alt="user icon" className="w-5 h-5" />
        </button>
			</div>
		</header>
	);
};

export default TopNavigation;
