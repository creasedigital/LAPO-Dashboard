import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
} from "recharts";
import { ChartCardWrapper } from "@/components/ui/ChartCardWrapper";

const data = [
	{ name: "Active", value: 1800, color: "#0694A2" },
	{ name: "Expired", value: 400, color: "#FDB022" },
	{ name: "Inactive", value: 120, color: "#004EEB" },
	{ name: "Blocked", value: 80, color: "#9E77ED" },
	{ name: "Lost", value: 50, color: "#F04438" },
];

const CardStatusDistributionContent = () => {
	const total = data.reduce((sum, item) => sum + item.value, 0);

	return (
		<div className="w-full h-72 relative flex items-center justify-center">
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						data={data}
						dataKey="value"
						innerRadius={85}
						outerRadius={95}
						startAngle={90}
						endAngle={-270}
						cornerRadius={10}
						paddingAngle={1}
						stroke="none"
					>
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.color} />
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

			<div className="absolute bottom-2 w-full flex justify-center gap-4 flex-wrap mt-4">
				{data.map((item) => (
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
