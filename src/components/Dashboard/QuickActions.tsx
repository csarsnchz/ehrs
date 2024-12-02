import React from 'react';
import { Calendar, FileText, MessageSquare, Bell, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const actions = [
  {
    name: 'Nueva Cita',
    description: 'Programar una nueva cita médica',
    icon: Calendar,
    href: '/appointments/new',
    color: 'bg-blue-500'
  },
  {
    name: 'Nuevo Paciente',
    description: 'Registrar un nuevo paciente',
    icon: PlusCircle,
    href: '/patients/new',
    color: 'bg-green-500'
  },
  {
    name: 'Mensajes',
    description: 'Ver mensajes pendientes',
    icon: MessageSquare,
    href: '/messages',
    color: 'bg-purple-500'
  },
  {
    name: 'Recordatorios',
    description: 'Gestionar recordatorios',
    icon: Bell,
    href: '/reminders',
    color: 'bg-yellow-500'
  },
  {
    name: 'Informes',
    description: 'Generar informes médicos',
    icon: FileText,
    href: '/reports',
    color: 'bg-red-500'
  }
];

export default function QuickActions() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Acciones Rápidas</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {actions.map((action) => (
          <Link
            key={action.name}
            to={action.href}
            className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className={`p-3 rounded-full ${action.color} text-white mb-3`}>
              <action.icon className="h-6 w-6" />
            </div>
            <h4 className="text-sm font-medium text-gray-900">{action.name}</h4>
            <p className="text-xs text-gray-500 text-center mt-1">
              {action.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}