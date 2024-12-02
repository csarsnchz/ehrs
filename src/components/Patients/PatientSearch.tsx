import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Card from '../common/Card';

interface PatientSearchProps {
  onSearch: (query: string) => void;
  onFilter: (filters: PatientFilters) => void;
}

interface PatientFilters {
  gender?: string;
  ageRange?: string;
  status?: string;
}

export default function PatientSearch({ onSearch, onFilter }: PatientSearchProps) {
  const [filters, setFilters] = useState<PatientFilters>({});

  const handleFilterChange = (key: keyof PatientFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <Card>
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar pacientes..."
            onChange={(e) => onSearch(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <select
            onChange={(e) => handleFilterChange('gender', e.target.value)}
            className="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Género</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </select>

          <select
            onChange={(e) => handleFilterChange('ageRange', e.target.value)}
            className="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Rango de Edad</option>
            <option value="0-18">0-18 años</option>
            <option value="19-30">19-30 años</option>
            <option value="31-50">31-50 años</option>
            <option value="51+">51+ años</option>
          </select>

          <select
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Estado</option>
            <option value="active">Activo</option>
            <option value="inactive">Inactivo</option>
          </select>
        </div>
      </div>
    </Card>
  );
}