import { createBrowserRouter } from "react-router";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import Placeholder from "@/components/Placeholder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <DashboardPage /> },

      // MAIN MENU routes
      { path: "branches", element: <>{Placeholder("Branches")()}</> },
      { path: "roles", element: <>{Placeholder("Roles")()}</> },
      { path: "users", element: <>{Placeholder("Users")()}</> },
      { path: "card-scheme", element: <>{Placeholder("Card Scheme")()}</> },
      { path: "card-profile", element: <>{Placeholder("Card Profile")()}</> },
      { path: "card-request", element: <>{Placeholder("Card Request")()}</> },
      { path: "stock", element: <>{Placeholder("Stock")()}</> },
      { path: "cards", element: <>{Placeholder("Cards")()}</> },
      { path: "authorization-list", element: <>{Placeholder("Authorization List")()}</> },
      { path: "authorization-queue", element: <>{Placeholder("Authorization Queue")()}</> },
      { path: "trail", element: <>{Placeholder("Trail")()}</> },
      { path: "account", element: <>{Placeholder("Account")()}</> },
    ],
  },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
]);
