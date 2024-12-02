import React from 'react';
import { Bell, Calendar, FileText, MessageSquare } from 'lucide-react';
import Card from '../common/Card';
import { formatTimeAgo } from '../../utils/date';

interface Notification {
  id: string;
  type: 'appointment' | 'message' | 'record' | 'system';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

interface NotificationCenterProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
}

const notificationIcons = {
  appointment: Calendar,
  message: MessageSquare,
  record: FileText,
  system: Bell,
};

export default function NotificationCenter({
  notifications,
  onMarkAsRead
}: NotificationCenterProps) {
  return (
    <Card>
      <div className="divide-y divide-gray-200">
        <div className="px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">Notificaciones</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {notifications.map((notification) => {
            const Icon = notificationIcons[notification.type];
            return (
              <div
                key={notification.id}
                className={`
                  px-6 py-4 hover:bg-gray-50 cursor-pointer
                  ${notification.read ? 'opacity-75' : ''}
                `}
                onClick={() => onMarkAsRead(notification.id)}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Icon className={`
                      h-6 w-6
                      ${notification.read ? 'text-gray-400' : 'text-indigo-600'}
                    `} />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {notification.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {notification.message}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      {formatTimeAgo(notification.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}