import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import Dashboard from './pages/Dashboard';
import AdminLayout from './components/layout/AdminLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Auth Routes */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Protected Admin Routes */}
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/signin" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;