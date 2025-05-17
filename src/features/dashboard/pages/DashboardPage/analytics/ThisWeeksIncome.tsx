import { ChartCardWrapper } from "@/components/ui/ChartCardWrapper";
import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	// Defs,
	// Filter,
	// feDropShadow,
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
				<defs>
					<filter id="lineShadow" x="-20%" y="-20%" width="140%" height="140%">
						<feDropShadow
							dx="0"
							dy="2.07"
							stdDeviation="2"
							floodColor="#01A4AF"
							floodOpacity="0.47"
						/>
					</filter>
				</defs>
				<CartesianGrid
					strokeDasharray="0"
					stroke="#EAECF0"
					horizontal={true}
					vertical={false}
				/>
				<XAxis
					dataKey="day"
					stroke="#667085"
					tickLine={false}
					axisLine={false}
					tick={{ fontSize: 12, fontFamily: "Satoshi", fontWeight: 400 }}
				/>
				<YAxis
					stroke="#667085"
					tickLine={false}
					axisLine={false}
					tick={{ fontSize: 12, fontFamily: "Satoshi", fontWeight: 400 }}
				/>
				<Tooltip />
				<Line
					type="monotone"
					dataKey="value"
					stroke="#4DAF01"
					strokeWidth={1.5}
					dot={false}
					isAnimationActive={false}
					filter="url(#lineShadow)"
				/>
			</LineChart>
		</ResponsiveContainer>
	</div>
);

const ThisWeeksIncome = () => (
	<ChartCardWrapper title="This Week's Income" content={<ThisWeeksIncomeContent />} />
);

export default ThisWeeksIncome;
