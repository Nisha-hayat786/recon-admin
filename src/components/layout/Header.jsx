import React, { useState } from 'react';

const Header = ({ onMenuClick }) => {
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false);
  
  const organizations = [
    // { id: 1, name: 'ReconControl', email: 'admin@reconcontrol.com', avatar: 'R' },
    { id: 2, name: 'AutoDetailing Pro', email: 'admin@autodetailingpro.com', avatar: 'A' },
    { id: 3, name: 'Car Care Solutions', email: 'admin@carcaresolutions.com', avatar: 'C' },
    { id: 4, name: 'Premium Detailing', email: 'admin@premiumdetailing.com', avatar: 'P' }
  ];

  const [selectedOrg, setSelectedOrg] = useState(organizations[0]);

  const handleOrgSelect = (org) => {
    setSelectedOrg(org);
    setIsOrgDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Menu button and title */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          
              {/* Organization Dropdown */}
              <div className="relative">
            <button
              onClick={() => setIsOrgDropdownOpen(!isOrgDropdownOpen)}
              className="flex items-center space-x-2 p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-sm font-medium text-white">{selectedOrg.avatar}</span>
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">{selectedOrg.name}</p>
                {/* <p className="text-xs text-gray-500">{selectedOrg.email}</p> */}
              </div>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOrgDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                <div className="py-1">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Switch Organization</p>
                  </div>
                  {organizations.map((org) => (
                    <button
                      key={org.id}
                      onClick={() => handleOrgSelect(org)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                        selectedOrg.id === org.id ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                      }`}
                    >
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        selectedOrg.id === org.id ? 'bg-blue-600' : 'bg-gray-200'
                      }`}>
                        <span className={`text-sm font-medium ${
                          selectedOrg.id === org.id ? 'text-white' : 'text-gray-600'
                        }`}>{org.avatar}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${
                          selectedOrg.id === org.id ? 'text-blue-700' : 'text-gray-900'
                        }`}>{org.name}</p>
                        <p className="text-xs text-gray-500 truncate">{org.email}</p>
                      </div>
                      {selectedOrg.id === org.id && (
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                  <div className="border-t border-gray-100">
                    <button className="w-full flex items-center space-x-3 px-4 py-3 text-left text-blue-600 hover:bg-blue-50 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <span className="text-sm font-medium">Add New Organization</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right side - Search, organization dropdown, notifications, profile */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:block relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

      

          {/* Notifications */}
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 0 1 6 6v3.75l2.25 2.25a.75.75 0 0 1-.75 1.25H3a.75.75 0 0 1-.75-.75V9.75a6 6 0 0 1 6-6Z" />
            </svg>
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right hidden md:block">
              <p className="text-sm font-medium text-gray-900">Sophia Calzoni</p>
              <p className="text-xs text-gray-500">sophia@reconcontrol.com</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-sm font-medium text-white">S</span>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isOrgDropdownOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsOrgDropdownOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
