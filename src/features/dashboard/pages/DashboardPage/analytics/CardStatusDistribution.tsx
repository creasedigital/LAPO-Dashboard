import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
} from "recharts";
import { ChartCardWrapper } from "@/components/ui/ChartCardWrapper";

const data = [
	{ name: "Expired", value: 360, color: "#FDB022" },
	{ name: "Lost", value: 60, color: "#F04438" },
	{ name: "Blocked", value: 80, color: "#9E77ED" },
	{ name: "Inactive", value: 120, color: "#004EEB" },
	{ name: "Active", value: 1830, color: "#0694A2" },
];

const CardStatusDistributionContent = () => {
	const total = data.reduce((sum, item) => sum + item.value, 0);

	// Sort legend by value descending
	const sortedLegend = [...data].sort((a, b) => b.value - a.value);

	return (
		<div className="w-full h-[260px] relative flex items-center justify-center">
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						data={data} // chart uses original order
						dataKey="value"
						innerRadius={95}
						outerRadius={105}
						startAngle={90}
						endAngle={-270}
						cornerRadius={10}
						paddingAngle={1}
						stroke="none"
					>
						{data.map((entry) => (
							<Cell key={`cell-${entry}`} fill={entry.color} />
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>

			<div className="absolute text-center">
				<p className="font-[Satoshi] font-normal text-[14px] leading-[20px] text-[#667085]">
					Total Cards
				</p>
				<p className="font-[Satoshi] font-semibold text-[32px] leading-[40px] text-[#101828]">
					{total.toLocaleString()}
				</p>
			</div>

			<div className="absolute -bottom-0 w-full flex justify-center gap-4 flex-wrap mt-4">
				{sortedLegend.map((item) => (
					<div
						key={item.name}
						className="flex items-center gap-1 text-sm text-[#667085] font-medium"
					>
						<span
							className="w-3 h-3 rounded-full"
							style={{ backgroundColor: item.color }}
						/>
						{item.name}
					</div>
				))}
			</div>
		</div>
	);
};

const CardStatusDistribution = () => (
	<ChartCardWrapper
		title="Card Status Distribution"
		content={<CardStatusDistributionContent />}
	/>
);

export default CardStatusDistribution;
