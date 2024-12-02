import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';
import { formatTimeAgo } from '../../utils/date';

interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: Date;
  isDoctor: boolean;
}

interface ChatWindowProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
  recipientName: string;
}

export default function ChatWindow({
  messages,
  onSendMessage,
  recipientName
}: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">
          Chat con {recipientName}
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isDoctor ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`
                max-w-[70%] rounded-lg px-4 py-2
                ${message.isDoctor
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-900'
                }
              `}
            >
              <p>{message.content}</p>
              <p className={`
                text-xs mt-1
                ${message.isDoctor ? 'text-indigo-200' : 'text-gray-500'}
              `}>
                {formatTimeAgo(message.timestamp)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-4 border-t border-gray-200">
        <form onSubmit={handleSubmit} className="flex space-x-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          <Button type="submit" icon={Send}>
            Enviar
          </Button>
        </form>
      </div>
    </Card>
  );
}