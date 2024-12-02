import { z } from 'zod';

export const patientSchema = z.object({
  firstName: z.string().min(2, 'El nombre es requerido'),
  lastName: z.string().min(2, 'El apellido es requerido'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Teléfono inválido'),
  dateOfBirth: z.date(),
  gender: z.enum(['male', 'female', 'other']),
  address: z.object({
    street: z.string().min(5, 'Dirección requerida'),
    city: z.string().min(2, 'Ciudad requerida'),
    state: z.string().min(2, 'Estado requerido'),
    zipCode: z.string().min(5, 'Código postal requerido'),
    country: z.string().min(2, 'País requerido')
  })
});

export const appointmentSchema = z.object({
  patientId: z.string().min(1, 'Paciente requerido'),
  date: z.date(),
  time: z.string(),
  type: z.enum(['consultation', 'followup', 'emergency']),
  notes: z.string().optional()
});

export const medicationSchema = z.object({
  name: z.string().min(2, 'Nombre del medicamento requerido'),
  dosage: z.string().min(1, 'Dosis requerida'),
  frequency: z.string().min(1, 'Frecuencia requerida'),
  startDate: z.date(),
  endDate: z.date().optional(),
  instructions: z.string().optional()
});

export const medicalRecordSchema = z.object({
  diagnosis: z.string().min(1, 'Diagnóstico requerido'),
  symptoms: z.string().min(1, 'Síntomas requeridos'),
  treatment: z.string().min(1, 'Tratamiento requerido'),
  notes: z.string().optional(),
  attachments: z.array(z.any()).optional()
});