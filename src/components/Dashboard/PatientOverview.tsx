import React from 'react';
import { Users, UserPlus, UserMinus } from 'lucide-react';

const patientStats = [
  { label: 'Nuevos Pacientes', value: 28, trend: '+12%', icon: UserPlus },
  { label: 'Pacientes Activos', value: 856, trend: '+3.2%', icon: Users },
  { label: 'Dados de Alta', value: 15, trend: '-2.3%', icon: UserMinus },
];

export default function PatientOverview() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Resumen de Pacientes
        </h3>
        <div className="mt-5 grid grid-cols-1 gap-5">
          {patientStats.map((stat) => (
            <div
              key={stat.label}
              className="px-4 py-5 bg-gray-50 shadow-sm rounded-lg overflow-hidden"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.label}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.trend}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}