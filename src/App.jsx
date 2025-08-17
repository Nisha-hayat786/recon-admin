import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Reports from './pages/Reports';
import PrivacySecurity from './pages/PrivacySecurity';
import LinkedDevices from './pages/LinkedDevices';
import HelpSupport from './pages/HelpSupport';
import ChatSupport from './pages/ChatSupport';
import AdminLayout from './components/layout/AdminLayout';
import Vendors from './pages/Vendors';
import CreateVendor from './pages/CreateVendor';
import Agreements from './pages/Agreements';
import AgreementTerms from './pages/AgreementTerms';
import Customers from './pages/Customers';
import CreateCustomer from './pages/CreateCustomer';
import LinkVendor from './pages/LinkVendor';
import Messages from './pages/Messages';
import Documents from './pages/Documents';

function App() {
  console.log('App component rendering');
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
            <Route path="settings" element={<Settings />} />
            <Route path="reports" element={<Reports />} />
            <Route path="privacy-security" element={<PrivacySecurity />} />
            <Route path="linked-devices" element={<LinkedDevices />} />
            <Route path="help-support" element={<HelpSupport />} />
            <Route path="chat-support" element={<ChatSupport />} />
            <Route path="vendors" element={<Vendors />} />
            <Route path="agreements" element={<Agreements />} />
            <Route path="agreement-terms" element={<AgreementTerms />} />
            <Route path="create-vendor" element={<CreateVendor />} />
            <Route path="customers" element={<Customers />} />
            <Route path="create-customer" element={<CreateCustomer />} />
            <Route path="link-vendor" element={<LinkVendor />} />
            <Route path="messages" element={<Messages />} />
            <Route path="documents" element={<Documents />} />
          </Route>
          
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/signin" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;