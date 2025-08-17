import React, { useState } from 'react';
import { FiSearch, FiFilter, FiPhone, FiMail, FiMapPin, FiPlus } from 'react-icons/fi';
import vendor from "../assets/images/vendor.svg"
import { useNavigate } from 'react-router-dom';

const customerData = [
    {
        id: 1,
        name: 'Smart Car Wash',
        accountId: '451315354-1',
        status: 'Active',
        statusColor: 'green',
        rating: 4.5,
        email: 'admin@smartcarwash.com',
        phone: '+132164456441',
        address: '9062 South Fairground Drive Natick, MA 01760',
        timezone: 'UTC -5',
        logo: vendor,
    },
    {
        id: 2,
        name: 'Smart Car Wash',
        accountId: '451315354-1',
        status: 'Blocklisted',
        statusColor: 'red',
        rating: 4.5,
        email: 'admin@smartcarwash.com',
        phone: '+132164456441',
        address: '9062 South Fairground Drive Natick, MA 01760',
        timezone: 'UTC -5',
        logo: vendor,
    },
    {
        id: 3,
        name: 'Smart Car Wash',
        accountId: '451315354-1',
        status: 'Suspended',
        statusColor: 'yellow',
        rating: 4.5,
        email: 'admin@smartcarwash.com',
        phone: '+132164456441',
        address: '9062 South Fairground Drive Natick, MA 01760',
        timezone: 'UTC -5',
        logo: vendor,
    },
    {
        id: 4,
        name: 'Smart Car Wash',
        accountId: '451315354-1',
        status: 'Inactive',
        statusColor: 'gray',
        rating: 4.5,
        email: 'admin@smartcarwash.com',
        phone: '+132164456441',
        address: '9062 South Fairground Drive Natick, MA 01760',
        timezone: 'UTC -5',
        logo: vendor,
    },
    {
        id: 5,
        name: 'Smart Car Wash',
        accountId: '451315354-1',
        status: 'Pending',
        statusColor: 'blue',
        rating: 4.5,
        email: 'admin@smartcarwash.com',
        phone: '+132164456441',
        address: '9062 South Fairground Drive Natick, MA 01760',
        timezone: 'UTC -5',
        logo: vendor,
    },
];

const statusStyles = {
    Active: 'bg-green-100 text-green-700',
    Blocklisted: 'bg-red-100 text-red-700',
    Suspended: 'bg-yellow-100 text-yellow-700',
    Inactive: 'bg-gray-100 text-gray-500',
    Pending: 'bg-blue-100 text-blue-700',
};

const Customers = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const filteredCustomers = customerData.filter(customer =>
        customer.name.toLowerCase().includes(search.toLowerCase()) ||
        customer.accountId.toLowerCase().includes(search.toLowerCase()) ||
        customer.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 p-4 relative">
            {/* Search and filter */}
            <div className="flex items-center mb-6 gap-2">
                <div className="flex-1 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <FiSearch className="w-5 h-5" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <button className="p-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    <FiFilter className="w-5 h-5" />
                </button>
                <button className='bg-blue-600 text-white px-4 py-2 rounded-lg' onClick={() => navigate('/admin/create-customer')}>Create Customer</button>
            </div>
            <div className="flex items-center gap-2 mb-4">
                <button className='bg-blue-600 text-white px-4 py-2 rounded-lg'>Linked Customers</button>
                <button className='border border-blue-600 text-blue-600 px-4 py-2 rounded-lg'>My Customers</button>
            </div>
            {/* Table */}
            <div className="overflow-x-auto rounded-lg shadow-sm bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Customer</th>
                            {/* <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Account ID</th> */}
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Rating</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Contact</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Timezone</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredCustomers.map((customer, idx) => (
                            <tr key={customer.id} className="hover:bg-gray-50">
                                <td className="px-4 py-3 flex items-center gap-3">
                                    <img src={customer.logo} alt="logo" className="w-10 h-10 rounded-full border object-cover" />
                                    <div>
                                        <p className="font-medium text-gray-900">{customer.name}</p>
                                        <p className="px-4 text-gray-700 text-xs">#{customer.accountId}</p>
                                    </div>
                                </td>
                                {/* <td className="px-4 py-3 text-gray-700">{customer.accountId}</td> */}
                                <td className="px-4 py-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[customer.status]}`}>{customer.status}</span>
                                </td>
                                <td className="px-4 py-3 text-yellow-500 font-semibold flex items-center gap-1">
                                    {customer.rating} <span className="text-yellow-400">★</span>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex flex-col gap-1 text-xs">
                                        <span className="flex items-center gap-1"><FiMail className="inline w-4 h-4" /> {customer.email}</span>
                                        <span className="flex items-center gap-1"><FiPhone className="inline w-4 h-4" /> {customer.phone}</span>
                                        <span className="flex items-center gap-1"><FiMapPin className="inline w-4 h-4" /> {customer.address}</span>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-gray-700">{customer.timezone}</td>
                                <td className="px-4 py-3">
                                    <div className="flex">
                                        <button className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100" title="Call"><FiPhone /></button>
                                        <button className="p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100" title="Email"><FiMail /></button>
                                        <button className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100" title="Location"><FiMapPin /></button>
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

export default Customers;
