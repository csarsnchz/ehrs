import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  MessageSquare,
  Settings,
  Activity
} from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Patients', icon: Users, href: '/patients' },
  { name: 'Appointments', icon: Calendar, href: '/appointments' },
  { name: 'Medical Records', icon: FileText, href: '/records' },
  { name: 'Messages', icon: MessageSquare, href: '/messages' },
  { name: 'Analytics', icon: Activity, href: '/analytics' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

export default function Sidebar() {
  const { user } = useAuthStore();

  return (
    <div className="w-64 bg-white h-[calc(100vh-4rem)] border-r border-gray-200">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <item.icon
                className="mr-3 h-6 w-6 flex-shrink-0"
                aria-hidden="true"
              />
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}