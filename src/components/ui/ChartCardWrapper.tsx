import { Card, CardTitle } from "@/components/ui/card";
import type React from "react";
import Maximize from "@/assets/images/maximize.png";

type ChartCardWrapperProps = {
	title: string;
	noIcon?: boolean;
	content: React.ReactNode;
};

export function ChartCardWrapper({
	title,
	noIcon,
	content,
}: ChartCardWrapperProps) {
	return (
		<Card
			className="flex flex-col gap-0 items-start p-4 max-w-full w-[581px] rounded-[12px] shadow-none px-4 py-2 bg-white border border-[#E2E2E2]"
		>
			<div className="flex justify-between items-center w-full mb-[20px]">
				<CardTitle className="leading-4.5  tracking-normal text-[18px] font-medium text-[#121212]">
					{title}
				</CardTitle>

				{!noIcon && (
					<button
						type="button"
						className="cursor-pointer flex items-center justify-center w-4 h-4"
					>
						<img src={Maximize} alt="maximize" className="" />
					</button>
				)}
			</div>
			<div className="w-full">{content}</div>
		</Card>
	);
}
