import React, { useState } from 'react';
import { FiArrowLeft, FiMessageCircle, FiStar, FiUser, FiCalendar, FiMapPin, FiTruck, FiFileText, FiDownload, FiEye, FiMoreVertical, FiBell, FiMail, FiPhone, FiClock, FiCheckCircle, FiAlertCircle, FiCheck } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import AddItemModal from '../../components/AddItemModal';
import AddVehicleRemarkModal from '../../components/AddVehicleRemarkModal';
import AddFollowerModal from '../../components/AddFollowerModal';
import AddFileModal from '../../components/AddFileModal';

const WorkOrderDetail = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Modal states
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [showAddRemarkModal, setShowAddRemarkModal] = useState(false);
  const [showAddFollowerModal, setShowAddFollowerModal] = useState(false);
  const [showAddFileModal, setShowAddFileModal] = useState(false);

  // Sample work order data (in real app, fetch by orderId)
  const workOrder = {
    id: 'WO-15345132',
    status: 'pending',
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
    delivered: '11 H',
    followers: [
      { name: 'John Rambo', role: 'Administrator', email: 'johnramboo@gmail.com', phone: '+4644667314646', company: 'Five Stars Car Wash', status: 'active' },
      { name: 'John Rambo', role: 'Sales Person', email: 'johnramboo@gmail.com', phone: '+4644667314646', company: 'Five Stars Car Wash', status: 'inactive' },
      { name: 'John Rambo', role: 'Manager', email: 'johnramboo@gmail.com', phone: '+4644667314646', company: 'Five Stars Car Wash', status: 'active' }
    ],
    documents: [
      { name: 'Workers Compensation', type: 'PDF', description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat.' },
      { name: 'Contract', type: 'PDF', description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat.' },
      { name: 'Invoice', type: 'PDF', description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat.' }
    ],
    items: [
      { name: 'Bumper', qty: '1 PCS', price: '$150.00', status: 'in-progress', description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat.', elapsedTime: '9 Hours', workingTime: '5 Hours' },
      { name: 'Headlight', qty: '2 PCS', price: '$75.00', status: 'not-started', description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat.', elapsedTime: '0 Hours', workingTime: '0 Hours' },
             { name: 'Mirror', qty: '1 PCS', price: '$45.00', status: 'paused', description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat.', elapsedTime: '3 Hours', workingTime: '2 Hours' }
     ],
     remarks: [
       { 
         name: 'Bumper', 
         status: 'resolved', 
         description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corper neque pulvinar aliquam',
         type: 'Scratch',
         assessment: 'Easy Fix',
         images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=80&h=80&fit=crop', 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=80&h=80&fit=crop', 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=80&h=80&fit=crop']
       },
       { 
         name: 'Headlight', 
         status: 'pending', 
         description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corper neque pulvinar aliquam',
         type: 'Crack',
         assessment: 'Medium Fix',
         images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=80&h=80&fit=crop', 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=80&h=80&fit=crop', 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=80&h=80&fit=crop']
       },
       { 
         name: 'Mirror', 
         status: 'in-progress', 
         description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corper neque pulvinar aliquam',
         type: 'Broken',
         assessment: 'Hard Fix',
         images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=80&h=80&fit=crop', 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=80&h=80&fit=crop', 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=80&h=80&fit=crop']
       }
     ]
  };

  // Modal handlers
  const handleAddItems = (newItems) => {
    // In a real app, you would update the work order data
    console.log('Adding items:', newItems);
  };

  const handleAddRemark = (newRemark) => {
    // In a real app, you would update the work order data
    console.log('Adding remark:', newRemark);
  };

  const handleAddFollowers = (newFollowers) => {
    // In a real app, you would update the work order data
    console.log('Adding followers:', newFollowers);
  };

  const handleAddFiles = (newFiles) => {
    // In a real app, you would update the work order data
    console.log('Adding files:', newFiles);
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      'pending': { bg: 'bg-orange-500', text: 'text-white', label: 'Pending', icon: FiAlertCircle },
      'in-progress': { bg: 'bg-green-500', text: 'text-white', label: 'In Progress', icon: FiClock },
      'completed': { bg: 'bg-blue-500', text: 'text-white', label: 'Completed', icon: FiCheckCircle },
      'cancelled': { bg: 'bg-red-500', text: 'text-white', label: 'Cancelled', icon: FiAlertCircle },
      'not-started': { bg: 'bg-blue-500', text: 'text-white', label: 'Not Started', icon: FiClock },
      'paused': { bg: 'bg-yellow-500', text: 'text-white', label: 'Paused', icon: FiClock }
    };
    
    const config = statusConfig[status] || { bg: 'bg-gray-400', text: 'text-white', label: status, icon: FiClock };
    const Icon = config.icon;
    
    return (
      <span className={`${config.bg} ${config.text} px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1`}>
        <Icon className="w-3 h-3" />
        <span>{config.label}</span>
      </span>
    );
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FiFileText },
    { id: 'followers', label: 'Followers', icon: FiUser },
    { id: 'documents', label: 'Documents', icon: FiFileText },
    { id: 'items', label: 'Items', icon: FiTruck },
    { id: 'remarks', label: 'Remarks', icon: FiFileText },
    { id: 'activities', label: 'Activities', icon: FiClock }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Vehicle Information */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <FiTruck className="w-5 h-5 text-blue-600 mr-2" />
          Vehicle Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm font-medium text-gray-700">Vehicle</div>
            <div className="text-lg font-semibold text-gray-900">
              {workOrder.vehicle.year} {workOrder.vehicle.color} {workOrder.vehicle.make} {workOrder.vehicle.model}
            </div>
            <div className="text-sm text-gray-500 mt-1">{workOrder.vehicle.mileage}</div>
          </div>
          <div className="space-y-2">
            <div><span className="text-sm font-medium text-gray-700">Stock#:</span> <span className="text-gray-900">{workOrder.vehicle.stockNumber}</span></div>
            <div><span className="text-sm font-medium text-gray-700">Plate#:</span> <span className="text-gray-900">{workOrder.vehicle.plateNumber}</span></div>
            <div><span className="text-sm font-medium text-gray-700">VIN#:</span> <span className="text-gray-900">{workOrder.vehicle.vin}</span></div>
          </div>
        </div>
      </div>

      {/* Service Route */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <FiMapPin className="w-5 h-5 text-blue-600 mr-2" />
          Service Route
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div>
              <div className="text-sm font-medium text-gray-700">Pick-up From</div>
              <div className="text-lg font-semibold text-blue-600">{workOrder.serviceRoute.from}</div>
              <div className="text-sm text-gray-500">{workOrder.pickUpOn}</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div>
              <div className="text-sm font-medium text-gray-700">Deliver To</div>
              <div className="text-lg font-semibold text-blue-600">{workOrder.serviceRoute.to}</div>
              <div className="text-sm text-gray-500">{workOrder.deliveryExpectedOn}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline & Progress */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <FiClock className="w-5 h-5 text-blue-600 mr-2" />
          Timeline & Progress
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div><span className="text-sm font-medium text-gray-700">Posted By:</span> <span className="text-gray-900">{workOrder.postedBy}</span></div>
            <div><span className="text-sm font-medium text-gray-700">Sold By:</span> <span className="text-gray-900">{workOrder.soldBy}</span></div>
            <div><span className="text-sm font-medium text-gray-700">Approved By:</span> <span className="text-gray-900">{workOrder.approvedBy}</span></div>
          </div>
          <div className="space-y-3">
            <div><span className="text-sm font-medium text-gray-700">Man-hours Estimated:</span> <span className="text-gray-900">{workOrder.manHoursEstimated}</span></div>
            <div><span className="text-sm font-medium text-gray-700">Actual Hours:</span> <span className="text-gray-900">{workOrder.actualHours}</span></div>
            <div><span className="text-sm font-medium text-gray-700">Elapsed Time Ready:</span> <span className="text-gray-900">{workOrder.elapsedTimeReady}</span></div>
            <div><span className="text-sm font-medium text-gray-700">Delivered:</span> <span className="text-gray-900">{workOrder.delivered}</span></div>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Rating</h3>
        <div className="flex items-center space-x-2">
          <FiStar className="w-6 h-6 text-yellow-400 fill-current" />
          <span className="text-2xl font-bold text-gray-900">{workOrder.rating}</span>
          <span className="text-gray-500">/ 5.0</span>
        </div>
      </div>
    </div>
  );

  const renderFollowers = () => (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Followers</h3>
          <button 
            onClick={() => setShowAddFollowerModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
          >
            <span>+</span>
            <span>Add Follower</span>
          </button>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {workOrder.followers.map((follower, index) => (
          <div key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" 
                  alt={follower.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-medium text-gray-900">{follower.name}</div>
                  <div className="text-sm text-gray-500">{follower.role}</div>
                  <div className="text-sm text-gray-500">{follower.email}</div>
                  <div className="text-sm text-gray-500">{follower.phone}</div>
                  <div className="text-sm text-blue-600">{follower.company}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  follower.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {follower.status === 'active' ? 'Active' : 'Inactive'}
                </span>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200">
                    <FiBell className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200">
                    <FiMail className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200">
                    <FiPhone className="w-4 h-4" />
                  </button>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <FiMoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Documents</h3>
          <button 
            onClick={() => setShowAddFileModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
          >
            <span>+</span>
            <span>Upload Document</span>
          </button>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {workOrder.documents.map((doc, index) => (
          <div key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PDF</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{doc.name}</div>
                  <div className="text-sm text-gray-500 mt-1">{doc.description}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200">
                  <FiDownload className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200">
                  <FiEye className="w-4 h-4" />
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <FiMoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRemarks = () => (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Remarks</h3>
          <button 
            onClick={() => setShowAddRemarkModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
          >
            <span>+</span>
            <span>Add Remark</span>
          </button>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {workOrder.remarks.map((remark, index) => (
          <div key={index} className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="font-medium text-gray-900">{remark.name}</div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  remark.status === 'resolved' ? 'bg-green-100 text-green-800' : 
                  remark.status === 'pending' ? 'bg-orange-100 text-orange-800' : 
                  'bg-blue-100 text-blue-800'
                }`}>
                  {remark.status === 'resolved' ? 'Resolved' : 
                   remark.status === 'pending' ? 'Pending' : 'In Progress'}
                </span>
                <button className="text-gray-400 hover:text-gray-600">
                  <FiMoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="text-sm text-gray-500 mb-3">{remark.description}</div>
            <div className="flex items-center space-x-4 mb-3">
              <div>
                <span className="text-sm font-medium text-gray-700">Type: </span>
                <span className="text-sm text-gray-900">{remark.type}</span>
              </div>
              <div>
                <span className="text-sm font-medium text-blue-600">Assessment: </span>
                <span className="text-sm text-gray-900">{remark.assessment}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              {remark.images.map((image, imgIndex) => (
                <img 
                  key={imgIndex}
                  src={image} 
                  alt={`${remark.name} detail ${imgIndex + 1}`}
                  className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderActivities = () => (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Work Order Activities</h3>
          <button 
            onClick={() => navigate(`/admin/work-order-activities/${workOrder.id}`)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
          >
            <span>View Full Timeline</span>
            <span>→</span>
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          
          {/* Recent Activities (showing last 3) */}
          <div className="space-y-6">
            {[
              { status: 'Finishing soon', isCurrent: true, user: 'John Rambo, Manager' },
              { status: 'Started', isCompleted: true, user: 'John Rambo, Manager' },
              { status: 'Approved', isCompleted: true, user: 'John Rambo, Manager' }
            ].map((activity, index) => (
              <div key={index} className="relative flex items-start space-x-4">
                {/* Status Icon */}
                <div className="relative z-10">
                  {activity.isCurrent ? (
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <FiClock className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-white border-2 border-green-500 rounded-full flex items-center justify-center">
                      <FiCheck className="w-4 h-4 text-green-500" />
                    </div>
                  )}
                </div>
                
                {/* Activity Content */}
                <div className="flex-1">
                  <div className={`text-lg font-semibold ${
                    activity.isCurrent ? 'text-green-600' : 'text-green-600'
                  }`}>
                    {activity.status}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {activity.user}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <button 
              onClick={() => navigate(`/admin/work-order-activities/${workOrder.id}`)}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Activities →
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderItems = () => (
    <div className="space-y-6">
      {/* Items List */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Items</h3>
            <button 
              onClick={() => setShowAddItemModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
            >
              <span>+</span>
              <span>Add Item</span>
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {workOrder.items.map((item, index) => (
            <div key={index} className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <div className="font-medium text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.qty}</div>
                  <div className="text-sm font-medium text-gray-900">{item.price}</div>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusBadge(item.status)}
                  <button className="text-gray-400 hover:text-gray-600">
                    <FiMoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-3">{item.description}</div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex space-x-4 text-blue-600">
                  <span>Elapsed Time: {item.elapsedTime}</span>
                  <span>Working Time: {item.workingTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Summary */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Summary</h3>
          
          {/* Agreement Breakdown */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">² Under Agreement Goods Subtotal</span>
              <span className="text-sm font-medium text-gray-900">$ 60.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">² Out of Agreement Goods Subtotal</span>
              <span className="text-sm font-medium text-red-600">$ 60.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">² Under Agreement Services Subtotal</span>
              <span className="text-sm font-medium text-gray-900">$ 00.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">² Out of Agreement Services Subtotal</span>
              <span className="text-sm font-medium text-red-600">$ 00.00</span>
            </div>
          </div>

          <hr className="border-gray-200 mb-4" />

          {/* Summary Totals */}
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Total</span>
              <span className="text-sm font-medium text-gray-900">$ 96.50</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">² Approved</span>
              <span className="text-sm font-medium text-green-600">$ 96.50</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">² Unapproved</span>
              <span className="text-sm font-medium text-red-600">$ 96.50</span>
            </div>
          </div>

          <hr className="border-gray-200 mb-4" />

          {/* Final Balance */}
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-blue-600">Balance</span>
            <span className="text-lg font-semibold text-blue-600">$ 96.50</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate(-1)}
              className="text-gray-600 hover:text-gray-800"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Work Order {workOrder.id}</h1>
              <div className="flex items-center space-x-3 mt-1">
                {getStatusBadge(workOrder.status)}
                <div className="flex items-center space-x-2 text-gray-500">
                  <FiMessageCircle className="w-4 h-4" />
                  <span className="text-sm">{workOrder.unreadMessages} messages</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Accept
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'followers' && renderFollowers()}
        {activeTab === 'documents' && renderDocuments()}
        {activeTab === 'items' && renderItems()}
        {activeTab === 'remarks' && renderRemarks()}
        {activeTab === 'activities' && renderActivities()}
      </div>

      {/* Modals */}
      <AddItemModal
        isOpen={showAddItemModal}
        onClose={() => setShowAddItemModal(false)}
        onAdd={handleAddItems}
      />
      
      <AddVehicleRemarkModal
        isOpen={showAddRemarkModal}
        onClose={() => setShowAddRemarkModal(false)}
        onAdd={handleAddRemark}
      />
      
      <AddFollowerModal
        isOpen={showAddFollowerModal}
        onClose={() => setShowAddFollowerModal(false)}
        onAdd={handleAddFollowers}
      />
      
      <AddFileModal
        isOpen={showAddFileModal}
        onClose={() => setShowAddFileModal(false)}
        onAdd={handleAddFiles}
      />
    </div>
  );
};

export default WorkOrderDetail;
