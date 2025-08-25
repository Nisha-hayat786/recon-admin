import React from 'react';
import { FiArrowLeft, FiCheck, FiClock } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';

const WorkOrderActivities = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  // Sample activities data (in real app, fetch by orderId)
  const activities = [
    {
      id: 1,
      status: 'Delivered',
      date: '21/02/2024, 12:40 PM',
      isCompleted: false,
      isCurrent: false,
      isFuture: true,
      user: null,
      description: 'Work order has been delivered to the customer'
    },
    {
      id: 2,
      status: 'Finished',
      date: '21/02/2024, 12:40 PM',
      isCompleted: false,
      isCurrent: false,
      isFuture: true,
      user: null,
      description: 'All work has been completed'
    },
    {
      id: 3,
      status: 'Finishing soon',
      date: '21/02/2024, 12:40 PM',
      isCompleted: false,
      isCurrent: true,
      isFuture: false,
      user: {
        name: 'John Rambo',
        role: 'Manager',
        phone: '+000 000 000'
      },
      description: 'Work is in final stages of completion'
    },
    {
      id: 4,
      status: 'Started',
      date: '21/02/2024, 12:40 PM',
      isCompleted: true,
      isCurrent: false,
      isFuture: false,
      user: {
        name: 'John Rambo',
        role: 'Manager',
        phone: '+000 000 000'
      },
      description: 'Work has begun on the order'
    },
    {
      id: 5,
      status: 'Accepted',
      date: '21/02/2024, 12:40 PM',
      isCompleted: true,
      isCurrent: false,
      isFuture: false,
      user: {
        name: 'John Rambo',
        role: 'Manager',
        phone: '+000 000 000'
      },
      description: 'Work order has been accepted for processing'
    },
    {
      id: 6,
      status: 'Approved',
      date: '21/02/2024, 12:40 PM',
      isCompleted: true,
      isCurrent: false,
      isFuture: false,
      user: {
        name: 'John Rambo',
        role: 'Manager',
        phone: '+000 000 000'
      },
      description: 'Work order has been approved by management'
    },
    {
      id: 7,
      status: 'Waiting For Approval',
      date: '21/02/2024, 12:40 PM',
      isCompleted: true,
      isCurrent: false,
      isFuture: false,
      user: null,
      description: 'Work order is pending approval'
    },
    {
      id: 8,
      status: 'Work Order Creation',
      date: '21/02/2024, 12:40 PM',
      isCompleted: true,
      isCurrent: false,
      isFuture: false,
      user: {
        name: 'John Rambo',
        role: 'Manager',
        phone: '+000 000 000'
      },
      description: 'Initial work order was created'
    }
  ];

  const estimatedDelivery = '21/02/2024, 12:40 PM';

  const getStatusIcon = (activity) => {
    if (activity.isCompleted) {
      return (
        <div className="w-8 h-8 bg-white border-2 border-green-500 rounded-full flex items-center justify-center">
          <FiCheck className="w-4 h-4 text-green-500" />
        </div>
      );
    } else if (activity.isCurrent) {
      return (
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <FiClock className="w-4 h-4 text-white" />
        </div>
      );
    } else {
      return (
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      );
    }
  };

  const getStatusColor = (activity) => {
    if (activity.isCompleted) {
      return 'text-green-600';
    } else if (activity.isCurrent) {
      return 'text-green-600';
    } else {
      return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-800"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Activities</h1>
        </div>
      </div>

      {/* Estimated Delivery */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="text-center">
          <div className="text-sm font-medium text-gray-700 mb-1">
            Estimated Delivery Date / Time
          </div>
          <div className="text-lg font-semibold text-blue-600">
            {estimatedDelivery}
          </div>
        </div>
      </div>

      {/* Activities Timeline */}
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            {/* Activities */}
            <div className="space-y-6 p-6">
              {activities.map((activity, index) => (
                <div key={activity.id} className="relative flex items-start space-x-4">
                  {/* Status Icon */}
                  <div className="relative z-10">
                    {getStatusIcon(activity)}
                  </div>
                  
                  {/* Activity Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className={`text-lg font-semibold ${getStatusColor(activity)}`}>
                          {activity.status}
                        </div>
                        {activity.user && (
                          <div className="text-sm text-gray-600 mt-1">
                            {activity.user.name}, {activity.user.role}, {activity.user.phone}
                          </div>
                        )}
                        <div className="text-sm text-gray-500 mt-1">
                          {activity.description}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 ml-4 text-right">
                        {activity.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOrderActivities;
