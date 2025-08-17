import React, { useState } from 'react';
import { FiArrowLeft, FiSearch, FiFilter, FiStar, FiMail, FiPhone, FiMapPin, FiRefreshCw, FiMoreVertical, FiMessageCircle, FiFileText, FiFolder } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Agreements = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Sample agreements data based on the image
  const agreements = [
    {
      id: 1,
      logo: '🚗', // Car emoji as placeholder for car brand logo
      name: 'Smart Car Wash',
      accountId: '451351354-1',
      rating: 4.5,
      status: 'Active',
      timezone: 'UTC -5',
      email: 'admin@smartcarwash.com',
      phone: '+1321644654641',
      address: '9062 South Fairground Drive Natick, MA 01760',
      startDate: '12/02/2025, 9:30 PM',
      endDate: '12/02/2025, 9:30 PM',
      autoInvoice: 'Every Week on Fridays',
      autoInvoiceStatus: 'on',
      unreadMessages: 2
    },
    {
      id: 2,
      logo: '🚗',
      name: 'Smart Car Wash',
      accountId: '451351354-1',
      rating: 4.5,
      status: 'Active',
      timezone: 'UTC -5',
      email: 'admin@smartcarwash.com',
      phone: '+1321644654641',
      address: '9062 South Fairground Drive Natick, MA 01760',
      startDate: '12/02/2025, 9:30 PM',
      endDate: '12/02/2025, 9:30 PM',
      autoInvoice: '',
      autoInvoiceStatus: 'off',
      unreadMessages: 0
    }
  ];

  const filteredAgreements = agreements.filter(agreement => {
    return agreement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           agreement.accountId.toLowerCase().includes(searchTerm.toLowerCase()) ||
           agreement.email.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 relative">
      {/* Header */}
      <div className="flex items-center mb-6 gap-2">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <FiArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">Agreements</h1>
      </div>

      {/* Search and filter */}
      <div className="flex items-center mb-6 gap-2">
        <div className="flex-1 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FiSearch className="w-5 h-5" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button className="p-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
          <FiFilter className="w-5 h-5" />
        </button>
        {/* <button className='bg-blue-600 text-white px-4 py-2 rounded-lg'>Create Agreement</button> */}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-sm bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Agreement</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Rating</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Contact</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Timezone</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Dates</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Auto Invoice</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredAgreements.map((agreement) => (
              <tr key={agreement.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => navigate('/admin/agreement-terms')}>
                <td className="px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                    {agreement.logo}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{agreement.name}</p>
                    <p className="px-4 text-gray-700 text-xs">#{agreement.accountId}</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                    {agreement.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-yellow-500 font-semibold flex items-center gap-1">
                  {agreement.rating} <span className="text-yellow-400">★</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-1 text-xs">
                    <span className="flex items-center gap-1"><FiMail className="inline w-4 h-4" /> {agreement.email}</span>
                    <span className="flex items-center gap-1"><FiPhone className="inline w-4 h-4" /> {agreement.phone}</span>
                    <span className="flex items-center gap-1"><FiMapPin className="inline w-4 h-4" /> {agreement.address}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-700">{agreement.timezone}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-1 text-xs">
                    <span className="text-blue-600 font-medium">Starts: {agreement.startDate}</span>
                    <span className="text-red-600 font-medium">Expires: {agreement.endDate}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <FiRefreshCw className="w-4 h-4" />
                    <span>
                      {agreement.autoInvoiceStatus === 'on' 
                        ? `Auto Invoice on: ${agreement.autoInvoice}`
                        : 'Auto Invoice Off:'
                      }
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-1">
                    <button 
                      className="relative p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100" 
                      title="Messages"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/admin/messages');
                      }}
                    >
                      <FiMessageCircle />
                      {agreement.unreadMessages > 0 && (
                        <span className="absolute top-0 right-0 ml-1 bg-red-500 text-white text-xs px-1 rounded-full">
                          {agreement.unreadMessages}
                        </span>
                      )}
                    </button>
                    <button 
                      className="p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100" 
                      title="Agreement Terms"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/admin/agreement-terms');
                      }}
                    >
                      <FiFileText />
                    </button>
                    <button 
                      className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100" 
                      title="Documents"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/admin/documents');
                      }}
                    >
                      <FiFolder />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredAgreements.length === 0 && (
        <div className="p-8 text-center">
          <div className="text-gray-400 text-6xl mb-4">📋</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No agreements found</h3>
          <p className="text-gray-600">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};

export default Agreements;
