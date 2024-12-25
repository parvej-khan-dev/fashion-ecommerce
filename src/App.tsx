import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Collection } from './pages/Collection';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Toaster position="top-right" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection/:categoryId" element={<Collection />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;