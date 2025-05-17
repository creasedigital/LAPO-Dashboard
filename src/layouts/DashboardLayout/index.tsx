import { Outlet } from "react-router";
// import Sidebar from "./Sidebar";
import TopNavigation from "./TopNavigation";
import { Sidebar } from "./Sidebar";

export function DashboardLayout() {
	return (
		// {/* <div className="flex h-screen "> */}
		<div className="flex h-full w-full">
			<Sidebar />
			<div className="flex-1 flex flex-col overflow-hidden">
				<TopNavigation />
				<main className="flex-1 bg-[#F8FBFF] px-5 pb-5 overflow-auto overflow-x-hidden overflow-y-auto">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
