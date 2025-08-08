import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blogging Platform - Share Your Stories</title>
        <meta name="description" content="A modern blogging platform where you can share your stories, connect with others, and discover amazing content." />
      </Helmet>
      
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto text-center py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{' '}
            <span className="gradient-text">Blogging Platform</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Share your stories, connect with others, and discover amazing content in our modern blogging community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary btn-lg">
              Get Started
            </button>
            <button className="btn-outline btn-lg">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-xl">✍️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Create & Share
              </h3>
              <p className="text-gray-600">
                Write beautiful blog posts with our rich text editor and share them with the world.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-600 text-xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Connect & Engage
              </h3>
              <p className="text-gray-600">
                Follow other writers, like posts, and join conversations through comments.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-success-600 text-xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mobile First
              </h3>
              <p className="text-gray-600">
                Enjoy a seamless experience across all devices with our responsive design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage; 