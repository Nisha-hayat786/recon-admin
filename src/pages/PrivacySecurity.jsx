import React, { useState } from 'react';
import { FiArrowLeft, FiEye, FiEyeOff, FiChevronRight, FiTrash2, FiShield, FiFileText, FiUser } from 'react-icons/fi';

const PrivacySecurity = () => {
  const [showPasscode, setShowPasscode] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [agreedToDelete, setAgreedToDelete] = useState(false);

  const securitySettings = [
    {
      id: 1,
      name: 'Activate Face ID',
      description: 'Login in the app using your face.',
      icon: <FiUser className="w-6 h-6" />,
      type: 'toggle',
      enabled: true,
      color: 'blue'
    },
    {
      id: 2,
      name: 'Activate Fingerprint',
      description: 'Login in the app using your fingerprint.',
      icon: <FiUser className="w-6 h-6" />,
      type: 'toggle',
      enabled: true,
      color: 'green'
    },
    {
      id: 3,
      name: 'Passcode Lock',
      description: 'Login in the app using passcode.',
      icon: <FiShield className="w-6 h-6" />,
      type: 'toggle',
      enabled: true,
      color: 'purple'
    },
    {
      id: 4,
      name: 'Spotlight Search',
      description: 'Share information to the device while using spotlight.',
      icon: <FiUser className="w-6 h-6" />,
      type: 'toggle',
      enabled: true,
      color: 'orange'
    },
    {
      id: 5,
      name: 'Analytics',
      description: 'Share usage and crash statistics to improve the app.',
      icon: <FiUser className="w-6 h-6" />,
      type: 'toggle',
      enabled: true,
      color: 'indigo'
    },
    {
      id: 6,
      name: 'Terms of Service',
      description: 'Read our Terms and Conditions of Service.',
      icon: <FiFileText className="w-6 h-6" />,
      type: 'link',
      color: 'gray'
    },
    {
      id: 7,
      name: 'Privacy Policy',
      description: 'Read our agreement Privacy Policy.',
      icon: <FiShield className="w-6 h-6" />,
      type: 'link',
      color: 'gray'
    },
    {
      id: 8,
      name: 'Delete My ReconControl Account',
      description: 'All your data will be deleted permanently.',
      icon: <FiTrash2 className="w-6 h-6" />,
      type: 'delete',
      color: 'red'
    }
  ];

  const handleToggle = (settingId) => {
    // Handle toggle functionality
    console.log(`Toggled setting ${settingId}`);
  };

  const handleSavePasscode = () => {
    if (passcode.length === 4) {
      console.log('Passcode saved:', passcode);
      setPasscode('');
    }
  };

  const handleDeleteAccount = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setShowDeleteModal(false);
    setShowVerificationModal(true);
  };

  const handleVerificationCodeChange = (index, value) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`verification-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerifyCode = () => {
    const code = verificationCode.join('');
    if (code.length === 6) {
      console.log('Verification code:', code);
      // Handle account deletion
      setShowVerificationModal(false);
      setVerificationCode(['', '', '', '', '', '']);
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      gray: 'bg-gray-100 text-gray-600',
      red: 'bg-red-100 text-red-600'
    };
    return colors[color] || colors.gray;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                <FiArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-bold text-gray-900">Privacy and Security</h1>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-4">
          {securitySettings.map((setting) => (
            <div key={setting.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(setting.color)}`}>
                    {setting.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-gray-900">{setting.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{setting.description}</p>
                  </div>
                </div>

                {setting.type === 'toggle' && (
                  <button
                    onClick={() => handleToggle(setting.id)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      setting.enabled ? 'bg-green-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        setting.enabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                )}

                {setting.type === 'link' && (
                  <FiChevronRight className="w-5 h-5 text-gray-400" />
                )}

                {setting.type === 'delete' && (
                  <button
                    onClick={handleDeleteAccount}
                    className="text-red-600 hover:text-red-700 font-medium text-sm"
                  >
                    Delete
                  </button>
                )}
              </div>

              {/* Passcode input for Passcode Lock setting */}
              {setting.id === 3 && setting.enabled && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 relative">
                      <input
                        type={showPasscode ? 'text' : 'password'}
                        placeholder="4 Digits PIN"
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value.replace(/\D/g, '').slice(0, 4))}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button
                        onClick={() => setShowPasscode(!showPasscode)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPasscode ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
                      </button>
                    </div>
                    <button
                      onClick={handleSavePasscode}
                      disabled={passcode.length !== 4}
                      className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Profile picture floating element */}
        {/* <div className="fixed bottom-6 right-6">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <FiUser className="w-6 h-6 text-white" />
          </div>
        </div> */}
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-[#00000080] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Delete My Account
              </button>
            </div>

            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <FiTrash2 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Account Deletion</h3>
              <p className="text-sm text-gray-600">
                Disclaimer: All your data across our services will be deleted. We recommend that you backup your data before proceeding. Deletion is permanent, be Advised, there will be a charge for Data Restore.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <button className="text-blue-600 hover:text-blue-700 text-sm">
                Download My Data
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">I Agree.</span>
                <button
                  onClick={() => setAgreedToDelete(!agreedToDelete)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    agreedToDelete ? 'bg-green-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      agreedToDelete ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Verification Modal */}
      {showVerificationModal && (
        <div className="fixed inset-0 bg-[#00000080] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setShowVerificationModal(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleVerifyCode}
                disabled={verificationCode.join('').length !== 6}
                className="text-red-600 hover:text-red-700 font-medium disabled:opacity-50"
              >
                Continue
              </button>
            </div>

            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <FiTrash2 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Account Deletion</h3>
              <p className="text-sm text-gray-600 mb-2">
                Enter the Verification Code that We have sent on your email
              </p>
              <p className="text-sm text-blue-600">ex******@gmail.com</p>
            </div>

            <div className="flex justify-center space-x-2 mb-6">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  id={`verification-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleVerificationCodeChange(index, e.target.value.replace(/\D/g, ''))}
                  className="w-12 h-12 text-center border border-gray-300 rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacySecurity;
