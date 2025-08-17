import React, { useState } from 'react';
import { FiArrowLeft, FiPlus, FiSend } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Messages = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [showMoreMessages, setShowMoreMessages] = useState({});

  // Sample data
  const entity = {
    name: 'Smart Car Wash',
    accountId: '451351354-1',
    status: 'Active',
    logo: '🚗',
    agreementId: 'AT123456789'
  };

  const revisionNotices = [
    {
      id: 1,
      status: 'Ongoing',
      statusColor: 'bg-orange-100 text-orange-700',
      messages: [
        {
          id: 1,
          name: 'John Rambo',
          role: 'Manager',
          avatar: '👨',
          timestamp: '12/02/2025, 9:30 PM',
          message: 'Lorem ipsum dolor sit amet consectetur. Mauris pellentesque sed quam bibendum dignissim amet amet. Enim viverra viverra lectus suscipit ac.',
          showMore: false
        },
        {
          id: 2,
          name: 'Vendor',
          role: 'Manager',
          avatar: '👨‍💼',
          timestamp: '12/02/2025, 9:30 PM',
          message: 'Lorem ipsum dolor sit amet consectetur. Mauris pellentesque sed quam bibendum dignissim amet amet. Enim viverra viverra lectus suscipit ac.',
          showMore: false
        }
      ]
    },
    {
      id: 2,
      status: 'Resolved',
      statusColor: 'bg-green-100 text-green-700',
      messages: [
        {
          id: 3,
          name: 'John Rambo',
          role: 'Manager',
          avatar: '👨',
          timestamp: '12/02/2025, 9:30 PM',
          message: 'Lorem ipsum dolor sit amet consectetur. Mauris pellentesque sed quam bibendum dignissim amet amet. Enim viverra viverra lectus suscipit ac.',
          showMore: false
        },
        {
          id: 4,
          name: 'Vendor',
          role: 'Manager',
          avatar: '👨‍💼',
          timestamp: '12/02/2025, 9:30 PM',
          message: 'Lorem ipsum dolor sit amet consectetur. Mauris pellentesque sed quam bibendum dignissim amet amet. Enim viverra viverra lectus suscipit ac.',
          showMore: false
        }
      ]
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  const toggleShowMore = (messageId) => {
    setShowMoreMessages(prev => ({
      ...prev,
      [messageId]: !prev[messageId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FiArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
          <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            <FiPlus className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-6 pb-14">
        {revisionNotices.map((notice) => (
          <div key={notice.id} className="space-y-4">
            {/* Revision Notice Header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2">
                <span className="text-blue-600 font-medium underline cursor-pointer">
                  Revision Notice
                </span>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${notice.statusColor}`}>
                  {notice.status}
                </span>
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-4">
              {notice.messages.map((msg) => (
                <div key={msg.id} className="flex gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-lg">
                    {msg.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900">{msg.name}</p>
                        <p className="text-sm text-gray-600">{msg.role}</p>
                      </div>
                      <span className="text-xs text-gray-500">{msg.timestamp}</span>
                    </div>
                    <div className="text-sm text-gray-700 leading-relaxed mb-2">
                      {showMoreMessages[msg.id] ? (
                        <p>{msg.message}</p>
                      ) : (
                        <p>{msg.message.substring(0, 100)}...</p>
                      )}
                      <button 
                        onClick={() => toggleShowMore(msg.id)}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        {showMoreMessages[msg.id] ? 'See less...' : 'See more...'}
                      </button>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                      <FiArrowLeft className="w-3 h-3 transform rotate-180" />
                      Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex gap-2 mx-auto">
          <input
            type="text"
            placeholder="Start typing..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleSendMessage}
            className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiSend className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
