import React from 'react';
import { FiArrowLeft, FiDownload, FiEye } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Documents = () => {
  const navigate = useNavigate();

  // Sample documents data
  const documents = [
    {
      id: 1,
      name: 'Contract',
      date: '12/02/2025, 9:30 PM',
      type: 'pdf',
      // hasProfile: true,
      // profileAvatar: '👨',
      profileName: 'John Rambo'
    },
    {
      id: 2,
      name: 'Auto Insurance',
      date: '12/02/2025, 9:30 PM',
      type: 'pdf'
    },
    {
      id: 3,
      name: 'Workers Compensation',
      date: '12/02/2025, 9:30 PM',
      type: 'pdf'
    },
    {
      id: 4,
      name: 'Liability',
      date: '12/02/2025, 9:30 PM',
      type: 'pdf'
    }
  ];

  const handleDownload = (documentId) => {
    // Handle document download
    console.log('Downloading document:', documentId);
  };

  const handleView = (documentId) => {
    // Handle document view
    console.log('Viewing document:', documentId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FiArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Documents</h1>
        </div>
      </div>

      {/* Documents List */}
      <div className="p-4 space-y-4">
        {documents.map((document) => (
          <div key={document.id} className="bg-white rounded-lg p-4 border border-gray-200 relative">
            {/* Profile Overlay for Contract */}
            {document.hasProfile && (
              <div className="absolute -top-2 -left-2 z-10">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-lg border-2 border-white shadow-lg">
                    {document.profileAvatar}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-pink-300 rounded-full border-2 border-white"></div>
                </div>
                <div className="mt-2 text-center">
                  <p className="text-xs text-gray-600 font-medium">{document.profileName}</p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* PDF Icon */}
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <FiDownload className="w-5 h-5 text-red-500" />
                </div>
                
                {/* Document Info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{document.name}</h3>
                  <p className="text-sm text-gray-600">{document.date}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleDownload(document.id)}
                  className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                  title="Download"
                >
                  <FiDownload className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleView(document.id)}
                  className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                  title="View"
                >
                  <FiEye className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {documents.length === 0 && (
        <div className="p-8 text-center">
          <div className="text-gray-400 text-6xl mb-4">📄</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
          <p className="text-gray-600">Upload documents to get started</p>
        </div>
      )}
    </div>
  );
};

export default Documents;
