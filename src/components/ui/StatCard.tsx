interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
}

export default function StatCard({
  title,
  value,
  change,
  icon,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
          {change && (
            <p
              className={`mt-2 text-sm ${
                change.isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {change.isPositive ? "↑" : "↓"} {Math.abs(change.value)}%
            </p>
          )}
        </div>
        {icon && (
          <div className="p-3 bg-blue-100 rounded-lg text-blue-600">{icon}</div>
        )}
      </div>
    </div>
  );
}
