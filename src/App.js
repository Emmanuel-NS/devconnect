import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Developers from './pages/Developers';
import Blog from './pages/Blog';
import PostDetail from './pages/PostDetail';
import About from './pages/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
