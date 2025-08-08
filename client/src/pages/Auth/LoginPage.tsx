import React from 'react';
import { Helmet } from 'react-helmet-async';

const LoginPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Login | Blogging Platform</title>
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600 mt-2">Sign in to your account</p>
          </div>
          
          <div className="card p-8">
            <p className="text-center text-gray-500">
              Login functionality coming soon...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage; 