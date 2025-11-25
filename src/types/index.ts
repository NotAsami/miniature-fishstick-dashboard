export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface DashboardStats {
  totalUsers: number;
  revenue: number;
  activeProjects: number;
  pendingTasks: number;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}
