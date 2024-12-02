import React from 'react';
import MedicalRecordForm from '../components/MedicalRecords/MedicalRecordForm';
import PatientSearch from '../components/Patients/PatientSearch';

export default function MedicalRecords() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Historial Médico</h2>
      
      <PatientSearch
        onSearch={console.log}
        onFilter={console.log}
      />

      <MedicalRecordForm
        onSubmit={console.log}
        patientId="1"
      />
    </div>
  );
}