import React, { useState } from 'react';
import { FiArrowLeft, FiSmartphone, FiMonitor, FiLink, FiLogOut } from 'react-icons/fi';

const LinkedDevices = () => {
  const [showLinkModal, setShowLinkModal] = useState(false);

  const linkedDevices = [
    {
      id: 1,
      name: 'Google Chrome (Windows)',
      location: 'New York, NY',
      lastActive: 'Last active today at 9:17 am',
      icon: (
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-red-400 to-yellow-400">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      ),
      type: 'browser'
    },
    {
      id: 2,
      name: 'Safari (MacOS)',
      location: 'Boston, MA',
      lastActive: 'Last active today at 9:17 am',
      icon: (
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      ),
      type: 'browser'
    }
  ];

  const handleLinkDevice = () => {
    setShowLinkModal(true);
  };

  const handleLogoutDevice = (deviceId) => {
    console.log(`Logging out device ${deviceId}`);
    // Handle device logout logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
   

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Device Linking Section */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <div className="text-center">
            {/* Device Linking Visual */}
            <div className="flex items-center justify-center space-x-8 mb-6">
              {/* Smartphone Icon */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center border-2 border-green-300">
                  <FiSmartphone className="w-8 h-8 text-green-600" />
                </div>
                <div className="mt-2 w-8 h-0.5 bg-green-300 rounded-full"></div>
              </div>

              {/* Link Icon */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <FiLink className="w-6 h-6 text-white" />
                </div>
                <div className="mt-2 w-8 h-0.5 bg-blue-300 rounded-full"></div>
              </div>

              {/* Desktop Icon */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center border-2 border-green-300">
                  <FiMonitor className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>

            {/* Link Device Button */}
            <button
              onClick={handleLinkDevice}
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              Link Device
            </button>
          </div>
        </div>

        {/* Currently Linked Devices Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Linked Devices</h2>
          
          <div className="space-y-4">
            {linkedDevices.map((device) => (
              <div key={device.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {device.icon}
                    <div className="flex flex-col">
                      <h3 className="text-sm font-semibold text-gray-900">{device.name}</h3>
                      <p className="text-xs text-gray-500">{device.location}</p>
                      <p className="text-xs text-gray-400">{device.lastActive}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleLogoutDevice(device.id)}
                    className="px-4 py-2 bg-red-100 text-red-600 text-sm font-medium rounded-lg hover:bg-red-200 transition-colors"
                  >
                    Log out
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Device Management Info */}
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <FiLink className="w-3 h-3 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-blue-900 mb-1">Device Management</h3>
              <p className="text-xs text-blue-700">
                You can link multiple devices to your account for seamless access. 
                Each device will have access to your ReconControl data and settings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Link Device Modal */}
      {showLinkModal && (
        <div className="fixed inset-0 bg-[#00000080] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <FiLink className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Link New Device</h3>
              <p className="text-sm text-gray-600">
                To link a new device, you'll need to scan a QR code or enter a verification code on the device you want to link.
              </p>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Generate QR Code
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Enter Code Manually
              </button>
            </div>

            <button
              onClick={() => setShowLinkModal(false)}
              className="w-full mt-4 text-gray-600 hover:text-gray-800 font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkedDevices;
