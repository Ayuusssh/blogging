import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to Blogging Platform
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Share your stories, connect with others, and discover amazing content.
      </p>
      <div className="space-x-4">
        <button className="btn btn-primary">Get Started</button>
        <button className="btn btn-outline">Learn More</button>
      </div>
    </div>
  );
};

export default Home; 