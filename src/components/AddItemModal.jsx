import React, { useState } from 'react';
import { FiX, FiSearch, FiFilter } from 'react-icons/fi';

const AddItemModal = ({ isOpen, onClose, onAdd }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  // Sample items data
  const items = [
    {
      id: 1,
      name: 'Regulars Wash',
      qty: 1,
      uom: 'PCS',
      unitPrice: 150.00,
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corper neque pulvinar aliquam urna. Sit elementum urna in aliquam tristique ullamcorper.',
      manHours: 12
    },
    {
      id: 2,
      name: 'Shampoo',
      qty: 1,
      uom: 'PCS',
      unitPrice: 150.00,
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corper neque pulvinar aliquam urna. Sit elementum urna in aliquam tristique ullamcorper.',
      manHours: 12
    },
    {
      id: 3,
      name: 'Waxing',
      qty: 1,
      uom: 'PCS',
      unitPrice: 'Covered',
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corper neque pulvinar aliquam urna. Sit elementum urna in aliquam tristique ullamcorper.',
      manHours: 12
    }
  ];

  const handleItemToggle = (itemId) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleQuantityChange = (itemId, newQty) => {
    // Update quantity logic here
  };

  const handleAddSelected = () => {
    const selectedItemsData = items.filter(item => selectedItems.includes(item.id));
    onAdd(selectedItemsData);
    onClose();
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Cancel
          </button>
          <h2 className="text-xl font-semibold text-gray-900">Add Items</h2>
          <button
            onClick={handleAddSelected}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Save
          </button>
        </div>

        {/* Search and Filter */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
              <FiFilter className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Items List */}
        <div className="overflow-y-auto max-h-96">
          {/* Table Header */}
          <div className="bg-blue-600 text-white p-3">
            <div className="grid grid-cols-4 gap-4 text-sm font-medium">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedItems.length === items.length}
                  onChange={() => {
                    if (selectedItems.length === items.length) {
                      setSelectedItems([]);
                    } else {
                      setSelectedItems(items.map(item => item.id));
                    }
                  }}
                  className="mr-2"
                />
                Item
              </div>
              <div>Qty/UoM</div>
              <div>Unit Price</div>
            </div>
          </div>

          {/* Items */}
          {filteredItems.map((item) => (
            <div key={item.id} className="border-b border-gray-200 p-4">
              <div className="grid grid-cols-4 gap-4 mb-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleItemToggle(item.id)}
                    className="mr-2"
                  />
                  <span className="font-medium">{item.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={item.qty}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className="w-16 px-2 py-1 bg-gray-100 rounded border-none text-center"
                  />
                  <span className="px-3 py-1 bg-gray-100 rounded text-sm">{item.uom}</span>
                </div>
                <div className={`px-3 py-1 rounded text-sm ${
                  item.unitPrice === 'Covered' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'text-gray-900'
                }`}>
                  {typeof item.unitPrice === 'number' ? `$ ${item.unitPrice.toFixed(2)}` : item.unitPrice}
                </div>
              </div>
              
              <div className="text-sm text-gray-600 mb-3">
                {item.description}
              </div>
              
              <div className="text-right">
                <span className="text-blue-600 text-sm">
                  Estimated Man-hours: {item.manHours} Hours
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
