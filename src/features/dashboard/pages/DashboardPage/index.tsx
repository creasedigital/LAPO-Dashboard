import Analytics from "./analytics"
import QuickAccess from "./QuickAccess"
import Welcome from "./Welcome"

const DashboardPage = () => {
  return (
    <div className="text-xl font-semibold block">
      <Welcome />
      <QuickAccess />
      <Analytics />
    </div>
  )
}

export default DashboardPage