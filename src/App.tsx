import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import MindScanner from './pages/MindScanner';
import Activities from './pages/Activities';
import MantraVault from './pages/MantraVault';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/mind-scanner" element={<MindScanner />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/mantras" element={<MantraVault />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* Other routes will be added as we implement more pages */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App