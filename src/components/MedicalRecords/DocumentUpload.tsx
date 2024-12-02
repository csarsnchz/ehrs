import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import Card from '../common/Card';

interface DocumentUploadProps {
  onUpload: (files: File[]) => void;
  maxSize?: number;
  acceptedTypes?: string[];
}

export default function DocumentUpload({
  onUpload,
  maxSize = 5242880, // 5MB
  acceptedTypes = ['image/*', 'application/pdf']
}: DocumentUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onUpload(acceptedFiles);
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize,
    accept: acceptedTypes.reduce((acc, type) => ({ ...acc, [type]: [] }), {})
  });

  return (
    <Card>
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-lg p-8
          ${isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'}
          hover:border-indigo-500 hover:bg-indigo-50
          transition-colors duration-150 ease-in-out
          cursor-pointer
        `}
      >
        <input {...getInputProps()} />
        <div className="text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            {isDragActive ? (
              'Suelta los archivos aquí...'
            ) : (
              <>
                Arrastra y suelta archivos aquí, o{' '}
                <span className="text-indigo-600">selecciona archivos</span>
              </>
            )}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            PDF o imágenes hasta {maxSize / 1024 / 1024}MB
          </p>
        </div>
      </div>
    </Card>
  );
}