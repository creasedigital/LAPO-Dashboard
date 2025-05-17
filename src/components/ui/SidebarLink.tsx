import type { ElementType } from "react";
import { NavLink } from "react-router";

type SidebarLinkProps = {
	to: string;
	icon: ElementType;
	label: string;
};

export function SidebarLink({ to, icon: Icon, label }: SidebarLinkProps) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				`block px-3 py-2 rounded text-xs  ${
					isActive
						? "mx-3 bg-[#E4F0FF] text-[#014DAF] border-[0.6px] border-[#AEBAC9] "
						: "mx-3 hover:bg-gray-800 hover:text-[#E4F0FF] text-[#D0D5DD]"
				}`
			}
		>
			<div className="flex items-center gap-2">
				<Icon size={18} /> {label}
			</div>
		</NavLink>
	);
}
