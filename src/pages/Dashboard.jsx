import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Monthly');
  const [selectedFilter, setSelectedFilter] = useState('Work Orders');
  const [selectedDeliveryFilter, setSelectedDeliveryFilter] = useState('Overdue');

  const periods = ['Yearly', 'Monthly', 'Weekly'];
  const transactionFilters = ['Payments', 'Pending Approvals', 'Hire a Pro', 'Work Orders'];
  const deliveryFilters = ['Overdue', 'Soon', 'Ready'];

  // Chart data for work orders
  const chartData = [
    { month: 'Mar', created: 3000, delivered: 3200, cancelled: 1800 },
    { month: 'Apr', created: 2500, delivered: 2700, cancelled: 1500 },
    { month: 'May', created: 1000, delivered: 1200, cancelled: 800 },
    { month: 'Jun', created: 1800, delivered: 2000, cancelled: 1200 },
    { month: 'Jul', created: 2200, delivered: 2400, cancelled: 1800 },
    { month: 'Aug', created: 2800, delivered: 3000, cancelled: 3000 },
    { month: 'Sep', created: 1700, delivered: 2000, cancelled: 2700 }
  ];

  // Recent Transactions data
  const recentTransactions = [
    {
      id: 1,
      poNumber: 'PO-15345132',
      status: 'Accepted',
      date: '12/02/2025, 9:30 PM',
      amount: '$ 15,263.00',
      supplier: 'ABC Car Detailing Supplier',
      deliveryExpected: '12/02/2025, 9:30 PM',
      vehicle: '2024 White Honda Civic, 1500 Miles',
      vin: '25GJ525G72M34F42',
      plate: 'DF57234',
      stock: '2557234',
      messages: 2
    },
    {
      id: 2,
      poNumber: 'PO-15345133',
      status: 'Accepted',
      date: '12/02/2025, 9:30 PM',
      amount: '$ 15,263.00',
      supplier: 'ABC Car Detailing Supplier',
      deliveryExpected: '12/02/2025, 9:30 PM',
      vehicle: '2024 White Honda Civic, 1500 Miles',
      vin: '25GJ525G72M34F42',
      plate: 'DF57234',
      stock: '2557234',
      messages: 2
    },
    {
      id: 3,
      poNumber: 'PO-15345134',
      status: 'Accepted',
      date: '12/02/2025, 9:30 PM',
      amount: '$ 15,263.00',
      supplier: 'ABC Car Detailing Supplier',
      deliveryExpected: '12/02/2025, 9:30 PM',
      vehicle: '2024 White Honda Civic, 1500 Miles',
      vin: '25GJ525G72M34F42',
      plate: 'DF57234',
      stock: '2557234',
      messages: 2
    }
  ];

  // Delivery data
  const deliveryItems = [
    {
      id: 1,
      poNumber: 'PO-15345132',
      status: 'Delivery Overdue',
      date: '12/02/2025, 9:30 PM',
      amount: '$ 15,263.00',
      supplier: 'ABC Car Detailing Supplier',
      deliveryExpected: '12/02/2025, 9:30 PM',
      vehicle: '2024 White Honda Civic, 1500 Miles',
      vin: '25GJ525G72M34F42',
      plate: 'DF57234',
      stock: '2557234',
      messages: 2
    },
    {
      id: 2,
      poNumber: 'PO-15345133',
      status: 'Delivery Overdue',
      date: '12/02/2025, 9:30 PM',
      amount: '$ 15,263.00',
      supplier: 'ABC Car Detailing Supplier',
      deliveryExpected: '12/02/2025, 9:30 PM',
      vehicle: '2024 White Honda Civic, 1500 Miles',
      vin: '25GJ525G72M34F42',
      plate: 'DF57234',
      stock: '2557234',
      messages: 2
    },
    {
      id: 3,
      poNumber: 'PO-15345134',
      status: 'Delivery Overdue',
      date: '12/02/2025, 9:30 PM',
      amount: '$ 15,263.00',
      supplier: 'ABC Car Detailing Supplier',
      deliveryExpected: '12/02/2025, 9:30 PM',
      vehicle: '2024 White Honda Civic, 1500 Miles',
      vin: '25GJ525G72M34F42',
      plate: 'DF57234',
      stock: '2557234',
      messages: 2
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Work Orders Chart Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Work Orders</h3>
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {periods.map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  selectedPeriod === period
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="created" fill="#3B82F6" name="Created" />
              <Bar dataKey="delivered" fill="#10B981" name="Delivered" />
              <Bar dataKey="cancelled" fill="#DC2626" name="Cancelled" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Transactions Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
          </div>
          <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
            <span className="text-sm font-medium underline">View All</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {transactionFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                selectedFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PO Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Messages</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    {transaction.poNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.supplier}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.vehicle}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="relative">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{transaction.messages}</span>
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delivery Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">Delivery</h3>
          </div>
          <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
            <span className="text-sm font-medium underline">View All</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex space-x-2 mb-6">
          {deliveryFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedDeliveryFilter(filter)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                selectedDeliveryFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Delivery Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PO Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Messages</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {deliveryItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    {item.poNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    {item.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.supplier}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.vehicle}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="relative">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{item.messages}</span>
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;