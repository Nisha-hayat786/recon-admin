import React, { useState } from 'react';
import { FiArrowLeft, FiSearch, FiFilter, FiEye, FiDownload, FiStar, FiMessageCircle, FiMoreVertical, FiMail, FiPhone, FiExternalLink, FiChevronUp, FiChevronDown, FiCheck, FiInfo, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const BillsAndPayments = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBill, setSelectedBill] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showCreditNotesModal, setShowCreditNotesModal] = useState(false);
  const [expandedBills, setExpandedBills] = useState(new Set());
  
  // Payment form state
  const [paymentData, setPaymentData] = useState({
    paidOn: '',
    interestAmount: '',
    surchargeAmount: '',
    discountAmount: '',
    paymentMethods: {
      cash: { checked: false, amount: '', memo: '' },
      check: { checked: false, amount: '', memo: '' },
      debitCard: { checked: false, amount: '', memo: '' },
      creditCard: { checked: false, amount: '', memo: '' },
      wireTransfer: { checked: false, amount: '', memo: '' },
      directDeposit: { checked: false, amount: '', memo: '' },
      inAppPayment: { checked: false, amount: '', memo: '' },
      creditNotes: { checked: false, amount: '', memo: '' }
    }
  });

  // Sample bills data
  const bills = [
    {
      id: 'IN-453531312',
      company: 'Smart Car Wash',
      date: '12/02/2025',
      amount: 45000,
      outstanding: 45000,
      status: 'New',
      interest: 45,
      surcharges: 45,
      discount: 45,
      dueDate: '12/02/2025',
      unreadMessages: 2,
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corp er neque pulvinar aliquam urna.',
      email: 'admin@smartcarwash.com',
      phone: '+1321644654641',
      isFavorite: false,
      paymentHistory: []
    },
    {
      id: 'IN-453531312',
      company: 'Smart Car Wash',
      date: '12/02/2025',
      amount: 45000,
      outstanding: 5000,
      status: 'Partially Paid',
      interest: 45,
      surcharges: 45,
      discount: 45,
      dueDate: '12/02/2025',
      unreadMessages: 3,
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corp er neque pulvinar aliquam urna.',
      email: 'admin@smartcarwash.com',
      phone: '+1321644654641',
      isFavorite: false,
      paymentHistory: [
        { date: '12/02/2025', method: 'Cash', amount: 25000, memo: 'Partial payment' },
        { date: '12/02/2025', method: 'Check', amount: 15000, memo: 'Check payment' }
      ]
    },
    {
      id: 'IN-453531312',
      company: 'Smart Car Wash',
      date: '12/02/2025',
      amount: 45000,
      outstanding: 0,
      status: 'Paid',
      interest: 45,
      surcharges: 45,
      discount: 45,
      dueDate: '12/02/2025',
      unreadMessages: 3,
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corp er neque pulvinar aliquam urna.',
      email: 'admin@smartcarwash.com',
      phone: '+1321644654641',
      isFavorite: false,
      paymentHistory: [
        { date: '12/02/2025', method: 'Cash', amount: 25000, memo: 'Final payment' },
        { date: '12/02/2025', method: 'Check', amount: 15000, memo: 'Check payment' },
        { date: '12/02/2025', method: 'Credit Note', amount: 5000, memo: 'Credit applied' }
      ]
    }
  ];

  // Sample credit notes data
  const creditNotes = [
    {
      id: 'CN-453531312',
      status: 'Partially',
      date: '12/02/2025',
      creditAmount: 45000,
      remainingBalance: 25000,
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat.',
      company: 'Smart Car Wash',
      email: 'admin@smartcarwash.com',
      phone: '+1321644654641',
      debitNoteId: 'DN-453531312',
      appliedCredits: [
        { date: '12/02/2025', amount: 45000, invoice: 'IN-564645313', workOrder: 'WO-564645313' },
        { date: '12/02/2025', amount: 45000, invoice: 'IN-564645313', workOrder: 'WO-564645313' }
      ]
    },
    {
      id: 'CN-453531312',
      status: 'Open',
      date: '12/02/2025',
      creditAmount: 45000,
      remainingBalance: 25000,
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat.',
      company: 'Smart Car Wash',
      email: 'admin@smartcarwash.com',
      phone: '+1321644654641',
      debitNoteId: 'DN-453531312',
      appliedCredits: []
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      'New': { bg: 'bg-blue-500', text: 'text-white' },
      'Partially Paid': { bg: 'bg-yellow-500', text: 'text-white' },
      'Paid': { bg: 'bg-green-500', text: 'text-white' }
    };
    
    const config = statusConfig[status] || { bg: 'bg-gray-400', text: 'text-white' };
    return (
      <span className={`${config.bg} ${config.text} px-3 py-1 rounded-full text-xs font-medium`}>
        {status}
      </span>
    );
  };

  const getCreditNoteStatusBadge = (status) => {
    const statusConfig = {
      'Partially': { bg: 'bg-yellow-400', text: 'text-white' },
      'Open': { bg: 'bg-red-400', text: 'text-white' }
    };
    
    const config = statusConfig[status] || { bg: 'bg-gray-400', text: 'text-white' };
    return (
      <span className={`${config.bg} ${config.text} px-3 py-1 rounded-full text-xs font-medium`}>
        {status}
      </span>
    );
  };

  const calculatePaymentSummary = () => {
    const selectedMethods = Object.values(paymentData.paymentMethods)
      .filter(method => method.checked)
      .reduce((total, method) => total + (parseFloat(method.amount) || 0), 0);
    
    const initialBalance = selectedBill ? selectedBill.outstanding : 0;
    const outstandingBalance = Math.max(0, initialBalance - selectedMethods);
    
    return {
      initialBalance,
      selectedMethods,
      outstandingBalance
    };
  };

  const handlePaymentInputChange = (field, value) => {
    setPaymentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePaymentMethodChange = (method, field, value) => {
    setPaymentData(prev => ({
      ...prev,
      paymentMethods: {
        ...prev.paymentMethods,
        [method]: {
          ...prev.paymentMethods[method],
          [field]: value
        }
      }
    }));
  };

  const handlePaymentSubmit = () => {
    console.log('Payment submitted:', paymentData);
    setShowPaymentModal(false);
    // Reset form
    setPaymentData({
      paidOn: '',
      interestAmount: '',
      surchargeAmount: '',
      discountAmount: '',
      paymentMethods: {
        cash: { checked: false, amount: '', memo: '' },
        check: { checked: false, amount: '', memo: '' },
        debitCard: { checked: false, amount: '', memo: '' },
        creditCard: { checked: false, amount: '', memo: '' },
        wireTransfer: { checked: false, amount: '', memo: '' },
        directDeposit: { checked: false, amount: '', memo: '' },
        inAppPayment: { checked: false, amount: '', memo: '' },
        creditNotes: { checked: false, amount: '', memo: '' }
      }
    });
  };

  const [selectedCreditNotes, setSelectedCreditNotes] = useState(new Set());
  const [expandedCreditNotes, setExpandedCreditNotes] = useState(new Set());

  const toggleCreditNoteSelection = (creditNoteId) => {
    const newSelected = new Set(selectedCreditNotes);
    if (newSelected.has(creditNoteId)) {
      newSelected.delete(creditNoteId);
    } else {
      newSelected.add(creditNoteId);
    }
    setSelectedCreditNotes(newSelected);
  };

  const toggleCreditNoteExpanded = (creditNoteId) => {
    const newExpanded = new Set(expandedCreditNotes);
    if (newExpanded.has(creditNoteId)) {
      newExpanded.delete(creditNoteId);
    } else {
      newExpanded.add(creditNoteId);
    }
    setExpandedCreditNotes(newExpanded);
  };

  const handleApplyCreditNotes = () => {
    console.log('Credit notes applied:', Array.from(selectedCreditNotes));
    setShowCreditNotesModal(false);
    setSelectedCreditNotes(new Set());
  };

  const toggleExpanded = (billId) => {
    const newExpanded = new Set(expandedBills);
    if (newExpanded.has(billId)) {
      newExpanded.delete(billId);
    } else {
      newExpanded.add(billId);
    }
    setExpandedBills(newExpanded);
  };

  const handleViewDetails = (bill) => {
    setSelectedBill(bill);
    setShowModal(true);
  };

  const handlePayNow = (bill) => {
    setSelectedBill(bill);
    setShowPaymentModal(true);
  };

  const handleToggleFavorite = (billId) => {
    console.log('Toggle favorite for:', billId);
    // Handle favorite toggle logic
  };

  const handleDownload = (billId) => {
    console.log('Download bill:', billId);
    // Handle download logic
  };

  const filteredBills = bills.filter(bill =>
    bill.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bill.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bill.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center space-x-4 p-4 pb-2">
          <button 
            onClick={() => navigate(-1)}
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold">Bills & Payments</h1>
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

        {/* Bills Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bill ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Outstanding
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBills.map((bill, index) => (
                  <React.Fragment key={`${bill.id}-${index}`}>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-blue-600">{bill.id}</div>
                        <div className="text-xs text-gray-500">{bill.date}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{bill.company}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-semibold text-red-600">${bill.amount.toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-semibold text-red-600">${bill.outstanding.toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(bill.status)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-red-600">{bill.dueDate}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleViewDetails(bill)}
                            className="text-blue-600 hover:text-blue-700"
                            title="View Details"
                          >
                            <FiEye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDownload(bill.id)}
                            className="text-gray-600 hover:text-gray-700"
                            title="Download"
                          >
                            <FiDownload className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleToggleFavorite(bill.id)}
                            className={`${bill.isFavorite ? 'text-yellow-500' : 'text-gray-400'} hover:text-yellow-500`}
                            title="Favorite"
                          >
                            <FiStar className={`w-4 h-4 ${bill.isFavorite ? 'fill-current' : ''}`} />
                          </button>
                          <button
                            onClick={() => toggleExpanded(`${bill.id}-${index}`)}
                            className="text-gray-600 hover:text-gray-700"
                            title="Toggle Details"
                          >
                            {expandedBills.has(`${bill.id}-${index}`) ? (
                              <FiChevronUp className="w-4 h-4" />
                            ) : (
                              <FiChevronDown className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Expanded Row */}
                    {expandedBills.has(`${bill.id}-${index}`) && (
                      <tr>
                        <td colSpan="7" className="px-6 py-4 bg-gray-50">
                          <div className="space-y-4">
                            {/* Financial Summary */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <span className="text-gray-600">Interest:</span>
                                <span className="ml-2 text-gray-900">${bill.interest}</span>
                              </div>
                              <div>
                                <span className="text-gray-600">Surcharges:</span>
                                <span className="ml-2 text-gray-900">${bill.surcharges}</span>
                              </div>
                              <div>
                                <span className="text-gray-600">Discount:</span>
                                <span className="ml-2 text-green-600">${bill.discount}</span>
                              </div>
                              <div>
                                <span className="text-gray-600">Due On:</span>
                                <span className="ml-2 text-red-600">{bill.dueDate}</span>
                              </div>
                            </div>
                            
                            {/* Description */}
                            <div>
                              <p className="text-sm text-gray-600">{bill.description}</p>
                            </div>
                            
                            {/* Company Contact */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <span className="text-sm font-medium text-gray-900">{bill.company}</span>
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                  <FiMail className="w-4 h-4" />
                                  <span>{bill.email}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                  <FiPhone className="w-4 h-4" />
                                  <span>{bill.phone}</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-3">
                                <button
                                  onClick={() => handlePayNow(bill)}
                                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                                >
                                  <span>Pay Now</span>
                                  <FiExternalLink className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => setShowCreditNotesModal(true)}
                                  className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
                                >
                                  <span>Apply Credit Notes</span>
                                  <FiCheck className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            
                            {/* Payment Information (if applicable) */}
                            {bill.paymentHistory.length > 0 && (
                              <div className="bg-green-50 p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-3">
                                  <span className="text-sm font-medium text-gray-900">Payment Information</span>
                                  <FiChevronUp className="w-4 h-4 text-blue-600" />
                                </div>
                                <div className="space-y-2">
                                  {bill.paymentHistory.map((payment, pIndex) => (
                                    <div key={pIndex} className="flex items-center justify-between text-sm">
                                      <div className="flex items-center space-x-2">
                                        <FiCheck className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-600">{payment.date}</span>
                                      </div>
                                      <div className="flex items-center space-x-4">
                                        <span className="text-gray-900">{payment.method}</span>
                                        <span className="text-blue-600 font-medium">${payment.amount.toLocaleString()}</span>
                                        {payment.memo && (
                                          <div className="flex items-center space-x-1">
                                            <FiInfo className="w-3 h-3 text-gray-400" />
                                            <span className="text-xs text-gray-500">{payment.memo}</span>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                  <div className="pt-2 border-t border-green-200">
                                    <div className="flex justify-between text-sm font-medium">
                                      <span className="text-gray-900">Paid Amount:</span>
                                      <span className="text-blue-600">
                                        ${bill.paymentHistory.reduce((sum, p) => sum + p.amount, 0).toLocaleString()}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {showModal && selectedBill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Bill Details - {selectedBill.id}
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
                    <h3 className="text-lg font-semibold text-blue-600">{selectedBill.id}</h3>
                    <p className="text-sm text-gray-500">{selectedBill.date}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    {getStatusBadge(selectedBill.status)}
                    <div className="flex items-center space-x-1 text-gray-600">
                      <FiMessageCircle className="w-4 h-4" />
                      <span className="text-sm">{selectedBill.unreadMessages}</span>
                    </div>
                  </div>
                </div>

                {/* Financial Details */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Financial Summary</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Interest:</span>
                      <span className="ml-2 text-gray-900">${selectedBill.interest}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Surcharges:</span>
                      <span className="ml-2 text-gray-900">${selectedBill.surcharges}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Discount:</span>
                      <span className="ml-2 text-green-600">${selectedBill.discount}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Due On:</span>
                      <span className="ml-2 text-red-600">{selectedBill.dueDate}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Amount:</span>
                      <span className="ml-2 text-red-600 font-semibold">${selectedBill.amount.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Outstanding:</span>
                      <span className="ml-2 text-red-600 font-semibold">${selectedBill.outstanding.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{selectedBill.description}</p>
                </div>

                {/* Company Information */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Service Provider</h4>
                  <div className="space-y-2">
                    <div className="font-medium text-gray-900">{selectedBill.company}</div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <FiMail className="w-4 h-4" />
                        <span>{selectedBill.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FiPhone className="w-4 h-4" />
                        <span>{selectedBill.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment History */}
                {selectedBill.paymentHistory.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Payment History</h4>
                    <div className="space-y-3">
                      {selectedBill.paymentHistory.map((payment, index) => (
                        <div key={index} className="bg-green-50 p-3 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <FiCheck className="w-4 h-4 text-green-600" />
                              <span className="text-sm text-gray-600">{payment.date}</span>
                              <span className="text-sm font-medium text-gray-900">{payment.method}</span>
                            </div>
                            <span className="text-sm font-semibold text-blue-600">
                              ${payment.amount.toLocaleString()}
                            </span>
                          </div>
                          {payment.memo && (
                            <div className="mt-2 text-xs text-gray-500">
                              Memo: {payment.memo}
                            </div>
                          )}
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
                onClick={() => handleDownload(selectedBill.id)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Download Bill
              </button>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Close
                </button>
                <button
                  onClick={() => handlePayNow(selectedBill)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Make Payment Modal */}
      {showPaymentModal && selectedBill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                Cancel
              </button>
              <h2 className="text-xl font-semibold text-gray-900">Make a Payment</h2>
              <button
                onClick={handlePaymentSubmit}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Pay
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-96">
              <div className="space-y-6">
                {/* Payment Adjustment Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="date"
                      placeholder="Paid On"
                      value={paymentData.paidOn}
                      onChange={(e) => handlePaymentInputChange('paidOn', e.target.value)}
                      className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Interest Amount"
                      value={paymentData.interestAmount}
                      onChange={(e) => handlePaymentInputChange('interestAmount', e.target.value)}
                      className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Surcharge Amount"
                      value={paymentData.surchargeAmount}
                      onChange={(e) => handlePaymentInputChange('surchargeAmount', e.target.value)}
                      className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Discount Amount"
                      value={paymentData.discountAmount}
                      onChange={(e) => handlePaymentInputChange('discountAmount', e.target.value)}
                      className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Financial Summary */}
                {(() => {
                  const summary = calculatePaymentSummary();
                  return (
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Initial Balance:</span>
                          <span className="font-medium">${summary.initialBalance.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-green-600">Selected Methods:</span>
                          <span className="font-medium text-green-600">${summary.selectedMethods.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-red-600">Outstanding Balance:</span>
                          <span className="font-medium text-red-600">${summary.outstandingBalance.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Payment Methods */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Payment Methods</h4>
                  
                  {/* Cash */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={paymentData.paymentMethods.cash.checked}
                        onChange={(e) => handlePaymentMethodChange('cash', 'checked', e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-sm">💰</span>
                      </div>
                      <span className="font-medium">Cash</span>
                      {paymentData.paymentMethods.cash.checked && (
                        <input
                          type="number"
                          placeholder="Amount"
                          value={paymentData.paymentMethods.cash.amount}
                          onChange={(e) => handlePaymentMethodChange('cash', 'amount', e.target.value)}
                          className="ml-auto px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      )}
                    </div>
                    {paymentData.paymentMethods.cash.checked && (
                      <div className="mt-3">
                        <input
                          type="text"
                          placeholder="Memo"
                          value={paymentData.paymentMethods.cash.memo}
                          onChange={(e) => handlePaymentMethodChange('cash', 'memo', e.target.value)}
                          className="w-full px-3 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    )}
                  </div>

                  {/* Check */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={paymentData.paymentMethods.check.checked}
                        onChange={(e) => handlePaymentMethodChange('check', 'checked', e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm">📄</span>
                      </div>
                      <span className="font-medium">Check</span>
                      {paymentData.paymentMethods.check.checked && (
                        <input
                          type="number"
                          placeholder="Amount"
                          value={paymentData.paymentMethods.check.amount}
                          onChange={(e) => handlePaymentMethodChange('check', 'amount', e.target.value)}
                          className="ml-auto px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      )}
                    </div>
                    {paymentData.paymentMethods.check.checked && (
                      <div className="mt-3">
                        <input
                          type="text"
                          placeholder="Memo"
                          value={paymentData.paymentMethods.check.memo}
                          onChange={(e) => handlePaymentMethodChange('check', 'memo', e.target.value)}
                          className="w-full px-3 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    )}
                  </div>

                  {/* Apply Credit Notes */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={paymentData.paymentMethods.creditNotes.checked}
                        onChange={(e) => handlePaymentMethodChange('creditNotes', 'checked', e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 text-sm">📋</span>
                      </div>
                      <span className="font-medium">Apply Credit Notes</span>
                      {paymentData.paymentMethods.creditNotes.checked && (
                        <input
                          type="number"
                          placeholder="Amount"
                          value={paymentData.paymentMethods.creditNotes.amount}
                          onChange={(e) => handlePaymentMethodChange('creditNotes', 'amount', e.target.value)}
                          className="ml-auto px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      )}
                    </div>
                    {paymentData.paymentMethods.creditNotes.checked && (
                      <div className="mt-3">
                        <input
                          type="text"
                          placeholder="Memo"
                          value={paymentData.paymentMethods.creditNotes.memo}
                          onChange={(e) => handlePaymentMethodChange('creditNotes', 'memo', e.target.value)}
                          className="w-full px-3 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    )}
                  </div>

                  {/* Other Payment Methods (Inactive) */}
                  {['debitCard', 'creditCard', 'wireTransfer', 'directDeposit', 'inAppPayment'].map((method) => (
                    <div key={method} className="bg-gray-50 p-4 rounded-lg opacity-60">
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={paymentData.paymentMethods[method].checked}
                          onChange={(e) => handlePaymentMethodChange(method, 'checked', e.target.checked)}
                          className="w-4 h-4 text-gray-400 rounded"
                          disabled
                        />
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-gray-400 text-sm">
                            {method === 'debitCard' && '💳'}
                            {method === 'creditCard' && '💳'}
                            {method === 'wireTransfer' && '↔️'}
                            {method === 'directDeposit' && '⚙️'}
                            {method === 'inAppPayment' && '🔄'}
                          </span>
                        </div>
                        <span className="font-medium text-gray-500">
                          {method === 'debitCard' && 'Debit Card'}
                          {method === 'creditCard' && 'Credit Card'}
                          {method === 'wireTransfer' && 'Wire Transfer'}
                          {method === 'directDeposit' && 'Direct Deposit (ACH)'}
                          {method === 'inAppPayment' && 'In-App Payment'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Apply Credit Notes Modal */}
      {showCreditNotesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <button
                onClick={() => setShowCreditNotesModal(false)}
                className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200"
              >
                <FiArrowLeft className="w-4 h-4 text-blue-600" />
              </button>
              <h2 className="text-xl font-semibold text-gray-900">Apply Credit Notes</h2>
              <button
                onClick={handleApplyCreditNotes}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Apply
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Outstanding Balance */}
              <div className="mb-6">
                <span className="text-red-600 font-medium">Outstanding Balance: </span>
                <span className="text-gray-900 font-semibold">$ 5,000</span>
              </div>

              {/* Credit Notes List */}
              <div className="space-y-4">
                {creditNotes.map((creditNote) => (
                  <div key={creditNote.id} className="border border-gray-200 rounded-lg p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={selectedCreditNotes.has(creditNote.id)}
                          onChange={() => toggleCreditNoteSelection(creditNote.id)}
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="font-semibold text-blue-600">{creditNote.id}</span>
                        <div className="flex items-center space-x-2">
                          <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                            <span className="text-xs">✏️</span>
                          </button>
                          <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                            <span className="text-xs">📄</span>
                          </button>
                          <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                            <span className="text-xs">🖨️</span>
                          </button>
                        </div>
                      </div>
                      {getCreditNoteStatusBadge(creditNote.status)}
                    </div>

                    {/* Date and Financial Details */}
                    <div className="mb-3">
                      <div className="text-sm text-gray-600">{creditNote.date}</div>
                      <div className="flex justify-between mt-2">
                        <span className="text-blue-600">Credit Amount: ${creditNote.creditAmount.toLocaleString()}</span>
                        <span className="text-green-600">Remaining Balance: ${creditNote.remainingBalance.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-3">
                      <p className="text-sm text-gray-600">{creditNote.description}</p>
                    </div>

                    {/* Company Information */}
                    <div className="border-t border-gray-200 pt-3 mb-3">
                      <div className="font-medium text-gray-900">{creditNote.company}</div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <FiMail className="w-4 h-4" />
                          <span>{creditNote.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FiPhone className="w-4 h-4" />
                          <span>{creditNote.phone}</span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="text-blue-600 underline cursor-pointer">{creditNote.debitNoteId}</span>
                      </div>
                    </div>

                    {/* Applied Credit Information Toggle */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">{creditNote.appliedCredits.length}</span>
                        </div>
                        <span className="text-blue-600 font-medium">Applied Credit Information</span>
                      </div>
                      <button
                        onClick={() => toggleCreditNoteExpanded(creditNote.id)}
                        className="text-blue-600"
                      >
                        {expandedCreditNotes.has(creditNote.id) ? (
                          <FiChevronUp className="w-4 h-4" />
                        ) : (
                          <FiChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Expanded Applied Credit Information */}
                    {expandedCreditNotes.has(creditNote.id) && (
                      <div className="mt-3 bg-green-50 p-3 rounded-lg">
                        <div className="space-y-2">
                          {creditNote.appliedCredits.map((credit, index) => (
                            <div key={index} className={`text-sm ${index === 1 ? 'bg-green-200 p-2 rounded' : ''}`}>
                              <div className="flex justify-between">
                                <span>Date: {credit.date}</span>
                                <span>Applied Amount: ${credit.amount.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between mt-1">
                                <span className="text-blue-600 underline cursor-pointer">Invoice#: {credit.invoice}</span>
                                <span className="text-blue-600 underline cursor-pointer">Work Order#: {credit.workOrder}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillsAndPayments;
