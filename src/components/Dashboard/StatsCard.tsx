import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatProps {
  stat: {
    name: string;
    value: string;
    icon: LucideIcon;
    change: string;
  };
}

export default function StatsCard({ stat }: StatProps) {
  const isPositive = stat.change.startsWith('+');

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <stat.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
              <dd>
                <div className="text-lg font-medium text-gray-900">{stat.value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm">
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
              isPositive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {stat.change}
          </span>
          <span className="ml-2 text-gray-500">vs. mes anterior</span>
        </div>
      </div>
    </div>
  );
}