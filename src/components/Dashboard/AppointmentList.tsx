import React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const appointments = [
  {
    id: 1,
    patient: 'María González',
    type: 'Consulta General',
    time: new Date(2024, 2, 15, 9, 30),
    status: 'confirmed'
  },
  {
    id: 2,
    patient: 'Juan Pérez',
    type: 'Seguimiento',
    time: new Date(2024, 2, 15, 10, 15),
    status: 'pending'
  },
  {
    id: 3,
    patient: 'Ana Martínez',
    type: 'Urgencia',
    time: new Date(2024, 2, 15, 11, 0),
    status: 'confirmed'
  }
];

export default function AppointmentList() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Próximas Citas
        </h3>
        <div className="mt-5">
          <div className="flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              {appointments.map((appointment) => (
                <li key={appointment.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {appointment.patient}
                      </p>
                      <p className="text-sm text-gray-500">
                        {appointment.type}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="text-sm text-gray-900">
                        {format(appointment.time, "HH:mm 'hrs'", { locale: es })}
                      </p>
                      <p className={`text-sm ${
                        appointment.status === 'confirmed' 
                          ? 'text-green-600' 
                          : 'text-yellow-600'
                      }`}>
                        {appointment.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}