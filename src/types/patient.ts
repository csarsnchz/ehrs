export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: 'male' | 'female' | 'other';
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  medicalHistory: MedicalRecord[];
  allergies: string[];
  medications: Medication[];
}

export interface MedicalRecord {
  id: string;
  date: Date;
  doctorId: string;
  diagnosis: string;
  symptoms: string[];
  treatment: string;
  notes: string;
  attachments: Attachment[];
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: Date;
  endDate?: Date;
  prescribedBy: string;
}

export interface Attachment {
  id: string;
  type: 'lab_result' | 'image' | 'document';
  url: string;
  name: string;
  uploadDate: Date;
}