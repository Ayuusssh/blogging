import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { FiHome, FiUsers, FiTrendingUp, FiBookmark, FiSettings } from 'react-icons/fi';

const Sidebar: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="hidden lg:block w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <nav className="space-y-4">
          <Link
            to="/"
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
              isActive('/') 
                ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <FiHome className="w-5 h-5" />
            <span>Home</span>
          </Link>

          <Link
            to="/posts"
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
              isActive('/posts') 
                ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <FiTrendingUp className="w-5 h-5" />
            <span>Posts</span>
          </Link>

          {isAuthenticated && (
            <>
              <Link
                to="/feed"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isActive('/feed') 
                    ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FiBookmark className="w-5 h-5" />
                <span>Feed</span>
              </Link>

              <Link
                to="/users"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isActive('/users') 
                    ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FiUsers className="w-5 h-5" />
                <span>Users</span>
              </Link>
            </>
          )}

          {user?.role === 'admin' && (
            <Link
              to="/admin"
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive('/admin') 
                  ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <FiSettings className="w-5 h-5" />
              <span>Admin</span>
            </Link>
          )}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar; 