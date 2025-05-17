import { ChartCardWrapper } from "@/components/ui/ChartCardWrapper";
import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from "recharts";

const data = [
	{ day: "Mon", value: 50 },
	{ day: "Tue", value: 35 },
	{ day: "Wed", value: 55 },
	{ day: "Thu", value: 38 },
	{ day: "Fri", value: 58 },
	{ day: "Sat", value: 22 },
	{ day: "Sun", value: 75 },
];

const ThisWeeksIncomeContent = () => (
	<div className="w-full h-64 pt-4">
		<ResponsiveContainer width="100%" height="100%">
			<LineChart data={data}>
				<CartesianGrid strokeDasharray="0" stroke="#EAECF0" horizontal={true} vertical={false} />
				<XAxis
					dataKey="day"
					stroke="#667085"
          tickLine={false}
					tick={{ fontSize: 12, fontFamily: "Satoshi" }}
				/>
				<YAxis
					stroke="#667085"
					tick={{ fontSize: 12, fontFamily: "Satoshi" }}
					tickLine={false}
					axisLine={false}
				/>
				<Tooltip />
				<Line
					type="monotone"
					dataKey="value"
					stroke="#17B26A"
					strokeWidth={3}
					dot={false}
				/>
			</LineChart>
		</ResponsiveContainer>
	</div>
);

const ThisWeeksIncome = () => (
	<ChartCardWrapper title="This Week's Income" content={<ThisWeeksIncomeContent />} />
);

export default ThisWeeksIncome;
