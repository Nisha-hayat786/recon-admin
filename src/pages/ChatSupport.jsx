import React, { useState } from 'react';
import { FiArrowLeft, FiPaperclip, FiSend, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ChatSupport = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages] = useState([
    {
      id: 1,
      text: 'Hi, how are you today, are there any improvements?',
      timestamp: '7:00',
      type: 'incoming'
    },
    {
      id: 2,
      text: 'Hi, how are you today, are there any improvements?',
      timestamp: '7:00',
      type: 'outgoing'
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors" onClick={() => navigate('/admin/help-support')}>
              <FiArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-bold text-gray-900">Chat Support</h1>
          </div>
          <button className="p-2 rounded-full bg-gray-100 text-red-500 hover:bg-gray-200 transition-colors">
            <FiX className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Date Divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500 px-4">Today</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.type === 'outgoing' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${msg.type === 'outgoing'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-900'
                  }`}
              >
                <p className="text-sm">{msg.text}</p>
                <p
                  className={`text-xs mt-1 ${msg.type === 'outgoing'
                      ? 'text-blue-100 text-right'
                      : 'text-gray-500 text-right'
                    }`}
                >
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Bar */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
            <FiPaperclip className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Start typing..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FiSend className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSupport;
