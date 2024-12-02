import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Bell, Settings } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

export default function Header() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">Electronic Health Record</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Settings className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="text-sm">
                <p className="font-medium text-gray-700">{user?.name}</p>
                <p className="text-gray-500">{user?.role}</p>
              </div>
              
              <button
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:text-gray-500"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}