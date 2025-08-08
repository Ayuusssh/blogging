import React from 'react';
import { Helmet } from 'react-helmet-async';

const PostDetailPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Post Detail | Blogging Platform</title>
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <div className="card p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Post Detail
          </h1>
          <p className="text-gray-600">
            Post detail functionality coming soon...
          </p>
        </div>
      </div>
    </>
  );
};

export default PostDetailPage; 