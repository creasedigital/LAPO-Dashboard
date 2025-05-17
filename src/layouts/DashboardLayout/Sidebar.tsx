import { SidebarLink } from "@/components/ui/SidebarLink";
import lapo from "@/assets/images/lapo.png";
import CardInfraHq from "@/assets/images/cardInfraHq.png";
import {
	HomeIcon,
	BranchesIcon,
	RolesIcon,
	CardSchemeIcon,
	// CardProfilesIcon,
	CardRequestIcon,
	StockIcon,
	AuthListIcon,
	AuthQueueIcon,
	TrailIcon,
	CardsIcon,
	AccountIcon,
	LogoutIcon,
	UsersIcon,
} from "@/icons";

const links = [
	{ to: "/", label: "Dashboard", icon: HomeIcon },
	{ divider: "Main Menu" },
	{ to: "/branches", label: "Branches", icon: BranchesIcon },
	{ to: "/roles", label: "Roles", icon: RolesIcon },
	{ to: "/users", label: "Users", icon: UsersIcon },
	{ to: "/card-scheme", label: "Card Scheme", icon: CardSchemeIcon },
	{ to: "/card-profile", label: "Card Profile", icon: CardsIcon },
	{ to: "/card-request", label: "Card Request", icon: CardRequestIcon },
	{ to: "/stock", label: "Stock", icon: StockIcon },
	{ to: "/cards", label: "Cards", icon: CardsIcon },
	{
		to: "/authorization-list",
		label: "Authorization List",
		icon: AuthListIcon,
	},
	{
		to: "/authorization-queue",
		label: "Authorization Queue",
		icon: AuthQueueIcon,
	},
	{ to: "/trail", label: "Trail", icon: TrailIcon },
	{ to: "/account", label: "Account", icon: AccountIcon },
];

export function Sidebar() {
	return (
		<aside className="w-[230px] relative min-h-full bg-[#002F6C] text-[#D0D5DD] py-6">
			<img src={lapo} alt="Logo" className="w-[138.32px] pb-4" />
			<nav className="space-y-[14px]">
				{links.map((item) =>
					"divider" in item ? (
						<div
							key={item.divider}
							className="mt-[14px] pl-[28px] text-[8.5px] leading-4.5 font-medium tracking-[0%] uppercase text-[#7E8B9C]"
						>
							{item.divider}
						</div>
					) : (
						<SidebarLink
							key={item.to}
							to={item.to}
							icon={item.icon}
							label={item.label}
						/>
					),
				)}

				<button
					type="button"
					className="w-full bg-transparent flex items-center text-xs font-medium tracking-[0%] mt-[123px] gap-2 px-4 py-2 rounded hover:bg-gray-800 "
				>
					<LogoutIcon /> Logout
				</button>
				<div className="absolute bottom-[30px] left-5 ">
					<p className="  text-[8.5px] leading-4.5 font-medium tracking-[0%] uppercase text-[#7E8B9C]">
						POWERED BY
					</p>
					<img
						src={CardInfraHq}
						alt="Developing Partner Logo"
						className="w-[93.33px]"
					/>
				</div>
			</nav>
		</aside>
	);
}
