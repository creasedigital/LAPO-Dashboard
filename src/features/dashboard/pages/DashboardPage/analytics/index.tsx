import CardStatusDistribution from "./CardStatusDistribution"
import MonthlyIssuance from "./MonthlyIssuance"
import RecentCardRequests from "./RecentCardRequests"
import ThisWeeksIncome from "./ThisWeeksIncome"
import AnalyticsCards from "./AnalyticsCards"

const Analytics = () => {
  return (
		<div>
			<header className="flex w-full items-center gap-4">
				<h4 className="leading-[27.44px] tracking-normal text-[18px] font-bold my-2.5">
					Analytics
				</h4>
				<div className=" flex-1 border-[0.38px] border-[#D0D5DD]" />
			</header>
			<div className="mb-2">
				<AnalyticsCards />
			</div>
			<div className="flex w-full gap-2 space-y-2">
				<MonthlyIssuance />
				<RecentCardRequests />
			</div>
			<div className="flex w-full gap-2 space-y-2">
				<ThisWeeksIncome />
        <div className="pt-2">
				<CardStatusDistribution />
        </div>
			</div>
		</div>
  );
}

export default Analytics