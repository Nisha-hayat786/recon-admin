import React, { useState } from 'react';
import { FiArrowLeft, FiSearch, FiFilter, FiEye, FiMessageCircle, FiMoreVertical, FiCheck, FiX, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const DebitCreditNotes = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('debit-notes');
  const [viewMode, setViewMode] = useState('sent'); // 'received' or 'sent'
  const [selectedNote, setSelectedNote] = useState(null);

  // Sample debit notes data
  const debitNotes = [
    {
      id: 'DN-453531312',
      status: 'New',
      date: '12/02/2025',
      invoiceNumber: 'IN-564645313',
      workOrderNumber: 'WO-564645313',
      dueDate: '12/02/2025',
      amountDue: 45000,
      company: 'Smart Car Wash',
      email: 'admin@smartcarwash.com',
      phone: '+1321644654641',
      unreadMessages: 2,
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corp er neque pulvinar aliquam urna.',
      appliedCredits: [
        { date: '12/02/2025', amount: 45000, invoice: 'IN-564645313', workOrder: 'WO-564645313' },
        { date: '12/02/2025', amount: 45000, invoice: 'IN-564645313', workOrder: 'WO-564645313' }
      ]
    },
    {
      id: 'DN-453531312',
      status: 'Declined',
      date: '12/02/2025',
      invoiceNumber: 'IN-564645313',
      workOrderNumber: 'WO-564645313',
      dueDate: '12/02/2025',
      amountDue: 45000,
      company: 'Smart Car Wash',
      email: 'admin@smartcarwash.com',
      phone: '+1321644654641',
      unreadMessages: 3,
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corp er neque pulvinar aliquam urna.',
      appliedCredits: []
    },
    {
      id: 'DN-453531312',
      status: 'Declined',
      date: '12/02/2025',
      invoiceNumber: 'IN-564645313',
      workOrderNumber: 'WO-564645313',
      dueDate: '12/02/2025',
      amountDue: 45000,
      company: 'Smart Car Wash',
      email: 'admin@smartcarwash.com',
      phone: '+1321644654641',
      unreadMessages: 3,
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corp er neque pulvinar aliquam urna.',
      appliedCredits: []
    }
  ];

  // Sample credit notes data
  const creditNotes = [
    {
      id: 'CN-453531312',
      status: 'Received',
      date: '12/02/2025',
      creditAmount: 45000,
      remainingBalance: 25000,
      company: 'Smart Car Wash',
      email: 'admin@smartcarwash.com',
      phone: '+1321644654641',
      debitNoteId: 'DN-453531312',
      unreadMessages: 2,
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corp er neque pulvinar aliquam urna.',
      appliedCredits: []
    },
    {
      id: 'CN-453531312',
      status: 'Partially',
      date: '12/02/2025',
      creditAmount: 45000,
      remainingBalance: 25000,
      company: 'Smart Car Wash',
      email: 'admin@smartcarwash.com',
      phone: '+1321644654641',
      debitNoteId: 'DN-453531312',
      unreadMessages: 1,
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corp er neque pulvinar aliquam urna.',
      appliedCredits: [
        { date: '12/02/2025', amount: 45000, invoice: 'IN-564645313', workOrder: 'WO-564645313', isReceived: false },
        { date: '12/02/2025', amount: 45000, invoice: 'IN-564645313', workOrder: 'WO-564645313', isReceived: true }
      ]
    }
  ];

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

  const handleViewDetails = (note) => {
    const noteType = activeTab === 'debit-notes' ? 'debit' : 'credit';
    navigate(`/admin/reports/debit-credit-notes/${noteType}/${note.id}`);
  };

  const handleAccept = (noteId) => {
    console.log('Accepted:', noteId);
    // Handle acceptance logic here
  };

  const handleDecline = (noteId) => {
    console.log('Declined:', noteId);
    // Handle decline logic here
  };

  const renderDebitNotesTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Debit Note ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount Due
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Messages
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {debitNotes.map((note, index) => (
            <tr key={`${note.id}-${index}`} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-blue-600">{note.id}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{note.date}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">{note.company}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-semibold text-red-600">${note.amountDue.toLocaleString()}</div>
              </td>
              <td className="px-6 py-4">
                {getStatusBadge(note.status)}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-1">
                  <FiMessageCircle className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-900">{note.unreadMessages}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleViewDetails(note)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <FiEye className="w-4 h-4" />
                  </button>
                  {note.status === 'New' && (
                    <>
                      <button
                        onClick={() => handleAccept(note.id)}
                        className="text-green-600 hover:text-green-700"
                      >
                        <FiCheck className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDecline(note.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <FiX className="w-4 h-4" />
                      </button>
                    </>
                  )}
                  <button className="text-gray-400 hover:text-gray-600">
                    <FiMoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderCreditNotesTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Credit Note ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Credit Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Remaining Balance
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {creditNotes.map((note, index) => (
            <tr key={`${note.id}-${index}`} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-blue-600">{note.id}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{note.date}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">{note.company}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-semibold text-blue-600">${note.creditAmount.toLocaleString()}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-semibold text-green-600">${note.remainingBalance.toLocaleString()}</div>
              </td>
              <td className="px-6 py-4">
                {getStatusBadge(note.status)}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleViewDetails(note)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <FiEye className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <FiMoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderModal = () => {
    if (!selectedNote || !showModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              {activeTab === 'debit-notes' ? 'Debit Note Details' : 'Credit Note Details'} - {selectedNote.id}
            </h2>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 overflow-y-auto max-h-96">
            <div className="space-y-6">
              {/* Header Information */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-blue-600">{selectedNote.id}</h3>
                  <p className="text-sm text-gray-500">{selectedNote.date}</p>
                </div>
                <div className="flex items-center space-x-3">
                  {getStatusBadge(selectedNote.status)}
                  <div className="flex items-center space-x-1 text-gray-600">
                    <FiMessageCircle className="w-4 h-4" />
                    <span className="text-sm">{selectedNote.unreadMessages}</span>
                  </div>
                </div>
              </div>

              {/* Financial Details */}
              {activeTab === 'debit-notes' ? (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Invoice Number</label>
                    <div className="text-blue-600 underline cursor-pointer">{selectedNote.invoiceNumber}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Work Order Number</label>
                    <div className="text-blue-600 underline cursor-pointer">{selectedNote.workOrderNumber}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Due On</label>
                    <div className="text-red-600">{selectedNote.dueDate}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Amount Due</label>
                    <div className="text-red-600 font-semibold">${selectedNote.amountDue.toLocaleString()}</div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Credit Amount</label>
                    <div className="text-blue-600 font-semibold">${selectedNote.creditAmount.toLocaleString()}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Remaining Balance</label>
                    <div className="text-green-600 font-semibold">${selectedNote.remainingBalance.toLocaleString()}</div>
                  </div>
                  {selectedNote.debitNoteId && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Related Debit Note</label>
                      <div className="text-blue-600 underline cursor-pointer">{selectedNote.debitNoteId}</div>
                    </div>
                  )}
                </div>
              )}

              {/* Description */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{selectedNote.description}</p>
              </div>

              {/* Company Information */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Company Information</h4>
                <div className="space-y-2">
                  <div className="font-medium text-gray-900">{selectedNote.company}</div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <FiMail className="w-4 h-4" />
                      <span>{selectedNote.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiPhone className="w-4 h-4" />
                      <span>{selectedNote.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applied Credit Information (for Credit Notes) */}
              {activeTab === 'credit-notes' && selectedNote.appliedCredits.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Applied Credit Information</h4>
                  <div className="space-y-3">
                    {selectedNote.appliedCredits.map((credit, index) => (
                      <div key={index} className={`bg-green-50 p-3 rounded-lg ${credit.isReceived ? 'bg-green-200' : ''}`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              checked={credit.isReceived}
                              readOnly
                              className="w-4 h-4 text-blue-600 rounded"
                            />
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

              {/* Applied Credits (for Debit Notes) */}
              {activeTab === 'debit-notes' && selectedNote.appliedCredits && selectedNote.appliedCredits.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Applied Credits</h4>
                  <div className="space-y-3">
                    {selectedNote.appliedCredits.map((credit, index) => (
                      <div key={index} className="bg-green-50 p-3 rounded-lg">
                        <div className="flex justify-between text-sm">
                          <span>Date: {credit.date}</span>
                          <span>Applied Amount: ${credit.amount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between mt-1 text-sm">
                          <span className="text-blue-600 underline cursor-pointer">Invoice#: {credit.invoice}</span>
                          <span className="text-blue-600 underline cursor-pointer">Work Order#: {credit.workOrder}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="p-6 border-t border-gray-200 flex justify-between">
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Close
            </button>
            {activeTab === 'debit-notes' && selectedNote.status === 'New' && (
              <div className="flex space-x-3">
                <button
                  onClick={() => handleDecline(selectedNote.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Decline
                </button>
                <button
                  onClick={() => handleAccept(selectedNote.id)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Accept
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
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
          <h1 className="text-xl font-semibold">Debit & Credit Notes</h1>
        </div>
        
        {/* Spotlight Search */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <span className="text-sm font-medium">Q</span>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-8 pr-4 py-3 bg-white text-gray-900 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {/* Search and Filter */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1 relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="w-12 h-12 bg-white rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50">
            <FiFilter className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('debit-notes')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'debit-notes'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <span>💰</span>
              <span>Debit Notes</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('credit-notes')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'credit-notes'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <span>📋</span>
              <span>Credit Notes</span>
            </div>
          </button>
        </div>

        {/* View Mode Toggle */}
        <div className="flex space-x-2 mb-6">
          <button
            onClick={() => setViewMode('received')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              viewMode === 'received'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Received
          </button>
          <button
            onClick={() => setViewMode('sent')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              viewMode === 'sent'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Sent
          </button>
        </div>

        {/* Table Content */}
        <div className="bg-white rounded-lg shadow-sm">
          {activeTab === 'debit-notes' && renderDebitNotesTable()}
          {activeTab === 'credit-notes' && renderCreditNotesTable()}
        </div>

        {/* Floating Action Button */}
        <button className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
          <FiPlus className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default DebitCreditNotes;
