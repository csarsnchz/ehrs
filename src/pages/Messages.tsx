import React from 'react';
import ChatWindow from '../components/Messaging/ChatWindow';

const mockMessages = [
  {
    id: '1',
    content: 'Buenos días doctor, ¿podría revisar mis últimos resultados?',
    sender: 'María González',
    timestamp: new Date(2024, 2, 20, 9, 30),
    isDoctor: false
  },
  {
    id: '2',
    content: 'Por supuesto, los resultados se ven normales. Programemos una cita de seguimiento.',
    sender: 'Dr. García',
    timestamp: new Date(2024, 2, 20, 9, 35),
    isDoctor: true
  }
];

export default function Messages() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Mensajes</h2>
      <ChatWindow
        messages={mockMessages}
        onSendMessage={console.log}
        recipientName="María González"
      />
    </div>
  );
}