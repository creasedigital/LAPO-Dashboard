import CardCheck from "@/assets/images/credit-card-check.png";
import CardEdit from "@/assets/images/credit-card-edit-p.png";
import BankNote from "@/assets/images/bank-note.png";
import HourGlass from "@/assets/images/hourglass-03.png";
import { AnalyticsCard } from "@/components/ui/AnalyticsCard";
import ArrowRightUp from "@/assets/images/arrow-narrow-up-right.png";
import Caution from "@/assets/images/alert-circle.png";

const analyticsType = [
	{ title: "Total Active Cards", icon: CardCheck, content: <ActiveCards /> },
	{
		title: "Total Personalized Cards",
		icon: CardEdit,
		content: <PersonalizedCards />,
	},
	{ title: "Today's Revenue", icon: BankNote, content: <TodaysRevenue /> },
	{
		title: "Pending Requests",
		icon: HourGlass,
		content: <PendingRequests />,
	},
];

const AnalyticsCards = () => {
	return (
		<div className="flex gap-2">
			{analyticsType.map((item) => (
				<AnalyticsCard
					key={item.title}
					icon={item.icon}
					title={item.title}
					content={item.content}
				/>
			))}
		</div>
	);
};

function ActiveCards() {
	return (
		<div className="flex w-full justify-between items-center">
			<h2 className="font-bold text-2xl tracking-normal">26,478</h2>
			<div className="flex items-center gap-2">
				<button
					type="button"
					className="cursor-pointer flex gap-[3px] items-center justify-center bg-[#EFFAF6] rounded-[4px] px-1.5 py-1"
				>
					<img
						src={ArrowRightUp}
						alt="access type"
						className="w-3 h-3"
					/>
					<span className="text-[#008C4A] text-[11px] font-medium">
						+9%
					</span>
				</button>
				<span className="text-[#0000008F] font-normal text-[12px] leading-4.5 tracking-normal ">
					this month
				</span>
			</div>
		</div>
	);
}

function PersonalizedCards() {
	return (
		<div className="flex w-full justify-between items-center">
			<h2 className="font-bold text-2xl tracking-normal">15,703</h2>
			<div className="flex items-center gap-2">
				<button
					type="button"
					className="cursor-pointer flex gap-[3px] items-center justify-center bg-[#EFFAF6] rounded-[4px] px-1.5 py-1"
				>
					<img
						src={ArrowRightUp}
						alt="access type"
						className="w-3 h-3"
					/>
					<span className="text-[#008C4A] text-[11px] font-medium">
						+9%
					</span>
				</button>
				<span className="text-[#0000008F] font-normal text-[12px] leading-4.5 tracking-normal ">
					this month
				</span>
			</div>
		</div>
	);
}

function TodaysRevenue() {
	return (
		<div className="flex w-full justify-between items-center">
			<h2 className="font-bold text-2xl tracking-normal">₦9.3M</h2>
			<div className="flex items-center gap-2">
				<button
					type="button"
					className="cursor-pointer flex gap-[3px] items-center justify-center bg-[#EFFAF6] rounded-[4px] px-1.5 py-1"
				>
					<img
						src={ArrowRightUp}
						alt="access type"
						className="w-3 h-3"
					/>
					<span className="text-[#008C4A] text-[11px] font-medium">
						+6%
					</span>
				</button>
				<span className="text-[#0000008F] font-normal text-[12px] leading-4.5 tracking-normal ">
					vs yesterday
				</span>
			</div>
		</div>
	);
}

function PendingRequests() {
	return (
		<div className="flex w-full justify-between items-center">
			<h2 className="font-bold text-2xl tracking-normal">38</h2>
			<div className="flex items-center gap-2">
				<button
					type="button"
					className="cursor-pointer flex items-center justify-center bg-transparent"
				>
					<img src={Caution} alt="access type" className="w-3 h-3" />
				</button>
				<span className="text-[#E78020] font-normal text-[12px] leading-4.5 tracking-normal ">
					Requires attention
				</span>
			</div>
		</div>
	);
}

export default AnalyticsCards;
