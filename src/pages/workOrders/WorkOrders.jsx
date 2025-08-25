import React, { useState } from 'react';
import { FiArrowLeft, FiSearch, FiMoreVertical, FiMessageCircle, FiStar, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const WorkOrders = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('open');

  // Sample work orders data
  const workOrders = [
    {
      id: 'WO-15345132',
      status: 'open',
      user: { name: 'Maria Dias', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face' },
      unreadMessages: 3,
      vehicle: {
        year: '2024',
        make: 'Honda',
        model: 'Civic',
        color: 'White',
        mileage: '1500 Miles',
        stockNumber: '2557234',
        plateNumber: 'DF57234',
        vin: '25GJ525G72M34F42'
      },
      serviceRoute: {
        from: 'Smart Car Wash',
        to: 'ABC Car Detailing'
      },
      pickUpOn: '12/02/2025, 9:30 PM',
      deliveryExpectedOn: '12/02/2025, 9:30 PM',
      rating: 4.5,
      postedBy: 'Maria Dias',
      soldBy: 'Maria Dias',
      approvedBy: 'Mr. Pickles',
      manHoursEstimated: '12 Hours',
      actualHours: '11 Hours',
      elapsedTimeReady: '12 H',
      delivered: '11 H'
    },
    {
      id: 'WO-15345133',
      status: 'in-progress',
      user: { name: 'Maria Dias', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face' },
      unreadMessages: 3,
      vehicle: {
        year: '2024',
        make: 'Honda',
        model: 'Civic',
        color: 'White',
        mileage: '1500 Miles',
        stockNumber: '2557234',
        plateNumber: 'DF57234',
        vin: '25GJ525G72M34F42'
      },
      serviceRoute: {
        from: 'Smart Car Wash',
        to: 'ABC Car Detailing'
      },
      pickUpOn: 'Today, 9:30 PM',
      deliveryExpectedOn: '12/02/2025, 9:30 PM',
      rating: 4.5,
      postedBy: 'Maria Dias',
      soldBy: 'Maria Dias',
      approvedBy: 'Mr. Pickles',
      manHoursEstimated: '12 Hours',
      actualHours: '11 Hours',
      elapsedTimeReady: '12 H',
      delivered: '11 H'
    }
  ];

  const filters = [
    { key: 'inactive', label: 'Inactive' },
    { key: 'in-progress', label: 'In Progress' },
    { key: 'pending-approval', label: 'Pending Approval' },
    { key: 'open', label: 'Open' }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      'pending': { bg: 'bg-orange-500', text: 'text-white', label: 'Pending' },
      'in-progress': { bg: 'bg-green-500', text: 'text-white', label: 'In Progress' },
      'completed': { bg: 'bg-blue-500', text: 'text-white', label: 'Completed' },
      'cancelled': { bg: 'bg-red-500', text: 'text-white', label: 'Cancelled' }
    };
    
    const config = statusConfig[status] || { bg: 'bg-gray-400', text: 'text-white', label: status };
    return (
      <span className={`${config.bg} ${config.text} px-3 py-1 rounded-full text-xs font-medium`}>
        {config.label}
      </span>
    );
  };

  const filteredWorkOrders = workOrders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.vehicle.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || order.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleRowClick = (orderId) => {
    navigate(`/admin/work-order-detail/${orderId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
           
            <h1 className="text-2xl font-semibold text-gray-900">Work Orders</h1>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => navigate('/admin/pending-approvals')}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Approvals
            </button>
            <button 
              onClick={() => navigate('/admin/create-work-order')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Work Order
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search work orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Work Order
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vehicle
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service Route
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dates
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assigned To
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredWorkOrders.map((order) => (
              <tr 
                key={order.id} 
                className="hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => handleRowClick(order.id)}
              >
                {/* Work Order Column */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-medium text-blue-600">{order.id}</div>
                    {order.unreadMessages > 0 && (
                      <div className="relative">
                        <FiMessageCircle className="w-4 h-4 text-red-500" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                          {order.unreadMessages}
                        </span>
                      </div>
                    )}
                  </div>
                </td>

                {/* Status Column */}
                <td className="px-6 py-4">
                  {getStatusBadge(order.status)}
                </td>

                {/* Vehicle Column */}
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">
                      {order.vehicle.year} {order.vehicle.color} {order.vehicle.make} {order.vehicle.model}
                    </div>
                    <div className="text-gray-500 mt-1">
                      <div>Stock# {order.vehicle.stockNumber}</div>
                      <div>Plate# {order.vehicle.plateNumber}</div>
                    </div>
                  </div>
                </td>

                {/* Service Route Column */}
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <div className="text-blue-600">From {order.serviceRoute.from}</div>
                    <div className="text-blue-600 mt-1">To {order.serviceRoute.to}</div>
                  </div>
                </td>

                {/* Dates Column */}
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <div className="text-gray-900">Pick-Up: {order.pickUpOn}</div>
                    <div className="text-gray-900 mt-1">Delivery: {order.deliveryExpectedOn}</div>
                  </div>
                </td>

                {/* Assigned To Column */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={order.user.avatar} 
                      alt={order.user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">{order.user.name}</div>
                      <div className="text-gray-500">Assigned</div>
                    </div>
                  </div>
                </td>

                {/* Actions Column */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/admin/work-order-activities/${order.id}`);
                      }}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded hover:bg-blue-200 transition-colors"
                    >
                      Activities
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkOrders;
