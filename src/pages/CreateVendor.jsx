import React, { useState } from 'react';
import { FiCamera, FiUser, FiBriefcase, FiCalendar, FiMail, FiPhone, FiMapPin, FiGlobe, FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiPlus, FiX, FiChevronDown, FiChevronUp, FiFile } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import vendor from "../assets/images/vendor.svg"

const CreateVendor = () => {
  const navigate = useNavigate();
  const [type, setType] = useState('Business');
  const [logo, setLogo] = useState(null);
  const [showContact, setShowContact] = useState(true);
  const [showSocials, setShowSocials] = useState(true);
  const [showBilling, setShowBilling] = useState(false);
  const [showPreQualify, setShowPreQualify] = useState(true);
  const [showFiles, setShowFiles] = useState(true);
  const [showCustomBillTo, setShowCustomBillTo] = useState(false);
  const [showAddresses, setShowAddresses] = useState({
    mailing: true,
    billing: true,
    shipping: true,
  });
  const [contacts, setContacts] = useState([
    { id: 1, job: 'Manager', name: 'John Rambo', phone: '+92300 0000000', email: 'example@gmail.com' },
    { id: 2, job: 'Manager', name: 'John Rambo', phone: '+92300 0000000', email: 'example@gmail.com' },
  ]);
  const [files, setFiles] = useState([
    { id: 1, name: 'Auto Insurance', expires: '21/02/2025' },
    { id: 2, name: 'Workers Compensation', expires: '21/02/2025' },
  ]);
  const [badges, setBadges] = useState({
    Unverified: true,
    Verified: false,
    'Pro Bronze': false,
    'Pro Silver': false,
    'Pro Gold': false,
    'Pro Platinum': false,
    'Master Silver': false,
    'Master Gold': false,
    'Master Platinum': false,
  });

  // Handlers for toggles, file upload, etc. (implement as needed)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <form className="w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold text-gray-900">Create Vendor</h2>
          <div className='flex items-center gap-2'>
            <button type="button" className="border border-blue-600 px-4 py-2 rounded-lg text-blue-600" onClick={() => navigate('/admin/vendors')}>Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Save</button>
          </div>
        </div>

        {/* Logo and Type */}
        <div className="flex items-center gap-6">
          <div className="relative w-20 h-20 mb-4">
            <img src={vendor} alt="logo" className="w-20 h-20 rounded-lg object-cover" />
            <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer shadow-lg">
              <FiCamera className="w-4 h-4" />
              <input type="file" className="hidden" onChange={e => setLogo(URL.createObjectURL(e.target.files[0]))} />
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="type" value="Individual" checked={type === 'Individual'} onChange={() => setType('Individual')} />
                <span>Individual</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="type" value="Business" checked={type === 'Business'} onChange={() => setType('Business')} />
                <span>Business</span>
              </label>
            </div>
          </div>
        </div>

        {/* Business Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="input" placeholder="Relation Level" />
          <input className="input" placeholder="Business Name" />
          <input className="input" placeholder="Legal Name" />
          <input className="input" placeholder="Federal Tax ID" />
          <input className="input" placeholder="State Tax ID" />
          <input className="input" placeholder="In Business Since" type="date" />

          <input className="input" placeholder="Phone Number" />
          <input className="input" placeholder="Mobile Number" />
          <input className="input" placeholder="WhatsApp Number" />
          <input className="input" placeholder="Fax Number" />
        </div>

        {/* Toggles */}
        <label className="flex items-center gap-2 cursor-pointer my-4 w-1/2">
          <p className='w-full font-semibold'>Custom Billing Email</p>
          <input type="checkbox" checked={showBilling} onChange={() => setShowBilling(!showBilling)} />
        </label>
        {showBilling && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="input" placeholder="Email" />
            <input className="input" placeholder="Website" />
          </div>
        )}
        <label className="flex items-center gap-2 cursor-pointer my-4 w-1/2">
          <p className='w-full font-semibold'>Socials</p>
          <input type="checkbox" checked={showSocials} onChange={() => setShowSocials(!showSocials)} />
        </label>

        {/* Socials & Website */}
        {showSocials && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="input" placeholder="Facebook" />
            <input className="input" placeholder="Instagram" />
            <input className="input" placeholder="X / Twitter" />
            <input className="input" placeholder="YouTube" />
          </div>
        )}

        {/* Addresses */}
        <div className="mt-4">
          <h3 className="font-semibold mb-4">Business Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="input" placeholder="Address Line 1" />
            <input className="input" placeholder="Address Line 2" />
            <input className="input" placeholder="City" />
            <input className="input" placeholder="State" />
            <input className="input" placeholder="Zip Code" />
            <input className="input" placeholder="Country" />
          </div>
        </div>
        {/* <div className="flex flex-wrap gap-6 items-center mt-2"> */}
          <label className="flex items-center gap-2 cursor-pointer my-4 w-1/2">
            <p className='w-full font-semibold'>Mailing Address</p>
            <input type="checkbox" checked={showAddresses.mailing} onChange={() => setShowAddresses(a => ({ ...a, mailing: !a.mailing }))} />
          </label>
          <label className="flex items-center gap-2 cursor-pointer my-4 w-1/2">
            <p className='w-full font-semibold'>Billing Address</p>
            <input type="checkbox" checked={showAddresses.billing} onChange={() => setShowAddresses(a => ({ ...a, billing: !a.billing }))} />
          </label>
          <label className="flex items-center gap-2 cursor-pointer my-4 w-1/2">
            <p className='w-full font-semibold'>Shipping Address</p>
            <input type="checkbox" checked={showAddresses.shipping} onChange={() => setShowAddresses(a => ({ ...a, shipping: !a.shipping }))} />
          </label>
        {/* </div> */}

        {/* Custom BILLS TO Information */}
        <label className="flex items-center gap-2 cursor-pointer my-4 w-1/2">
          <p className='w-full font-semibold'>Custom BILLS TO Information</p>
          <input type="checkbox" checked={showCustomBillTo} onChange={() => setShowCustomBillTo(!showCustomBillTo)} />
        </label>
        {showCustomBillTo && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input className="input" placeholder="Attention To" />
            <input className="input" placeholder="Phone Number" />
            <input className="input" placeholder="Email" />
            <input className="input" placeholder="Address Line 1" />
            <input className="input" placeholder="Address Line 2" />
            <input className="input" placeholder="City" />
            <input className="input" placeholder="State" />
            <input className="input" placeholder="Zip Code" />
            <input className="input" placeholder="Country" />
          </div>
        )}

        {/* Contact Information */}
        <div className="flex items-center gap-2 mt-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={showContact} onChange={() => setShowContact(!showContact)} />
            <span>Contact Information</span>
          </label>
          <button type="button" className="ml-auto flex items-center gap-1 text-blue-600 font-medium"><FiPlus /> Add Contact</button>
        </div>
        {showContact && (
          <div className="overflow-x-auto rounded-lg border mt-2">
            <table className="min-w-full text-xs">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Job Title</th>
                  <th className="px-4 py-2 text-left font-semibold">Full Name</th>
                  <th className="px-4 py-2 text-left font-semibold">Phone</th>
                  <th className="px-4 py-2 text-left font-semibold">Email</th>
                  <th className="px-4 py-2 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map(c => (
                  <tr key={c.id} className="border-t">
                    <td className="px-4 py-2">{c.job}</td>
                    <td className="px-4 py-2">{c.name}</td>
                    <td className="px-4 py-2">{c.phone}</td>
                    <td className="px-4 py-2">{c.email}</td>
                    <td className="px-4 py-2"><button className="text-gray-500 hover:text-red-500"><FiX /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pre Qualify Vendors */}
        <div className="flex items-center gap-2 mt-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={showPreQualify} onChange={() => setShowPreQualify(!showPreQualify)} />
            <span>Pre Qualify Vendors</span>
          </label>
        </div>
        {showPreQualify && (
          <div className="mt-2 border rounded-lg p-4 bg-gray-50">
            <div className="mb-2 font-semibold text-gray-700">Accepted Badges:</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {Object.keys(badges).map(badge => (
                <label key={badge} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={badges[badge]} onChange={() => setBadges(b => ({ ...b, [badge]: !b[badge] }))} />
                  <span>{badge}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Uploaded Files */}
        <div className="flex items-center gap-2 mt-4">
          <span className="font-semibold text-gray-700">Uploaded Files</span>
          <button type="button" className="ml-auto flex items-center gap-1 text-blue-600 font-medium"><FiPlus /> Add File</button>
        </div>
        {showFiles && (
          <div className="overflow-x-auto rounded-lg border mt-2">
            <table className="min-w-full text-xs">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">File</th>
                  <th className="px-4 py-2 text-left font-semibold">Name</th>
                  <th className="px-4 py-2 text-left font-semibold">Expires On</th>
                  <th className="px-4 py-2 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {files.map(f => (
                  <tr key={f.id} className="border-t">
                    <td className="px-4 py-2"><FiFile className="w-4 h-4 text-blue-500" /></td>
                    <td className="px-4 py-2">{f.name}</td>
                    <td className="px-4 py-2">{f.expires}</td>
                    <td className="px-4 py-2"><button className="text-gray-500 hover:text-red-500"><FiX /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Timezone, Status, Remarks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block text-xs font-semibold mb-1">Time Zone</label>
            <select className="input">
              <option>UTC-5</option>
              <option>UTC-6</option>
              <option>UTC-7</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Status</label>
            <select className="input">
              <option>Active</option>
              <option>Inactive</option>
              <option>Pending</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Remarks</label>
            <input className="input" placeholder="Remarks" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateVendor;
