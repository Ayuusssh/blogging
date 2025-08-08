import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            Blogging Platform
          </Link>
          
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-primary-600">
              Home
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-primary-600">
              Login
            </Link>
            <Link to="/register" className="text-gray-700 hover:text-primary-600">
              Register
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 