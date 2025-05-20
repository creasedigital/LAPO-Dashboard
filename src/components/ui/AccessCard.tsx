import ChevronRight from "@/assets/images/chevron-right.png";


type AccessCardProps = {
	title: string;
	icon: string;
    key: string | number;
};

export function AccessCard({ key, title, icon: Icon }: AccessCardProps) {
	return (
			<div key={key} className="flex items-center h-[45px] max-w-full w-full rounded-[4px] gap-4 px-4 py-2 bg-[#F1F7FF]">
                <button type="button" className="cursor-pointer flex items-center justify-center w-7 h-7 bg-[#014DAF] rounded-full ">
						<img
							src={Icon}
							alt="access type"
							className="w-4 h-4"
						/>
					</button>
                    <div className="flex gap-3 items-center">
                        <h4 className="leading-4.5 tracking-normal text-sm font-bold">
                            {title}
                        </h4>
                        <button type="button" className="cursor-pointer">
						<img
							src={ChevronRight}
							alt="access type"
							className="w-4 h-4"
						/>
					</button>
                    </div>
				{/* <Icon size={18} /> {label} */}
			</div>
	);
}