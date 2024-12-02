import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { appointmentSchema } from '../../utils/validation';
import Button from '../common/Button';
import Card from '../common/Card';

type AppointmentFormData = {
  patientId: string;
  date: Date;
  time: string;
  type: 'consultation' | 'followup' | 'emergency';
  notes?: string;
};

interface AppointmentFormProps {
  onSubmit: (data: AppointmentFormData) => void;
  initialData?: Partial<AppointmentFormData>;
  isLoading?: boolean;
  patients: Array<{ id: string; name: string }>;
}

export default function AppointmentForm({
  onSubmit,
  initialData,
  isLoading,
  patients,
}: AppointmentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: initialData,
  });

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Paciente
            <select
              {...register('patientId')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Seleccionar paciente</option>
              {patients.map((patient) => (
                <option key={patient.id} value={patient.id}>
                  {patient.name}
                </option>
              ))}
            </select>
          </label>
          {errors.patientId && (
            <p className="mt-1 text-sm text-red-600">
              {errors.patientId.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fecha
              <input
                type="date"
                {...register('date')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
            {errors.date && (
              <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Hora
              <input
                type="time"
                {...register('time')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
            {errors.time && (
              <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tipo de Cita
            <select
              {...register('type')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="consultation">Consulta General</option>
              <option value="followup">Seguimiento</option>
              <option value="emergency">Urgencia</option>
            </select>
          </label>
          {errors.type && (
            <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Notas
            <textarea
              {...register('notes')}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </label>
          {errors.notes && (
            <p className="mt-1 text-sm text-red-600">{errors.notes.message}</p>
          )}
        </div>

        <div className="flex justify-end space-x-4">
          <Button variant="outline" type="button">
            Cancelar
          </Button>
          <Button type="submit" loading={isLoading}>
            Programar Cita
          </Button>
        </div>
      </form>
    </Card>
  );
}
