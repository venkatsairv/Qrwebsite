import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage1 from './pages/HomePage1';
import HomePage2 from './pages/HomePage2';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import ContactUs from './pages/ContactUs';
import QrGenerator from './pages/QrGenerator';
import WifiQrGenerator from './pages/WifiQrGenerator';
import ModernQrGenerator from './pages/ModernQrGenerator';
import EthericClarity from './pages/EthericClarity';
import LumenScan from './pages/LumenScan';
import AuthPage from './pages/AuthPage';
import Home from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage1 />} />
        <Route path="login" element={<AuthPage mode="login" />} />
        <Route path="register" element={<AuthPage mode="register" />} />
        <Route path="home-2" element={<HomePage2 />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog-detail" element={<BlogDetail />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="qr-generator" element={<QrGenerator />} />
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Home />} />
        </Route>
        <Route path="wifi-qr-generator" element={<WifiQrGenerator />} />
        <Route path="modern-qr-generator" element={<ModernQrGenerator />} />
        <Route path="etheric-clarity" element={<EthericClarity />} />
        <Route path="lumen-scan" element={<LumenScan />} />
      </Route>
    </Routes>
  );
}

export default App;
