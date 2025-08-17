import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const RevisionNoticeModal = ({ isOpen, onClose, onSend }) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const maxCharacters = 500;

  const handleSend = () => {
    if (subject.trim() && message.trim()) {
      onSend({ subject, message });
      setSubject('');
      setMessage('');
      onClose();
    }
  };

  const handleCancel = () => {
    setSubject('');
    setMessage('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <button
            onClick={handleCancel}
            className="text-gray-500 hover:text-gray-700 text-sm font-medium"
          >
            Cancel
          </button>
          <h2 className="text-lg font-semibold text-gray-900">Revision Notice</h2>
          <button
            onClick={handleSend}
            className="text-green-600 hover:text-green-700 text-sm font-medium"
            disabled={!subject.trim() || !message.trim()}
          >
            Send
          </button>
        </div>

        {/* Form */}
        <div className="p-4 space-y-4">
          {/* Subject Input */}
          <div>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Message Input */}
          <div className="relative">
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-900 placeholder-gray-400 resize-none"
            />
            
            {/* Character Counter */}
            <div className="absolute bottom-2 right-2">
              <span className="text-xs text-gray-400">
                {message.length}/{maxCharacters} Characters
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevisionNoticeModal;
