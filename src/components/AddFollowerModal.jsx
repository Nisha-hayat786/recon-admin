import React, { useState } from 'react';
import { FiSearch, FiUser, FiSettings } from 'react-icons/fi';

const AddFollowerModal = ({ isOpen, onClose, onAdd }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('users');
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Sample users data
  const users = [
    {
      id: 1,
      name: 'John Rambo',
      role: 'Administrator',
      email: 'johnramboo@gmail.com',
      company: 'Five Stars Car Wash',
      phone: '+4644667314646',
      status: 'Active',
      profilePic: '👤'
    },
    {
      id: 2,
      name: 'Maria Dias',
      role: 'Sales Person',
      email: 'mariadias@email.com',
      company: 'Smart Car Wash',
      phone: '+1234567890',
      status: 'Inactive',
      profilePic: '👤'
    },
    {
      id: 3,
      name: 'Mr. Pickles',
      role: 'Manager',
      email: 'pickles@email.com',
      company: 'ABC Car Detailing',
      phone: '+0987654321',
      status: 'Active',
      profilePic: '👤'
    },
    {
      id: 4,
      name: 'Admin User',
      role: 'Accounting',
      email: 'admin@email.com',
      company: 'Main Garage',
      phone: '+1122334455',
      status: 'Active',
      profilePic: '👤'
    }
  ];

  const customers = [
    {
      id: 1,
      name: 'ABC Company',
      type: 'Business',
      email: 'contact@abc.com',
      phone: '+1234567890',
      status: 'Active'
    },
    {
      id: 2,
      name: 'XYZ Corp',
      type: 'Business',
      email: 'info@xyz.com',
      phone: '+0987654321',
      status: 'Active'
    }
  ];

  const handleUserToggle = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleAddSelected = () => {
    const selectedData = activeTab === 'users' 
      ? users.filter(user => selectedUsers.includes(user.id))
      : customers.filter(customer => selectedUsers.includes(customer.id));
    
    onAdd(selectedData);
    onClose();
    setSelectedUsers([]);
  };

  const filteredItems = activeTab === 'users' 
    ? users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : customers.filter(customer => customer.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
          >
            ←
          </button>
          <h2 className="text-xl font-semibold text-gray-900">Users</h2>
          <button
            onClick={handleAddSelected}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Save
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('customers')}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                activeTab === 'customers' 
                  ? 'bg-gray-200 text-gray-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <FiSettings className="w-4 h-4" />
              <span>Customers</span>
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                activeTab === 'users' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <FiUser className="w-4 h-4" />
              <span>Users</span>
            </button>
          </div>
        </div>

        {/* Users/Customers List */}
        <div className="overflow-y-auto max-h-96">
          {filteredItems.map((item) => (
            <div key={item.id} className="border-b border-gray-200 p-4">
              <div className="flex items-start space-x-4">
                {/* Profile Picture and Checkbox */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    {item.profilePic || '👤'}
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(item.id)}
                    onChange={() => handleUserToggle(item.id)}
                    className="w-4 h-4"
                  />
                </div>

                {/* User Details */}
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-600">{item.role || item.type}</div>
                  <div className="text-sm text-gray-600">{item.email}</div>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-blue-600">🏢</span>
                    <span className="text-blue-600 text-sm">{item.company || 'N/A'}</span>
                  </div>
                </div>

                {/* Status and Actions */}
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    item.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.status}
                  </span>
                  <button className="text-gray-400 hover:text-gray-600">
                    ⋮
                  </button>
                  <div className="text-sm text-gray-600">{item.phone}</div>
                  
                  {/* Action Icons */}
                  <div className="flex space-x-2">
                    <button className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.status === 'Active' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      🔔
                    </button>
                    <button className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.status === 'Active' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      ✉
                    </button>
                    <button className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.status === 'Active' ? 'bg-gray-100 text-gray-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      📞
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddFollowerModal;
