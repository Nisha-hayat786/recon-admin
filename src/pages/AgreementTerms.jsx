import React, { useState } from 'react';
import { FiArrowLeft, FiRefreshCw, FiFileText, FiCheck, FiX, FiSend, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const AgreementTerms = () => {
  const navigate = useNavigate();
  const [showMoreTerms, setShowMoreTerms] = useState(false);
  const [showMoreRemarks, setShowMoreRemarks] = useState(false);
  const [showMorePayment, setShowMorePayment] = useState(false);
  const [message, setMessage] = useState('');
  const [revisionStatus, setRevisionStatus] = useState('Ongoing'); // 'Ongoing' or 'Resolved'

  // Sample agreement data
  const agreement = {
    id: 'AT123456789',
    company: {
      name: 'Smart Car Wash',
      accountId: '451351354-1',
      status: 'Active',
      logo: '🚗'
    },
    dates: {
      agreed: '12/02/2025, 9:30 PM',
      start: '12/02/2025, 9:30 PM',
      end: '12/02/2025, 9:30 PM'
    },
    autoInvoice: 'Every Week on Fridays',
    items: [
      {
        name: 'Cleaner',
        description: 'Lorem ipsum dolor sit amet consectetur. Mauris pellentesque sed quam bibendum dignissim amet amet. Enim viverra viverra lectus suscipit ac.',
        qty: '5 PCS',
        price: '$123.00',
        taxable: 'Yes'
      },
      {
        name: 'Cleaner',
        description: 'Lorem ipsum dolor sit amet consectetur. Mauris pellentesque sed quam bibendum dignissim amet amet. Enim viverra viverra lectus suscipit ac.',
        qty: '5 PCS',
        price: '$123.00',
        taxable: 'Yes'
      },
      {
        name: 'Cleaner',
        description: 'Lorem ipsum dolor sit amet consectetur. Mauris pellentesque sed quam bibendum dignissim amet amet. Enim viverra viverra lectus suscipit ac.',
        qty: '5 PCS',
        price: '$123.00',
        taxable: 'Yes'
      }
    ],
    terms: 'Lorem ipsum dolor sit amet consectetur. Mauris pellentesque sed quam bibendum dignissim amet amet. Enim viverra viverra lectus suscipit ac. Lorem ipsum dolor sit amet consectetur. Mauris pellentesque sed quam bibendum dignissim amet amet. Enim viverra viverra lectus suscipit ac.',
    remarks: 'Lorem ipsum dolor sit amet consectetur. Mauris pellentesque sed quam bibendum dignissim amet amet. Enim viverra viverra lectus suscipit ac.',
    paymentTerms: 'Lorem ipsum dolor sit amet consectetur. Mauris pellentesque sed quam bibendum dignissim amet amet. Enim viverra viverra lectus suscipit ac.',
    billsTo: 'Lorem ipsum dolor sit amet consectetur. Mauris pellentesque sed quam bibendum dignissim amet amet. Enim viverra viverra lectus suscipit ac.',
    revisions: [
      {
        id: 1,
        name: 'John Rambo',
        role: 'Manager',
        avatar: '👨',
        timestamp: '12/02/2025, 9:30 PM',
        message: 'Lorem ipsum dolor sit amet consectetur. Mauris pellentesque sed quam bibendum dignissim amet amet. Enim viverra viverra lectus suscipit ac.',
        showMore: false
      },
      {
        id: 2,
        name: 'Vendor',
        role: 'Manager',
        avatar: '👨‍💼',
        timestamp: '12/02/2025, 9:30 PM',
        message: 'Lorem ipsum dolor sit amet consectetur. Mauris pellentesque sed quam bibendum dignissim amet amet. Enim viverra viverra lectus suscipit ac.',
        showMore: false
      }
    ]
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">Agreement Terms</h1>
          </div>
          <div className="text-blue-600 font-medium">#{agreement.id}</div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Company Information */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                {agreement.company.logo}
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">{agreement.company.name}</h2>
                <p className="text-sm text-gray-600">Account ID: {agreement.company.accountId}</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
              {agreement.company.status}
            </span>
          </div>
        </div>

        {/* Agreement Dates and Auto Invoice */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-green-600 font-medium">Agreed On {agreement.dates.agreed}</p>
              <p className="text-sm text-blue-600 font-medium">Starts On {agreement.dates.start}</p>
              <p className="text-sm text-red-600 font-medium">Expires On {agreement.dates.end}</p>
            </div>
            <div className="flex items-start gap-2">
              <FiRefreshCw className="w-4 h-4 text-gray-400 mt-1" />
              <div>
                <p className="text-sm text-gray-600">Auto Invoice on:</p>
                <p className="text-sm text-gray-800">{agreement.autoInvoice}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-3">
            <div className="grid grid-cols-4 gap-4 text-sm font-medium">
              <div>Item</div>
              <div>Qty</div>
              <div>Price</div>
              <div>Taxable</div>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {agreement.items.map((item, index) => (
              <div key={index} className="p-4">
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-1">
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="text-gray-700">{item.qty}</div>
                  <div className="text-gray-700 font-medium">{item.price}</div>
                  <div className="text-gray-700">{item.taxable}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agreement Terms and Conditions */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Agreement Terms and Conditions</h3>
          <div className="text-sm text-gray-700 leading-relaxed">
            {showMoreTerms ? (
              <p>{agreement.terms}</p>
            ) : (
              <p>{agreement.terms.substring(0, 150)}...</p>
            )}
            <button 
              onClick={() => setShowMoreTerms(!showMoreTerms)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2"
            >
              {showMoreTerms ? 'See less...' : 'See more...'}
            </button>
          </div>
        </div>

        {/* Agreement Remarks */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Agreement Remarks</h3>
          <div className="text-sm text-gray-700 leading-relaxed">
            {showMoreRemarks ? (
              <p>{agreement.remarks}</p>
            ) : (
              <p>{agreement.remarks.substring(0, 150)}...</p>
            )}
            <button 
              onClick={() => setShowMoreRemarks(!showMoreRemarks)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2"
            >
              {showMoreRemarks ? 'See less...' : 'See more...'}
            </button>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Payment Terms</h3>
          <div className="text-sm text-gray-700 leading-relaxed">
            {showMorePayment ? (
              <p>{agreement.paymentTerms}</p>
            ) : (
              <p>{agreement.paymentTerms.substring(0, 150)}...</p>
            )}
            <button 
              onClick={() => setShowMorePayment(!showMorePayment)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2"
            >
              {showMorePayment ? 'See less...' : 'See more...'}
            </button>
          </div>
        </div>

        {/* Bills To Section */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Bills To</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">{agreement.billsTo}</p>
          <div className="flex items-center gap-2 mb-4">
            <FiFileText className="w-5 h-5 text-red-500" />
            <span className="text-sm text-gray-700">Contract.pdf</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" id="terms" className="rounded" defaultChecked />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I have Read The <span className="text-blue-600 cursor-pointer">Terms and Conditions</span>
            </label>
          </div>
          <div className="space-y-3">
            <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
              <FiUser className="w-4 h-4" />
              I Accept The Terms and Conditions
            </button>
            <button className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Request Revision
            </button>
            <button className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors">
              I Deny The Terms and Conditions
            </button>
          </div>
        </div>

        {/* Revision Notice */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-blue-600 cursor-pointer">Revision Notice</h3>
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              revisionStatus === 'Ongoing' 
                ? 'bg-orange-100 text-orange-700' 
                : 'bg-green-100 text-green-700'
            }`}>
              {revisionStatus}
            </span>
          </div>
          
          <div className="space-y-4">
            {agreement.revisions.map((revision) => (
              <div key={revision.id} className="flex gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-lg">
                  {revision.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium text-gray-900">{revision.name}</p>
                      <p className="text-sm text-gray-600">{revision.role}</p>
                    </div>
                    <span className="text-xs text-gray-500">{revision.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    {revision.message}
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                    <FiArrowLeft className="w-3 h-3 transform rotate-180" />
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="Start typing..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FiSend className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreementTerms;
