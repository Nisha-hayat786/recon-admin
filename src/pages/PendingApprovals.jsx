import React, { useState } from 'react';
import { FiArrowLeft, FiSearch, FiFilter, FiEye, FiCheck, FiX, FiStar, FiMapPin, FiCalendar, FiDollarSign, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const PendingApprovals = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('work-orders');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sample data for each tab
  const debitNotes = [
    {
      id: 'DN-453531312',
      invoiceNumber: 'IN-564645313',
      workOrderNumber: 'WO-564645313',
      dueDate: '12/02/2025',
      amountDue: 45000,
      company: 'Smart Car Wash',
      requester: 'Mr. Pickles',
      status: 'Pending Approval',
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat.'
    },
    {
      id: 'DN-453531313',
      invoiceNumber: 'IN-564645314',
      workOrderNumber: 'WO-564645314',
      dueDate: '13/02/2025',
      amountDue: 32000,
      company: 'ABC Car Detailing',
      requester: 'John Rambo',
      status: 'Pending Approval',
      description: 'Service charges for exterior detailing and paint correction work.'
    }
  ];

  const hireProRequests = [
    {
      id: 'HP-001',
      company: 'Smart Car Wash',
      accountId: '451351354-1',
      rating: 4.5,
      distance: '5 Miles',
      totalAmount: 4400,
      services: [
        { name: 'Interior Detailing', qty: '1 Pcs', price: 1500 },
        { name: 'Paint Correction', qty: '1 Pcs', price: 1600 },
        { name: 'Ceramic Coating', qty: '1 Pcs', price: 1300 }
      ],
      requester: 'Mr. Pickles',
      status: 'Pending Approval',
      date: '20/02/2025, 4:30 PM'
    },
    {
      id: 'HP-002',
      company: 'Premium Auto Care',
      accountId: '451351354-2',
      rating: 4.8,
      distance: '3 Miles',
      totalAmount: 2800,
      services: [
        { name: 'Full Detail', qty: '1 Pcs', price: 1800 },
        { name: 'Wax Protection', qty: '1 Pcs', price: 1000 }
      ],
      requester: 'Maria Dias',
      status: 'Pending Approval',
      date: '21/02/2025, 2:15 PM'
    }
  ];

  const workOrders = [
    {
      id: 'WO-15345132',
      status: 'pos-maintenance',
      progressStatus: 'in-progress',
      vehicle: '2024 White Honda Civic',
      serviceRoute: 'Smart Car Wash → ABC Car Detailing',
      pickUpDate: 'Today, 9:30 PM',
      deliveryDate: '12/02/2025, 9:30 PM',
      rating: 4.5,
      unreadMessages: 3,
      postedBy: 'Maria Dias',
      soldBy: 'Maria Dias',
      approvedBy: 'Mr. Pickles',
      manHoursEstimated: '12 Hours',
      actualHours: '11 Hours'
    },
    {
      id: 'WO-15345133',
      status: 'pending-approval',
      progressStatus: 'waiting',
      vehicle: '2023 Black Toyota Camry',
      serviceRoute: 'Main Garage → Service Center',
      pickUpDate: 'Tomorrow, 10:00 AM',
      deliveryDate: '13/02/2025, 10:00 AM',
      rating: 4.2,
      unreadMessages: 1,
      postedBy: 'John Rambo',
      soldBy: 'John Rambo',
      approvedBy: 'Pending',
      manHoursEstimated: '8 Hours',
      actualHours: '0 Hours'
    }
  ];

  const tabs = [
    { key: 'debit-notes', label: 'Debit Notes', icon: '$' },
    { key: 'hire-pro', label: 'Hire a Pro', icon: '🤝' },
    { key: 'work-orders', label: 'Work Orders', icon: '📄' }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      'pending-approval': { bg: 'bg-yellow-500', text: 'text-white', label: 'Pending Approval' },
      'pos-maintenance': { bg: 'bg-gray-500', text: 'text-white', label: 'Pos Maintenance' },
      'in-progress': { bg: 'bg-green-500', text: 'text-white', label: 'In Progress' },
      'waiting': { bg: 'bg-blue-500', text: 'text-white', label: 'Waiting' }
    };
    
    const config = statusConfig[status] || { bg: 'bg-gray-400', text: 'text-white', label: status };
    return (
      <span className={`${config.bg} ${config.text} px-2 py-1 rounded-full text-xs font-medium`}>
        {config.label}
      </span>
    );
  };

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleApprove = (itemId) => {
    console.log('Approved:', itemId);
    // Handle approval logic here
  };

  const handleDecline = (itemId) => {
    console.log('Declined:', itemId);
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
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount Due
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Due Date
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
          {debitNotes.map((note) => (
            <tr key={note.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-blue-600">{note.id}</div>
                <div className="text-xs text-gray-500">Invoice: {note.invoiceNumber}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">{note.company}</div>
                <div className="text-xs text-gray-500">By: {note.requester}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-semibold text-red-600">${note.amountDue.toLocaleString()}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{note.dueDate}</div>
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
                  <button
                    onClick={() => handleDecline(note.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleApprove(note.id)}
                    className="text-green-600 hover:text-green-700"
                  >
                    <FiCheck className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderHireProTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rating
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Distance
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
          {hireProRequests.map((request) => (
            <tr key={request.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">{request.company}</div>
                <div className="text-xs text-gray-500">ID: {request.accountId}</div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-1">
                  <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{request.rating}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-semibold text-green-600">${request.totalAmount.toLocaleString()}</div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-1">
                  <FiMapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-900">{request.distance}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                {getStatusBadge(request.status)}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleViewDetails(request)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <FiEye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDecline(request.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleApprove(request.id)}
                    className="text-green-600 hover:text-green-700"
                  >
                    <FiCheck className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderWorkOrdersTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Work Order
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Vehicle
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Service Route
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rating
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {workOrders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-blue-600">{order.id}</div>
                <div className="text-xs text-gray-500">By: {order.postedBy}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">{order.vehicle}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{order.serviceRoute}</div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  {getStatusBadge(order.status)}
                  {order.progressStatus !== order.status && getStatusBadge(order.progressStatus)}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-1">
                  <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{order.rating}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleViewDetails(order)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <FiEye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDecline(order.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleApprove(order.id)}
                    className="text-green-600 hover:text-green-700"
                  >
                    <FiCheck className="w-4 h-4" />
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
    if (!selectedItem || !showModal) return null;

  return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              {activeTab === 'debit-notes' && 'Debit Note Details'}
              {activeTab === 'hire-pro' && 'Hire Pro Request Details'}
              {activeTab === 'work-orders' && 'Work Order Details'}
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
            {activeTab === 'debit-notes' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Debit Note ID</label>
                    <div className="text-lg font-semibold text-blue-600">{selectedItem.id}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    {getStatusBadge(selectedItem.status)}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Invoice Number</label>
                    <div className="text-blue-600 underline">{selectedItem.invoiceNumber}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Work Order Number</label>
                    <div className="text-blue-600 underline">{selectedItem.workOrderNumber}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Due Date</label>
                    <div className="text-red-600">{selectedItem.dueDate}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Amount Due</label>
                    <div className="text-red-600 font-semibold">${selectedItem.amountDue.toLocaleString()}</div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <div className="font-medium">{selectedItem.company}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <div className="text-gray-600">{selectedItem.description}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Requested By</label>
                  <div className="text-gray-900">{selectedItem.requester}</div>
                </div>
              </div>
            )}

            {activeTab === 'hire-pro' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Company</label>
                    <div className="text-lg font-semibold">{selectedItem.company}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Rating</label>
                    <div className="flex items-center space-x-1">
                      <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{selectedItem.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Account ID</label>
                    <div className="text-gray-600">{selectedItem.accountId}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Distance</label>
                    <div className="flex items-center space-x-1">
                      <FiMapPin className="w-4 h-4 text-gray-400" />
                      <span>{selectedItem.distance}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Services</label>
                  <div className="space-y-2">
                    {selectedItem.services.map((service, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{service.name}</span>
                        <span>{service.qty} - ${service.price.toLocaleString()}</span>
                      </div>
                    ))}
                    <hr className="my-2" />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${selectedItem.totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <div className="text-gray-600">{selectedItem.date}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Requested By</label>
                    <div className="text-gray-900">{selectedItem.requester}</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'work-orders' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Work Order ID</label>
                    <div className="text-lg font-semibold text-blue-600">{selectedItem.id}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Rating</label>
                    <div className="flex items-center space-x-1">
                      <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{selectedItem.rating}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Vehicle</label>
                  <div className="font-medium">{selectedItem.vehicle}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Service Route</label>
                  <div className="text-gray-900">{selectedItem.serviceRoute}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Pick-up Date</label>
                    <div className="text-gray-600">{selectedItem.pickUpDate}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Delivery Date</label>
                    <div className="text-gray-600">{selectedItem.deliveryDate}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Posted By</label>
                    <div className="text-gray-900">{selectedItem.postedBy}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Sold By</label>
                    <div className="text-gray-900">{selectedItem.soldBy}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Man-hours Estimated</label>
                    <div className="text-gray-600">{selectedItem.manHoursEstimated}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Actual Hours</label>
                    <div className="text-gray-600">{selectedItem.actualHours}</div>
                  </div>
                </div>
              </div>
            )}
        </div>
        
          {/* Modal Actions */}
          <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
            <button
              onClick={() => handleDecline(selectedItem.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Decline
            </button>
            <button
              onClick={() => handleApprove(selectedItem.id)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Approve
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
    

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
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === tab.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Table Content */}
        <div className="bg-white rounded-lg shadow-sm">
          {activeTab === 'debit-notes' && renderDebitNotesTable()}
          {activeTab === 'hire-pro' && renderHireProTable()}
          {activeTab === 'work-orders' && renderWorkOrdersTable()}
                </div>
              </div>

      {/* Modal */}
      {renderModal()}
    </div>
  );
};

export default PendingApprovals;
