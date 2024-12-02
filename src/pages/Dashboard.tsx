import React from 'react';
import { Activity, Users, Calendar, Clock } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import StatsCard from '../components/Dashboard/StatsCard';
import AppointmentList from '../components/Dashboard/AppointmentList';
import PatientOverview from '../components/Dashboard/PatientOverview';
import QuickActions from '../components/Dashboard/QuickActions';
import RecentActivity from '../components/Dashboard/RecentActivity';

export default function Dashboard() {
  const { user } = useAuthStore();

  const stats = [
    { name: 'Pacientes Totales', value: '1,234', icon: Users, change: '+4.75%' },
    { name: 'Citas Hoy', value: '12', icon: Calendar, change: '+2.5%' },
    { name: 'Tiempo Promedio', value: '18min', icon: Clock, change: '-1.5%' },
    { name: 'Casos Activos', value: '89', icon: Activity, change: '+3.2%' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Bienvenido, {user?.name}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Aquí está el resumen de su actividad clínica
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.name} stat={stat} />
        ))}
      </div>

      <QuickActions />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AppointmentList />
        <PatientOverview />
      </div>

      <RecentActivity />
    </div>
  );
}