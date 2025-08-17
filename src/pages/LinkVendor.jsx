import React, { useState } from 'react';
import { FiArrowLeft, FiChevronDown, FiLink } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const LinkVendor = () => {
  console.log('LinkVendor component rendering');
  const navigate = useNavigate();
  const [relationLevel, setRelationLevel] = useState('');
  const [vendorId, setVendorId] = useState('');
  const [showRelationDropdown, setShowRelationDropdown] = useState(false);
  const [entityType, setEntityType] = useState('vendor'); // 'vendor' or 'customer'

  // Relation level options
  const relationOptions = [
    { value: 'contract', label: 'Contract' },
    { value: 'preferred', label: 'Preferred' },
    { value: 'partner', label: 'Partner' },
    { value: 'provider', label: 'Provider' }
  ];

  const handleLink = () => {
    if (relationLevel && vendorId) {
      // Handle linking logic here
      console.log('Linking:', { entityType, relationLevel, vendorId });
      // Navigate back or show success message
      navigate(-1);
    }
  };

  const handleRelationSelect = (option) => {
    setRelationLevel(option.value);
    setShowRelationDropdown(false);
  };

  const toggleEntityType = () => {
    setEntityType(prev => prev === 'vendor' ? 'customer' : 'vendor');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            Cancel
          </button>
          <button 
            onClick={handleLink}
            disabled={!relationLevel || !vendorId}
            className="text-green-600 hover:text-green-700 font-medium disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            Link
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        {/* Entity Type Toggle */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-1 border border-gray-200">
            <div className="flex">
              <button
                onClick={() => setEntityType('vendor')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  entityType === 'vendor' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Vendor
              </button>
              <button
                onClick={() => setEntityType('customer')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  entityType === 'customer' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Customer
              </button>
            </div>
          </div>
        </div>

        {/* Store Icon */}
        <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-6 relative">
          <FiStore className="w-12 h-12 text-white" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <FiLink className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">
          Link {entityType === 'vendor' ? 'Vendor' : 'Customer'}
        </h1>

        {/* Relation Level Selector */}
        <div className="w-full max-w-md mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Relation Level
          </label>
          <div className="relative">
            <button
              onClick={() => setShowRelationDropdown(!showRelationDropdown)}
              className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <span className={relationLevel ? 'text-gray-900' : 'text-gray-500'}>
                {relationLevel ? relationOptions.find(opt => opt.value === relationLevel)?.label : 'Select relation level'}
              </span>
              <FiChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showRelationDropdown ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown */}
            {showRelationDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                {relationOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleRelationSelect(option)}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Vendor/Customer ID Input */}
        <div className="w-full max-w-md">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {entityType === 'vendor' ? 'Vendor' : 'Customer'} ID
          </label>
          <div className="flex gap-2">
            {[0, 0, 0, 0, 0, 0].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={vendorId[index] || ''}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (newValue.length <= 1) {
                    const newVendorId = vendorId.split('');
                    newVendorId[index] = newValue;
                    setVendorId(newVendorId.join(''));
                    
                    // Auto-focus next input
                    if (newValue && index < 5) {
                      const nextInput = e.target.parentElement.nextElementSibling?.querySelector('input');
                      if (nextInput) nextInput.focus();
                    }
                  }
                }}
                onKeyDown={(e) => {
                  // Handle backspace
                  if (e.key === 'Backspace' && !vendorId[index] && index > 0) {
                    const newVendorId = vendorId.split('');
                    newVendorId[index - 1] = '';
                    setVendorId(newVendorId.join(''));
                    const prevInput = e.target.parentElement.previousElementSibling?.querySelector('input');
                    if (prevInput) prevInput.focus();
                  }
                }}
                className="w-12 h-12 text-center text-xl font-mono border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex justify-center gap-8">
          <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            </div>
          </button>
          <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-gray-600 rounded"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkVendor;

