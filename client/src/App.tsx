import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreatePost from './pages/CreatePost';
import PostDetail from './pages/PostDetail';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Blogging Platform</title>
        <meta name="description" content="A modern blogging platform" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/post/:slug" element={<PostDetail />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App; 