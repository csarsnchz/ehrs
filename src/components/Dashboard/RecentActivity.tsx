import React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Activity, User, Calendar, FileText } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'patient',
    description: 'Nuevo paciente registrado',
    subject: 'María González',
    timestamp: new Date(2024, 2, 15, 9, 30),
    icon: User
  },
  {
    id: 2,
    type: 'appointment',
    description: 'Cita programada',
    subject: 'Dr. García - Juan Pérez',
    timestamp: new Date(2024, 2, 15, 10, 15),
    icon: Calendar
  },
  {
    id: 3,
    type: 'record',
    description: 'Actualización de historial',
    subject: 'Ana Martínez',
    timestamp: new Date(2024, 2, 15, 11, 0),
    icon: FileText
  },
  {
    id: 4,
    type: 'alert',
    description: 'Alerta de medicación',
    subject: 'Carlos Ruiz',
    timestamp: new Date(2024, 2, 15, 11, 30),
    icon: Activity
  }
];

export default function RecentActivity() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Actividad Reciente</h3>
      <div className="flow-root">
        <ul className="-mb-8">
          {activities.map((activity, activityIdx) => (
            <li key={activity.id}>
              <div className="relative pb-8">
                {activityIdx !== activities.length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center ring-8 ring-white">
                      <activity.icon className="h-5 w-5 text-gray-500" />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        {activity.description}{' '}
                        <span className="font-medium text-gray-900">
                          {activity.subject}
                        </span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      {format(activity.timestamp, "HH:mm 'hrs'", { locale: es })}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}