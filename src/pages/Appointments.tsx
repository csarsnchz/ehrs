import React, { useState } from 'react';
import AppointmentCalendar from '../components/Calendar/AppointmentCalendar';
import AppointmentForm from '../components/Appointments/AppointmentForm';
import Card from '../components/common/Card';

export default function Appointments() {
  const [showForm, setShowForm] = useState(false);
  const [events] = useState([
    {
      id: '1',
      title: 'Consulta - María González',
      start: new Date(2024, 2, 20, 10, 0),
      end: new Date(2024, 2, 20, 11, 0),
      backgroundColor: '#4F46E5'
    }
  ]);

  const mockPatients = [
    { id: '1', name: 'María González' },
    { id: '2', name: 'Juan Pérez' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Gestión de Citas</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          {showForm ? 'Ver Calendario' : 'Nueva Cita'}
        </button>
      </div>

      {showForm ? (
        <AppointmentForm
          onSubmit={console.log}
          patients={mockPatients}
        />
      ) : (
        <AppointmentCalendar
          events={events}
          onSelectSlot={console.log}
          onEventClick={console.log}
        />
      )}
    </div>
  );
}