import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiSearch, FiFilter, FiChevronRight, FiChevronDown, FiChevronUp, FiPlay, FiMessageCircle, FiGlobe, FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';

const HelpSupport = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [expandedFaq, setExpandedFaq] = useState(0);
  const navigate = useNavigate();

  const contactOptions = [
    {
      id: 1,
      name: 'Chat Support',
      description: 'Create Report of Paid, Overdue, Outstanding, Upcoming, Aging.',
      icon: <FiMessageCircle className="w-6 h-6" />,
      color: 'blue',
      notification: 0
    },
    {
      id: 2,
      name: 'WhatsApp',
      description: 'Create Report of Paid, Overdue, Outstanding, Aging',
      icon: <FaWhatsapp className="w-6 h-6" />,
      color: 'green'
    },
    {
      id: 3,
      name: 'Website',
      description: 'Create Report of Goods and Services Under/Out of Agreement.',
      icon: <FiGlobe className="w-6 h-6" />,
      color: 'blue'
    },
    {
      id: 4,
      name: 'Facebook',
      description: 'Create Statistics Report.',
      icon: <FaFacebook className="w-6 h-6" />,
      color: 'blue'
    },
    {
      id: 5,
      name: 'Write us an Email',
      description: 'Create Statistics Report.',
      icon: <FiMail className="w-6 h-6" />,
      color: 'blue'
    }
  ];

  const faqCategories = [
    { id: 'general', name: 'General' },
    { id: 'accounts', name: 'Accounts' },
    { id: 'payments', name: 'Payments' },
    { id: 'vendors', name: 'Vend' }
  ];

  const faqItems = [
    {
      id: 1,
      question: 'How do I manage my notifications?',
      answer: 'To manage notifications, go to "Settings," select "Notification Settings," and customize your preferences.',
      category: 'general',
      hasVideo: true
    },
    {
      id: 2,
      question: 'How do I start a guided meditation session?',
      answer: 'To start a guided meditation session, navigate to the meditation section and select your preferred session type.',
      category: 'general',
      hasVideo: false
    },
    {
      id: 3,
      question: 'How do I start a guided meditation session?',
      answer: 'To start a guided meditation session, navigate to the meditation section and select your preferred session type.',
      category: 'general',
      hasVideo: false
    },
    {
      id: 4,
      question: 'How do I start a guided meditation session?',
      answer: 'To start a guided meditation session, navigate to the meditation section and select your preferred session type.',
      category: 'general',
      hasVideo: false
    },
    {
      id: 5,
      question: 'How do I start a guided meditation session?',
      answer: 'To start a guided meditation session, navigate to the meditation section and select your preferred session type.',
      category: 'general',
      hasVideo: false
    }
  ];

  const filteredFaqItems = faqItems.filter(item => 
    item.category === selectedCategory &&
    (item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
     item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      red: 'bg-red-100 text-red-600'
    };
    return colors[color] || colors.blue;
  };

  const handleFaqToggle = (faqId) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  const handleContactOption = (option) => {
    if (option.name === 'Chat Support') {
      navigate('/admin/chat-support');
    } else {
      console.log(`Selected contact option: ${option.name}`);
      // Handle navigation to specific contact method
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'faq'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'contact'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Contact Us
          </button>
        </div>

        {activeTab === 'contact' && (
          <div className="space-y-4">
            {contactOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => handleContactOption(option)}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(option.color)} relative`}>
                      {option.icon}
                      {option.notification !== undefined && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-medium">{option.notification}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {option.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {option.description}
                      </p>
                    </div>
                  </div>
                  <FiChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'faq' && (
          <div>
            {/* Search and Filter */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button className="p-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                  <FiFilter className="w-5 h-5" />
                </button>
              </div>

              {/* Category Filters */}
              <div className="flex space-x-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-blue-600 border border-blue-200 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFaqItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <button
                    onClick={() => handleFaqToggle(item.id)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <h3 className="text-sm font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    {expandedFaq === item.id ? (
                      <FiChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <FiChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {expandedFaq === item.id && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-gray-600 mb-3">
                        {item.answer}
                      </p>
                      {item.hasVideo && (
                        <div className="flex justify-end">
                          <button className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                            <FiPlay className="w-4 h-4" />
                            <span>Watch Video</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Empty state when no results */}
            {filteredFaqItems.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <FiSearch className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQ items found</h3>
                <p className="text-gray-500">Try adjusting your search terms or browse different categories.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpSupport;
