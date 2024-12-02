import React from 'react';
import Card from '../components/common/Card';
import { Activity, TrendingUp, Users, Calendar } from 'lucide-react';

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Análisis y Estadísticas</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-indigo-100">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">1,234</h3>
                <p className="text-sm text-gray-500">Total Pacientes</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">156</h3>
                <p className="text-sm text-gray-500">Citas este Mes</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100">
                <Activity className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">89%</h3>
                <p className="text-sm text-gray-500">Tasa de Asistencia</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-100">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">23%</h3>
                <p className="text-sm text-gray-500">Crecimiento Anual</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Add more analytics components here */}
    </div>
  );
}