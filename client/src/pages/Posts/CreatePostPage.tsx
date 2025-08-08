import React from 'react';
import { Helmet } from 'react-helmet-async';

const CreatePostPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Create Post | Blogging Platform</title>
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <div className="card p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Create New Post
          </h1>
          <p className="text-gray-600">
            Post creation functionality coming soon...
          </p>
        </div>
      </div>
    </>
  );
};

export default CreatePostPage; 