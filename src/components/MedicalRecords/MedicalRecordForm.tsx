import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FileText, Plus } from 'lucide-react';
import Button from '../common/Button';
import Card from '../common/Card';
import DocumentUpload from './DocumentUpload';
import { medicalRecordSchema } from '../../utils/validation';

interface MedicalRecordFormProps {
  onSubmit: (data: any) => void;
  patientId: string;
  isLoading?: boolean;
}

export default function MedicalRecordForm({ onSubmit, patientId, isLoading }: MedicalRecordFormProps) {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: zodResolver(medicalRecordSchema)
  });

  const handleFileUpload = (files: File[]) => {
    setValue('attachments', files);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Diagnóstico
            <input
              type="text"
              {...register('diagnosis')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </label>
          {errors.diagnosis && (
            <p className="mt-1 text-sm text-red-600">{errors.diagnosis.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Síntomas
            <textarea
              {...register('symptoms')}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Ingrese los síntomas separados por comas"
            />
          </label>
          {errors.symptoms && (
            <p className="mt-1 text-sm text-red-600">{errors.symptoms.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tratamiento
            <textarea
              {...register('treatment')}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </label>
          {errors.treatment && (
            <p className="mt-1 text-sm text-red-600">{errors.treatment.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Notas Adicionales
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

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Archivos Adjuntos</h4>
          <DocumentUpload onUpload={handleFileUpload} />
        </div>

        <div className="flex justify-end space-x-4">
          <Button variant="outline" type="button">
            Cancelar
          </Button>
          <Button type="submit" loading={isLoading} icon={Plus}>
            Agregar Registro
          </Button>
        </div>
      </form>
    </Card>
  );
}