import { DashboardLayout } from "@/components/layout";
import { Card } from "@/components/ui";

export default function AnalyticsPage() {
  return (
    <DashboardLayout title="Analytics">
      <div className="space-y-6">
        <Card title="Analytics Overview">
          <p className="text-gray-600">
            Analytics dashboard coming soon. This page will display charts,
            graphs, and metrics about your application usage.
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Traffic Overview">
            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
              Chart Placeholder
            </div>
          </Card>
          <Card title="User Engagement">
            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
              Chart Placeholder
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
