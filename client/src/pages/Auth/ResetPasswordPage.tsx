import React from 'react';
import { Helmet } from 'react-helmet-async';

const ResetPasswordPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Reset Password | Blogging Platform</title>
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Set New Password</h1>
            <p className="text-gray-600 mt-2">Enter your new password</p>
          </div>
          
          <div className="card p-8">
            <p className="text-center text-gray-500">
              Password reset functionality coming soon...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage; 