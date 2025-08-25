import React, { useState } from 'react';
import { FiArrowLeft, FiChevronDown, FiCalendar, FiClock, FiSearch, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import AddItemModal from '../../components/AddItemModal';
import AddVehicleRemarkModal from '../../components/AddVehicleRemarkModal';
import AddFollowerModal from '../../components/AddFollowerModal';
import AddFileModal from '../../components/AddFileModal';

const CreateWorkOrder = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: '',
    postedBy: '',
    from: '',
    soldBy: '',
    customer: '',
    availableDate: '',
    availableTime: '',
    pickUpLocation: '',
    pickUpInstructions: '',
    markAsSent: true,
    pickUpInstructionsEnabled: true,
    stockNumber: '',
    plateNumber: '',
    vin: '',
    manufacturedYear: '',
    make: '',
    model: '',
    style: '',
    color: '',
    odometer: '',
    odometerUnit: 'kilometers',
    vehicleRemarksEnabled: true,
    remarks: [],
    items: [],
    followers: [],
    uploadedFiles: [],
    selectedVendor: ''
  });

  // Modal states
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [showAddRemarkModal, setShowAddRemarkModal] = useState(false);
  const [showAddFollowerModal, setShowAddFollowerModal] = useState(false);
  const [showAddFileModal, setShowAddFileModal] = useState(false);

  // Sample data for dropdowns
  const workOrderTypes = ['Maintenance', 'Repair', 'Inspection', 'Custom'];
  const users = ['Maria Dias', 'John Rambo', 'Mr. Pickles', 'Admin User'];
  const locations = ['Smart Car Wash', 'ABC Car Detailing', 'Main Garage', 'Service Center'];
  const customers = ['ABC Company', 'XYZ Corp', 'Local Business', 'Individual Customer'];
  const makes = ['Honda', 'Toyota', 'Ford', 'BMW', 'Mercedes', 'Audi'];
  const models = ['Civic', 'Accord', 'CR-V', 'Pilot'];
  const styles = ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Wagon'];
  const colors = ['White', 'Black', 'Red', 'Blue', 'Silver', 'Gray'];
  const odometerUnits = ['Kilometers', 'Miles'];

  // Sample data for new sections
  const vendors = ['ABC Vendor', 'XYZ Supplier', 'Local Parts', 'Premium Services'];
  const remarkTypes = ['Scratch', 'Dent', 'Crack', 'Broken', 'Wear'];
  const assessments = ['Easy Fix', 'Medium Fix', 'Hard Fix', 'Replacement Needed'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Work Order Data:', formData);
    // Handle form submission here
    navigate('/admin/work-orders');
  };

  // Modal handlers
  const handleAddItems = (newItems) => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, ...newItems]
    }));
  };

  const handleAddRemark = (newRemark) => {
    setFormData(prev => ({
      ...prev,
      remarks: [...prev.remarks, { ...newRemark, id: Date.now() }]
    }));
  };

  const handleAddFollowers = (newFollowers) => {
    setFormData(prev => ({
      ...prev,
      followers: [...prev.followers, ...newFollowers]
    }));
  };

  const handleAddFiles = (newFiles) => {
    setFormData(prev => ({
      ...prev,
      uploadedFiles: [...prev.uploadedFiles, ...newFiles]
    }));
  };

  const DropdownField = ({ label, value, options, onChange, placeholder, required = false }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 appearance-none"
          required={required}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
      </div>
    </div>
  );

  const TextField = ({ label, value, onChange, placeholder, type = 'text', required = false, icon = null }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
          required={required}
        />
        {icon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
      </div>
    </div>
  );

  const ToggleSwitch = ({ label, checked, onChange, description = '' }) => (
    <div className="flex items-center justify-between mb-4">
      <div>
        <span className="text-sm font-medium text-gray-700">{label}</span>
        {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${checked ? 'bg-green-600' : 'bg-gray-200'
          }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'
            }`}
        />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="m-6 mb-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">

            <button
              onClick={() => navigate(-1)}
              className="text-gray-600 hover:text-gray-800"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-semibold text-gray-900">Create Work Order</h1>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        {/* Mark as Sent Toggle */}
        <div className="mb-4">
          <ToggleSwitch
            label="Mark as Sent After Saving WO"
            checked={formData.markAsSent}
            onChange={(value) => handleInputChange('markAsSent', value)}
          />
        </div>

        {/* Work Order Details */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <input
              type="text"
              value={formData.type}
              onChange={(e) => handleInputChange('type', e.target.value)}
              placeholder="Type"
              className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <input
              type="text"
              value={formData.postedBy}
              onChange={(e) => handleInputChange('postedBy', e.target.value)}
              placeholder="Posted By"
              className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <input
              type="text"
              value={formData.from}
              onChange={(e) => handleInputChange('from', e.target.value)}
              placeholder="From"
              className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <input
              type="text"
              value={formData.soldBy}
              onChange={(e) => handleInputChange('soldBy', e.target.value)}
              placeholder="Sold By"
              className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <input
              type="text"
              value={formData.customer}
              onChange={(e) => handleInputChange('customer', e.target.value)}
              placeholder="Customer"
              className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Available For Pick Up */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="relative">
              <input
                type="date"
                value={formData.availableDate}
                onChange={(e) => handleInputChange('availableDate', e.target.value)}
                className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
              />
              <FiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div>
            <div className="relative">
              <input
                type="time"
                value={formData.availableTime}
                onChange={(e) => handleInputChange('availableTime', e.target.value)}
                className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
              />
              <FiClock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Pick-up Location */}
        <div className="mb-4">
          <input
            type="text"
            value={formData.pickUpLocation}
            onChange={(e) => handleInputChange('pickUpLocation', e.target.value)}
            placeholder="Pick-up Location"
            className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Pick-up Instructions */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Pick-up Instructions</h2>
            <ToggleSwitch
              label=""
              checked={formData.pickUpInstructionsEnabled}
              onChange={(value) => handleInputChange('pickUpInstructionsEnabled', value)}
            />
          </div>

          {formData.pickUpInstructionsEnabled && (
            <div>
              <textarea
                value={formData.pickUpInstructions}
                onChange={(e) => handleInputChange('pickUpInstructions', e.target.value)}
                placeholder="Lorem ipsum dolor sit amet consectetur. Dignissim quis id eu id tristique elementum arcu scelerisque."
                className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 resize-none"
                rows={4}
                maxLength={200}
              />
              <div className="text-right mt-2">
                <span className="text-xs text-gray-500">
                  {formData.pickUpInstructions.length}/200 Characters
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Vehicle Information */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Information</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="relative">
                <input
                  type="text"
                  value={formData.stockNumber}
                  onChange={(e) => handleInputChange('stockNumber', e.target.value)}
                  placeholder="Stock#"
                  className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                />
                <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="text"
                  value={formData.plateNumber}
                  onChange={(e) => handleInputChange('plateNumber', e.target.value)}
                  placeholder="Plate#"
                  className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                />
                <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="text"
                  value={formData.vin}
                  onChange={(e) => handleInputChange('vin', e.target.value)}
                  placeholder="VIN#"
                  className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                />
                <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div>
              <input
                type="number"
                value={formData.manufacturedYear}
                onChange={(e) => handleInputChange('manufacturedYear', e.target.value)}
                placeholder="Manufactured Year"
                className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <select
                value={formData.make}
                onChange={(e) => handleInputChange('make', e.target.value)}
                className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 appearance-none"
              >
                <option value="">Make</option>
                {makes.map((make) => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
            </div>

            <div>
              <select
                value={formData.model}
                onChange={(e) => handleInputChange('model', e.target.value)}
                className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 appearance-none"
              >
                <option value="">Model</option>
                {models.map((model) => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <select
                  value={formData.style}
                  onChange={(e) => handleInputChange('style', e.target.value)}
                  className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 appearance-none"
                >
                  <option value="">Style</option>
                  {styles.map((style) => (
                    <option key={style} value={style}>{style}</option>
                  ))}
                </select>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <FiUser className="w-6 h-6 text-white" />
              </div>
            </div>

            <div>
              <select
                value={formData.color}
                onChange={(e) => handleInputChange('color', e.target.value)}
                className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 appearance-none"
              >
                <option value="">Color</option>
                {colors.map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end space-x-2">
              <div className="flex-1">
                <input
                  type="number"
                  value={formData.odometer}
                  onChange={(e) => handleInputChange('odometer', e.target.value)}
                  placeholder="Odometer"
                  className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <select
                  value={formData.odometerUnit}
                  onChange={(e) => handleInputChange('odometerUnit', e.target.value)}
                  className="px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 appearance-none"
                >
                  {odometerUnits.map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Remarks */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Vehicle Remarks</h2>
            <ToggleSwitch
              label=""
              checked={formData.vehicleRemarksEnabled}
              onChange={(value) => handleInputChange('vehicleRemarksEnabled', value)}
            />
          </div>

          {formData.vehicleRemarksEnabled && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-600 font-medium">Remarks</span>
                <button
                  type="button"
                  onClick={() => setShowAddRemarkModal(true)}
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
                >
                  <span>Add (+)</span>
                </button>
              </div>

              {/* Remarks Table */}
              <div className="bg-blue-600 text-white p-3 rounded-t-lg">
                <div className="grid grid-cols-4 gap-4 text-sm font-medium">
                  <div>Where</div>
                  <div>Type</div>
                  <div>Assessment</div>
                  <div>Action</div>
                </div>
              </div>

              {/* Sample Remark Entry */}
              <div className="border border-gray-200 rounded-b-lg p-4">
                <div className="grid grid-cols-4 gap-4 mb-3">
                  <div className="font-medium">Bumper</div>
                  <div>Scratch</div>
                  <div>Easy Fix</div>
                  <div className="text-right">
                    <button className="text-gray-400 hover:text-gray-600">
                      ⋮
                    </button>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corper neque pulvinar aliquam urna. Sit elementum urna in aliquam tristique ullamcorper.
                </div>
                <div className="flex items-center justify-between">
                  <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 flex items-center space-x-1">
                    <span>Images</span>
                    <span>↗</span>
                  </button>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Resolved</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Goods and Services */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Goods and Services</h2>
          <select
            value={formData.selectedVendor}
            onChange={(e) => handleInputChange('selectedVendor', e.target.value)}
            className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 appearance-none"
          >
            <option value="">Select Vendor</option>
            {vendors.map((vendor) => (
              <option key={vendor} value={vendor}>{vendor}</option>
            ))}
          </select>
        </div>

        {/* Items */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Items</h2>
            <button
              type="button"
              onClick={() => setShowAddItemModal(true)}
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
            >
              <span>Add (+)</span>
            </button>
          </div>

          {/* Items Table */}
          <div className="bg-blue-600 text-white p-3 rounded-t-lg">
            <div className="grid grid-cols-4 gap-4 text-sm font-medium">
              <div>Name</div>
              <div>Qty/UoM</div>
              <div>Price</div>
              <div>Action</div>
            </div>
          </div>

          {/* Sample Item Entries */}
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-b-lg p-4 mb-4">
              <div className="grid grid-cols-4 gap-4 mb-3">
                <div className="font-medium">Bumper</div>
                <div>1 PCS</div>
                <div>$150.00</div>
                <div className="text-right">
                  <button className="text-gray-400 hover:text-gray-600">
                    ⋮
                  </button>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-3">
                Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corper neque pulvinar aliquam urna. Sit elementum urna in aliquam tristique ullamcorper.
              </div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-blue-600 text-sm">
                  <span>Elapsed Time: 9 Hours</span>
                  <span>Working Time: 5 Hours</span>
                </div>
                <span className={`px-2 py-1 text-white text-xs rounded ${index === 0 ? 'bg-green-500' :
                    index === 1 ? 'bg-blue-500' : 'bg-yellow-500'
                  }`}>
                  {index === 0 ? 'IN Progress' :
                    index === 1 ? 'Not Started' : 'Paused'}
                </span>
              </div>
            </div>
          ))}

          {/* Financial Summary */}
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <h3 className="font-medium text-gray-900 mb-3">Financial Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>² Under Agreement Goods Subtotal</span>
                <span>$ 60.00</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>² Out of Agreement Goods Subtotal</span>
                <span>$ 60.00</span>
              </div>
              <div className="flex justify-between">
                <span>² Under Agreement Services Subtotal</span>
                <span>$ 00.00</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>² Out of Agreement Services Subtotal</span>
                <span>$ 00.00</span>
              </div>
              <hr className="border-gray-300 my-2" />
              <div className="flex justify-between text-blue-600 font-medium">
                <span>Total</span>
                <span>$ 96.50</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>² Approved</span>
                <span>$ 96.50</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>² Unapproved</span>
                <span>$ 96.50</span>
              </div>
              <hr className="border-gray-300 my-2" />
              <div className="flex justify-between text-blue-600 font-semibold">
                <span>Balance</span>
                <span>$ 96.50</span>
              </div>
            </div>
          </div>
        </div>

        {/* Followers */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Followers</h2>
            <button
              type="button"
              onClick={() => setShowAddFollowerModal(true)}
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
            >
              <span>Add (+)</span>
            </button>
          </div>

          {/* Followers Table */}
          <div className="bg-blue-600 text-white p-3 rounded-t-lg">
            <div className="grid grid-cols-2 gap-4 text-sm font-medium">
              <div>Name</div>
              <div>Action</div>
            </div>
          </div>

          {/* Sample Follower Entries */}
          {[1, 2, 3].map((follower, index) => (
            <div key={index} className="border border-gray-200 rounded-b-lg p-4 mb-4">
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <div className="font-medium">Andrew Garfield</div>
                  <div className="text-sm text-gray-600 mt-1">
                    <span className="inline-flex items-center space-x-1">
                      <span>✉</span>
                      <span>admin@smartcarwash.com</span>
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="inline-flex items-center space-x-1">
                      <span>📞</span>
                      <span>+1321644654641</span>
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <button className="text-gray-400 hover:text-gray-600">
                    ⋮
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Uploaded Files */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Uploaded Files</h2>
            <button
              type="button"
              onClick={() => setShowAddFileModal(true)}
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
            >
              <span>Add (+)</span>
            </button>
          </div>

          {/* Files Table */}
          {/* <div className="bg-blue-600 text-white p-3 rounded-t-lg">
            <div className="grid grid-cols-2 gap-4 text-sm font-medium">
              <div>Name</div>
              <div>Action</div>
            </div>
          </div> */}

          {/* Sample File Entries */}
          {[1, 2, 3].map((file, index) => (
            <div key={index} className="border border-gray-200 rounded-b-lg p-4 mb-4">
              <div className="flex justify-between gap-4 mb-3 w-full">
                <div>

                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">PDF</span>
                    </div>
                    <span className="font-medium">Workers Compensation</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet consectetur. Vestibulum elit placerat ut enim. Morbi in netus est feugiat. Ut in ullam corper neque pulvinar aliquam
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Upload by: John Moriati , 
                    12/02/2025, 9:30 PM

                  </div>
                  <div className="text-sm text-gray-600">
                  </div>
                </div>
                 
                 
                <div className="flex justify-between gap-4">
                <div>

                
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600 hover:bg-blue-200">
                      ↓
                    </button>
                    <button className="w-8 h-8 bg-blue-100 rounded flex items-center space-x-2">
                      ★
                    </button>
                  </div>
                </div>
              </div>
            
            </div>
          ))}
        </div>

        {/* Tags Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Tags</h2>
          <div className="text-gray-500 text-sm">
            No tags added yet
          </div>
        </div>

      </form>

      {/* Modals */}
      <AddItemModal
        isOpen={showAddItemModal}
        onClose={() => setShowAddItemModal(false)}
        onAdd={handleAddItems}
      />

      <AddVehicleRemarkModal
        isOpen={showAddRemarkModal}
        onClose={() => setShowAddRemarkModal(false)}
        onAdd={handleAddRemark}
      />

      <AddFollowerModal
        isOpen={showAddFollowerModal}
        onClose={() => setShowAddFollowerModal(false)}
        onAdd={handleAddFollowers}
      />

      <AddFileModal
        isOpen={showAddFileModal}
        onClose={() => setShowAddFileModal(false)}
        onAdd={handleAddFiles}
      />
    </div>
  );
};

export default CreateWorkOrder;
