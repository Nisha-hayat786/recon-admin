import React, { useState } from 'react';
import { FiX, FiChevronDown, FiUser } from 'react-icons/fi';

const AddVehicleRemarkModal = ({ isOpen, onClose, onAdd }) => {
  const [remarkData, setRemarkData] = useState({
    type: '',
    where: '',
    description: '',
    assessment: '',
    resolved: true,
    images: []
  });

  const handleInputChange = (field, value) => {
    setRemarkData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    onAdd(remarkData);
    onClose();
    // Reset form
    setRemarkData({
      type: '',
      where: '',
      description: '',
      assessment: '',
      resolved: true,
      images: []
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            Cancel
          </button>
          <h2 className="text-xl font-semibold text-gray-900">Vehicle Remark</h2>
          <button
            onClick={handleSubmit}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Save
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          {/* Type */}
          <div>
            <input
              type="text"
              placeholder="Type"
              value={remarkData.type}
              onChange={(e) => handleInputChange('type', e.target.value)}
              className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Where */}
          <div>
            <input
              type="text"
              placeholder="Where"
              value={remarkData.where}
              onChange={(e) => handleInputChange('where', e.target.value)}
              className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-blue-600 font-medium mb-2">Description</label>
            <textarea
              value={remarkData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Lorem ipsum dolor sit amet consectetur. Dignissim quis id eu id tristique elementum arcu scelerisque."
              className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 resize-none"
              rows={4}
              maxLength={200}
            />
            <div className="text-right mt-2">
              <span className="text-xs text-gray-500">
                {remarkData.description.length}/200 Characters
              </span>
            </div>
          </div>

          {/* Assessment */}
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Assessment"
                value={remarkData.assessment}
                onChange={(e) => handleInputChange('assessment', e.target.value)}
                className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center relative">
                <FiUser className="w-6 h-6 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs">💬</span>
                </div>
              </div>
              <FiChevronDown className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* Resolved Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Resolved?</span>
            <button
              type="button"
              onClick={() => handleInputChange('resolved', !remarkData.resolved)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                remarkData.resolved ? 'bg-green-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  remarkData.resolved ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Upload Images */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Upload Images</label>
            <div className="flex space-x-4">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-gray-400 cursor-pointer"
                >
                  <div className="text-gray-400 text-2xl">+</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVehicleRemarkModal;
