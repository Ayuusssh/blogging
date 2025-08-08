import React from 'react';
import { Helmet } from 'react-helmet-async';

const EditPostPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Edit Post | Blogging Platform</title>
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <div className="card p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Edit Post
          </h1>
          <p className="text-gray-600">
            Post editing functionality coming soon...
          </p>
        </div>
      </div>
    </>
  );
};

export default EditPostPage; 