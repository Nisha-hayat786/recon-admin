import React, { useState } from 'react';
import { FiArrowLeft, FiMessageCircle, FiMail, FiPhone, FiCheck, FiX, FiPaperclip, FiFileText, FiDownload, FiEye } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';

const DebitCreditNoteDetail = () => {
  const navigate = useNavigate();
  const { noteId, type } = useParams(); // type will be 'debit' or 'credit'
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Sample data - in real app, this would come from API based on noteId
  const noteData = {
    id: noteId || 'DN-453531312',
    type: type || 'debit',
    status: type === 'debit' ? 'New' : 'Received',
    date: '12/02/2025',
    invoiceNumber: 'IN-564645313',
    workOrderNumber: 'WO-564645313',
    dueDate: '12/02/2025',
    amountDue: 45000,
    creditAmount: 45000,
    remainingBalance: 25000,
    company: 'Smart Car Wash',
    email: 'admin@smartcarwash.com',
    phone: '+1321644654641',
    unreadMessages: 2,
    description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corp er neque pulvinar aliquam urna.',
    appliedCredits: [
      { date: '12/02/2025', amount: 45000, invoice: 'IN-564645313', workOrder: 'WO-564645313', isReceived: type === 'credit' ? false : true },
      { date: '12/02/2025', amount: 45000, invoice: 'IN-564645313', workOrder: 'WO-564645313', isReceived: type === 'credit' ? true : true }
    ],
    messages: [
      {
        id: 1,
        sender: 'John Rambo',
        role: 'Manager',
        avatar: '👨‍💼',
        message: 'Lorem ipsum dolor sit amet consectetur. Mauris pellentesque sed quam bibendum dignissim amet amet. Enim viverra viverra lectus suscipit ac.',
        timestamp: '12/02/2025, 9:30 PM',
        isTruncated: true
      },
      {
        id: 2,
        sender: 'Vendor',
        role: 'Manager',
        avatar: '👨‍💼',
        message: 'Lorem ipsum dolor sit amet consectetur. Mauris pellentesque sed quam bibendum dignissim amet amet. Enim viverra viverra lectus suscipit ac.',
        timestamp: '12/02/2025, 9:30 PM',
        isTruncated: true
      }
    ],
    attachments: [
      {
        id: 1,
        name: 'Liability.pdf',
        type: 'pdf',
        date: '12/03/2025, 9:30 PM',
        size: '2.4 MB'
      },
      {
        id: 2,
        name: 'Liability.pdf',
        type: 'pdf',
        date: '12/02/2025, 9:30 PM',
        size: '2.4 MB'
      },
      {
        id: 3,
        name: 'Receipt.JPG',
        type: 'image',
        date: '12/03/2025, 9:30 PM',
        size: '1.8 MB'
      }
    ]
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      'New': { bg: 'bg-blue-500', text: 'text-white' },
      'Accepted': { bg: 'bg-green-500', text: 'text-white' },
      'Declined': { bg: 'bg-red-400', text: 'text-white' },
      'Sent': { bg: 'bg-blue-500', text: 'text-white' },
      'Received': { bg: 'bg-green-500', text: 'text-white' },
      'Partially': { bg: 'bg-yellow-400', text: 'text-white' }
    };
    
    const config = statusConfig[status] || { bg: 'bg-gray-400', text: 'text-white' };
    return (
      <span className={`${config.bg} ${config.text} px-3 py-1 rounded-full text-xs font-medium`}>
        {status}
      </span>
    );
  };

  const getFileIcon = (type) => {
    if (type === 'pdf') {
      return (
        <div className="w-10 h-10 bg-red-500 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">PDF</span>
        </div>
      );
    }
    return (
      <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
        <FiFileText className="w-5 h-5 text-gray-600" />
      </div>
    );
  };

  const handleAccept = () => {
    console.log('Accepted:', noteData.id);
    // Handle acceptance logic here
  };

  const handleDecline = () => {
    console.log('Declined:', noteData.id);
    // Handle decline logic here
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Header Information */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-blue-600">{noteData.id}</h3>
          <p className="text-sm text-gray-500">{noteData.date}</p>
        </div>
        <div className="flex items-center space-x-3">
          {getStatusBadge(noteData.status)}
          <div className="flex items-center space-x-1 text-gray-600">
            <FiMessageCircle className="w-4 h-4" />
            <span className="text-sm">{noteData.unreadMessages}</span>
          </div>
        </div>
      </div>

      {/* Financial Details */}
      {noteData.type === 'debit' ? (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Invoice Number</label>
            <div className="text-blue-600 underline cursor-pointer">{noteData.invoiceNumber}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Work Order Number</label>
            <div className="text-blue-600 underline cursor-pointer">{noteData.workOrderNumber}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Due On</label>
            <div className="text-red-600">{noteData.dueDate}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount Due</label>
            <div className="text-red-600 font-semibold">${noteData.amountDue.toLocaleString()}</div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Credit Amount</label>
            <div className="text-blue-600 font-semibold">${noteData.creditAmount.toLocaleString()}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Remaining Balance</label>
            <div className="text-green-600 font-semibold">${noteData.remainingBalance.toLocaleString()}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Related Debit Note</label>
            <div className="text-blue-600 underline cursor-pointer">DN-453531312</div>
          </div>
        </div>
      )}

      {/* Description */}
      <div>
        <h4 className="font-medium text-gray-900 mb-2">Description</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{noteData.description}</p>
      </div>

      {/* Company Information */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-3">Company Information</h4>
        <div className="space-y-2">
          <div className="font-medium text-gray-900">{noteData.company}</div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <FiMail className="w-4 h-4" />
              <span>{noteData.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiPhone className="w-4 h-4" />
              <span>{noteData.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Applied Credit Information */}
      {noteData.appliedCredits.length > 0 && (
        <div>
          <h4 className="font-medium text-gray-900 mb-3">
            {noteData.type === 'credit' ? 'Applied Credit Information' : 'Applied Credits'}
          </h4>
          <div className="space-y-3">
            {noteData.appliedCredits.map((credit, index) => (
              <div key={index} className={`bg-green-50 p-3 rounded-lg ${credit.isReceived ? 'bg-green-200' : ''}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {noteData.type === 'credit' && (
                      <input
                        type="checkbox"
                        checked={credit.isReceived}
                        readOnly
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                    )}
                    <span className="text-sm text-gray-600">{credit.date}</span>
                    <span className="text-sm font-medium text-gray-900">
                      Applied Amount: ${credit.amount.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-blue-600 underline cursor-pointer">Invoice#: {credit.invoice}</span>
                  <span className="text-blue-600 underline cursor-pointer">Work Order#: {credit.workOrder}</span>
                </div>
              </div>
            ))}
                     </div>
         </div>
       )}

       {/* Action Buttons */}
       <div className="flex space-x-4 pt-4 border-t border-gray-200">
         <button
           onClick={() => setShowAddItemModal(true)}
           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
         >
           Add Item
         </button>
         <button
           onClick={() => setShowTermsModal(true)}
           className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
         >
           Terms & Conditions
         </button>
       </div>
     </div>
   );

  const renderMessages = () => (
    <div className="space-y-4">
      {noteData.messages.map((message) => (
        <div key={message.id} className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
              {message.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">{message.sender}</h4>
                  <p className="text-sm text-gray-500">{message.role}</p>
                </div>
                <span className="text-sm text-gray-500">{message.timestamp}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                {message.message}
              </p>
              {message.isTruncated && (
                <button className="text-blue-600 text-sm hover:underline">See more...</button>
              )}
              <div className="flex justify-end mt-2">
                <button className="text-blue-600 text-sm hover:underline flex items-center space-x-1">
                  <span>Reply</span>
                  <FiArrowLeft className="w-3 h-3 transform rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Message Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Start typing..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700">
            <FiArrowLeft className="w-4 h-4 transform rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderAttachments = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Attachments</h3>
        <button className="text-green-600 font-medium">Done</button>
      </div>
      
      {noteData.attachments.map((file) => (
        <div key={file.id} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex items-center space-x-3">
            {getFileIcon(file.type)}
            <div>
              <h4 className="font-medium text-gray-900">{file.name}</h4>
              <p className="text-sm text-gray-500">{file.date} • {file.size}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200">
              <FiArrowLeft className="w-3 h-3 transform rotate-180 text-blue-600" />
            </button>
            <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200">
              <FiFileText className="w-3 h-3 text-blue-600" />
            </button>
            <button className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200">
              <FiX className="w-3 h-3 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAddItemModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button
            onClick={() => setShowAddItemModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            Cancel
          </button>
          <h2 className="text-xl font-semibold text-gray-900">Adding Item</h2>
          <button className="text-green-600 font-medium">Save</button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          <div className="space-y-6">
            {/* Item Type Selection */}
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="itemType"
                  value="good"
                  className="w-4 h-4 text-blue-600 border-gray-300"
                />
                <span className="text-gray-700">Good</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="itemType"
                  value="service"
                  defaultChecked
                  className="w-4 h-4 text-blue-600 border-gray-300"
                />
                <span className="text-blue-600 font-medium">Service</span>
              </label>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Item Name"
                  className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">Description</label>
                <textarea
                  placeholder="Lorem ipsum dolor sit amet consectetur. Dignissim quis id eu id tristique elementum arcu scelerisque."
                  rows={3}
                  className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 resize-none"
                />
                <div className="text-right text-sm text-gray-500 mt-1">0/200 Characters</div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-700">Taxable</span>
                <div className="relative inline-block w-12 mr-2 align-middle select-none">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Quantity / Unit of Measures"
                  className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Unit Price"
                  className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Discount"
                  className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Total Display */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <span className="text-blue-600 font-medium">Total</span>
              <span className="text-gray-900 font-semibold">$ 5,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTermsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button
            onClick={() => setShowTermsModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            Cancel
          </button>
          <h2 className="text-xl font-semibold text-gray-900">Terms & conditions</h2>
          <button className="text-green-600 font-medium">Pay</button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          <div className="space-y-6">
            {/* Due Date and Amount Section */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Due in Days</label>
                <div className="flex items-center justify-between px-3 py-3 border-b border-gray-300">
                  <span className="text-gray-900">7 Days</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Due On</label>
                <div className="flex items-center justify-between px-3 py-3 border-b border-gray-300">
                  <span className="text-gray-900">12/02/2025</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Amount Due</label>
              <input
                type="text"
                placeholder=""
                className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Terms & Conditions */}
            <div>
              <h4 className="text-blue-600 font-medium mb-2">Terms & Conditions</h4>
              <textarea
                placeholder="Lorem ipsum dolor sit amet consectetur. Dignissim quis id eu id tristique elementum arcu scelerisque."
                rows={4}
                className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 resize-none"
              />
              <div className="text-right text-sm text-gray-500 mt-1">0/200 Characters</div>
            </div>

            {/* Payment Terms */}
            <div>
              <h4 className="text-blue-600 font-medium mb-2">Payment Terms</h4>
              <textarea
                placeholder="Lorem ipsum dolor sit amet consectetur. Dignissim quis id eu id tristique elementum arcu scelerisque."
                rows={4}
                className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 resize-none"
              />
              <div className="text-right text-sm text-gray-500 mt-1">0/200 Characters</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📋' },
    { id: 'messages', name: 'Messages', icon: '💬' },
    { id: 'attachments', name: 'Attachments', icon: '📎' }
  ];

  return (
    <>
      <style jsx>{`
        .toggle-checkbox:checked {
          right: 0;
          border-color: #10b981;
        }
        .toggle-checkbox:checked + .toggle-label {
          background-color: #10b981;
        }
        .toggle-label {
          transition: background-color 0.2s ease-in-out;
        }
      `}</style>
      <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4">
        <div className="flex items-center space-x-4 mb-4">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-400"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold">
            {noteData.type === 'debit' ? 'Debit Note' : 'Credit Note'} Details
          </h1>
        </div>
        
        {/* Entity Header */}
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚗</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{noteData.company}</h3>
                <p className="text-sm text-gray-600">Account ID: 451351354-1</p>
              </div>
            </div>
            <div className="text-right">
              {getStatusBadge(noteData.status)}
              <div className="text-blue-600 text-sm mt-1">#{noteData.id}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {/* Action Buttons */}
        {noteData.type === 'debit' && noteData.status === 'New' && (
          <div className="flex justify-end space-x-3 mb-6">
            <button
              onClick={handleDecline}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Accept
            </button>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6 bg-white rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="text-sm font-medium">{tab.name}</span>
            </button>
          ))}
        </div>

                 {/* Tab Content */}
         <div className="bg-white rounded-lg shadow-sm p-6">
           {activeTab === 'overview' && renderOverview()}
           {activeTab === 'messages' && renderMessages()}
           {activeTab === 'attachments' && renderAttachments()}
         </div>
       </div>

       {/* Modals */}
       {showAddItemModal && renderAddItemModal()}
       {showTermsModal && renderTermsModal()}
     </div>
     </>
   );
};

export default DebitCreditNoteDetail;
