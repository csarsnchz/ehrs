import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Settings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Configuración</h2>

      <Card>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Perfil</h3>
            <p className="mt-1 text-sm text-gray-500">
              Actualiza tu información personal y preferencias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <Button>Guardar Cambios</Button>
          </div>
        </div>
      </Card>

      <Card>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Notificaciones</h3>
            <p className="mt-1 text-sm text-gray-500">
              Configura tus preferencias de notificaciones
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Email</h4>
                <p className="text-sm text-gray-500">Recibir notificaciones por email</p>
              </div>
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Sistema</h4>
                <p className="text-sm text-gray-500">Notificaciones en la plataforma</p>
              </div>
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button>Guardar Preferencias</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}