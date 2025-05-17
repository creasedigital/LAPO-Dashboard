import { ChartCardWrapper } from "@/components/ui/ChartCardWrapper";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";

const data = [
	{ month: "May", Personalized: 10, Instant: 40 },
	{ month: "Jun", Personalized: 20, Instant: 50 },
	{ month: "Jul", Personalized: 10, Instant: 20 },
	{ month: "Aug", Personalized: 10, Instant: 50 },
	{ month: "Sep", Personalized: 12, Instant: 40 },
	{ month: "Oct", Personalized: 18, Instant: 60 },
	{ month: "Nov", Personalized: 12, Instant: 55 },
];

const COLORS = {
	Personalized: "#004EEB", // Dark Blue
	Instant: "#D1E9FF", // Light Blue
};

const CustomLegend = () => (
	<div className="flex gap-4 px-4 pb-2 pt-1">
		<div className="flex items-center gap-1 text-xs text-[#475467] font-satoshi">
			<span className="w-2 h-2 rounded-full" style={{ background: COLORS.Personalized }} />
			Personalized
		</div>
		<div className="flex items-center gap-1 text-xs text-[#475467] font-satoshi">
			<span className="w-2 h-2 rounded-full" style={{ background: COLORS.Instant }} />
			Instant
		</div>
	</div>
);

const MonthlyIssuanceChartContent = () => (
	<div className="w-full h-64 pt-4">
		<ResponsiveContainer width="100%" height="100%">
			<BarChart data={data} stackOffset="sign">
				<XAxis
					dataKey="month"
					stroke="#667085"
					tick={{ fontSize: 12, fontFamily: "Satoshi" }}
				/>
				<YAxis
					stroke="#667085"
					tick={{ fontSize: 12, fontFamily: "Satoshi" }}
					tickLine={false}
					axisLine={false}
				/>
				<Tooltip />
				<Legend content={<CustomLegend />} verticalAlign="top" />
				<Bar
					dataKey="Instant"
					stackId="a"
					fill={COLORS.Instant}
					radius={[6, 6, 0, 0]}
				/>
				<Bar
					dataKey="Personalized"
					stackId="a"
					fill={COLORS.Personalized}
					radius={[6, 6, 0, 0]}
				/>
			</BarChart>
		</ResponsiveContainer>
	</div>
);

const MonthlyIssuance = () => (
	<ChartCardWrapper title="Monthly Issuance" content={<MonthlyIssuanceChartContent />} />
);

export default MonthlyIssuance;
