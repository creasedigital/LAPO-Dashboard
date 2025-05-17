import {
	Card,
	CardTitle,
} from "@/components/ui/card";
import type React from "react";

type AnalyticsCardProps = {
	title: string;
	icon: string;
	key: string | number;
    content: React.ReactNode;
};

export function AnalyticsCard({ key, title, icon: Icon, content }: AnalyticsCardProps) {
	return (
		<Card
			key={key}
			className="flex flex-col gap-0 items-start p-4 h-[110px] max-w-full w-[286.5px] rounded-[10px] shadow-none px-4 py-2 bg-white border border-[#E2E2E2]"
		>
			<button
				type="button"
				className="cursor-pointer flex items-center justify-center w-4 h-4 mb-1"
			>
				<img src={Icon} alt="access type" className="" />
			</button>
            <CardTitle className="leading-4.5 tracking-normal text-sm font-medium text-[#0000008F] mb-[11px]">{title}</CardTitle>
            <div className="w-full">
                {content}
            </div>
		</Card>
	);
}
