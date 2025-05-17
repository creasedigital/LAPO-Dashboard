import { ChartCardWrapper } from "@/components/ui/ChartCardWrapper";
import {
	Table,
	TableHeader,
	TableBody,
	TableRow,
	TableHead,
	TableCell,
} from "@/components/ui/table";
import {
	type ColumnDef,
	getCoreRowModel,
	useReactTable,
	flexRender,
} from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type CardReq = {
	id: string | number;
	branch: string;
	cardType: "Instant" | "Personalized";
	cardStatus: "Pending" | "Acknowledged" | "In Progress" | "Ready";
	quantity: number;
};

export const cardRequests: CardReq[] = [
	{
		id: "728ed52f",
		branch: "Corporate",
		quantity: 10,
		cardType: "Instant",
		cardStatus: "Ready",
	},
	{
		id: "489e1d42",
		branch: "Corporate",
		quantity: 10,
		cardType: "Personalized",
		cardStatus: "In Progress",
	},
	{
		id: "5dfe1e52",
		branch: "Corporate",
		quantity: 10,
		cardType: "Personalized",
		cardStatus: "Acknowledged",
	},
	{
		id: "4aue1538",
		branch: "Corporate",
		quantity: 10,
		cardType: "Instant",
		cardStatus: "Pending",
	},
];

const statusStyles: Record<
	CardReq["cardStatus"],
	{ bg: string; text: string; border: string }
> = {
	Ready: {
		text: "text-[#067647]",
		bg: "bg-[#ECFDF3]",
		border: "border-[#ABEFC6]",
	},
	"In Progress": {
		text: "text-[#B54708]",
		bg: "bg-[#FFFAEB]",
		border: "border-[#FEDF89]",
	},
	Acknowledged: {
		text: "text-[#175CD3]",
		bg: "bg-[#EFF8FF]",
		border: "border-[#B2DDFF]",
	},
	Pending: {
		text: "text-[#344054]",
		bg: "bg-[#F9FAFB]",
		border: "border-[#EAECF0]",
	},
};

const columns: ColumnDef<CardReq>[] = [
	{
		header: "Branch",
		accessorKey: "branch",
		cell: ({ getValue }) => (
			<span
				style={{
					fontFamily: "Satoshi",
					fontWeight: 400,
					fontSize: "10px",
					lineHeight: "20px",
					letterSpacing: "0%",
					color: "#475467",
				}}
				className="text-center block"
			>
				{getValue() as string}
			</span>
		),
	},
	{
		header: "Card Type",
		accessorKey: "cardType",
		cell: ({ getValue }) => (
			<span
				style={{
					fontFamily: "Satoshi",
					fontWeight: 400,
					fontSize: "10px",
					lineHeight: "20px",
					letterSpacing: "0%",
					color: "#475467",
				}}
				className="text-center block"
			>
				{getValue() as string}
			</span>
		),
	},
	{
		header: "Quantity",
		accessorKey: "quantity",
		cell: ({ getValue }) => (
			<span
				style={{
					fontFamily: "Satoshi",
					fontWeight: 400,
					fontSize: "10px",
					lineHeight: "20px",
					letterSpacing: "0%",
					color: "#475467",
				}}
				className="text-center block"
			>
				{getValue() as number}
			</span>
		),
	},
	{
		header: "Status",
		accessorKey: "cardStatus",
		cell: ({ row }) => {
			const status = row.original.cardStatus;
			const { text, bg, border } = statusStyles[status];
			return (
				<Badge
					className={`rounded-full px-2 py-1 text-xs font-medium ${text} ${bg} border ${border}`}
				>
					{status}
				</Badge>
			);
		},
	},
	{
		header: "Action",
		id: "action",
		cell: () => (
			<Button
				variant="ghost"
				className="p-0 hover:bg-transparent"
				style={{
					fontFamily: "Satoshi",
					fontWeight: 700,
					fontSize: "10px",
					lineHeight: "20px",
					letterSpacing: "0%",
					color: "#014DAF",
				}}
			>
				View
			</Button>
		),
	},
];

function RecentCardTable() {
	const table = useReactTable({
		data: cardRequests,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<Table className="text-center w-full">
			<TableHeader>
				{table.getHeaderGroups().map((headerGroup) => (
					<TableRow
						key={headerGroup.id}
						className="border border-[#E2E2E2] text-center"
					>
						{headerGroup.headers.map((header, index, array) => {
							const isFirst = index === 0;
							const isLast = index === array.length - 1;

							return (
								<TableHead
									key={header.id}
									className="bg-[#F1F7FF] px-6 py-2"
									style={{
										fontFamily: "Satoshi",
										fontWeight: 500,
										fontSize: "12px",
										lineHeight: "18px",
										letterSpacing: "0%",
										color: "#0000008F",
										textAlign: "center",
										borderLeft: isFirst
											? "1px solid #E2E2E2"
											: "none",
										borderRight: isLast
											? "1px solid #E2E2E2"
											: "none",
									}}
								>
									{flexRender(
										header.column.columnDef.header,
										header.getContext(),
									)}
								</TableHead>
							);
						})}
					</TableRow>
				))}
			</TableHeader>
			<TableBody>
				{table.getRowModel().rows.map((row) => (
					<TableRow key={row.id} className="text-center">
						{row.getVisibleCells().map((cell) => (
							<TableCell key={cell.id} className="text-center">
								{flexRender(
									cell.column.columnDef.cell,
									cell.getContext(),
								)}
							</TableCell>
						))}
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

const RecentCardRequests = () => {
	return (
		<ChartCardWrapper
			title="Recent Card Requests"
			content={<RecentCardTable />}
		/>
	);
};

export default RecentCardRequests;
