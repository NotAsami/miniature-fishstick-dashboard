import { DashboardLayout } from "@/components/layout";
import { StatCard, Card, Button } from "@/components/ui";
import { formatNumber, formatCurrency } from "@/lib/utils";

export default function Home() {
  return (
    <DashboardLayout title="Dashboard Overview">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Users"
            value={formatNumber(12453)}
            change={{ value: 12, isPositive: true }}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            }
          />
          <StatCard
            title="Revenue"
            value={formatCurrency(54231)}
            change={{ value: 8.2, isPositive: true }}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
          <StatCard
            title="Active Projects"
            value="23"
            change={{ value: 3, isPositive: true }}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            }
          />
          <StatCard
            title="Pending Tasks"
            value="18"
            change={{ value: 2, isPositive: false }}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            }
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity Card */}
          <Card title="Recent Activity" className="lg:col-span-2">
            <div className="space-y-4">
              {[
                { user: "John Doe", action: "created a new project", time: "2 minutes ago" },
                { user: "Jane Smith", action: "completed a task", time: "15 minutes ago" },
                { user: "Mike Johnson", action: "uploaded a file", time: "1 hour ago" },
                { user: "Sarah Wilson", action: "updated settings", time: "2 hours ago" },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
                      {activity.user.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.user}</span>{" "}
                        {activity.action}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions Card */}
          <Card title="Quick Actions">
            <div className="space-y-3">
              <Button className="w-full">Create New Project</Button>
              <Button variant="secondary" className="w-full">
                Add Team Member
              </Button>
              <Button variant="outline" className="w-full">
                Generate Report
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
