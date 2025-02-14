import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, Brain, Activity, BookHeart, Users, Map, Settings, Bot as Lotus } from 'lucide-react';

const Layout: React.FC = () => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Mind Scanner', href: '/mind-scanner', icon: Brain },
    { name: 'Activities', href: '/activities', icon: Activity },
    { name: 'Mantra Vault', href: '/mantras', icon: BookHeart },
    { name: 'Satsang', href: '/community', icon: Users },
    { name: 'Resources', href: '/resources', icon: Map },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-8">
            <Lotus className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">ManasVeda</span>
          </div>
          
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;