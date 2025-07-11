
import React, { useState } from 'react';
import { User, Phone, CreditCard, Users } from 'lucide-react';

interface ContactFormProps {
  onSubmit: (data: any) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    hasLicense: true,
    peopleCount: 'Just me'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="mt-4 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
        <User className="h-5 w-5 text-blue-600" />
        <span>Please provide your details:</span>
      </h4>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Phone Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="Enter your phone number"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* License Question */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Do you have a valid driving license? *
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="hasLicense"
                checked={formData.hasLicense}
                onChange={() => handleInputChange('hasLicense', true)}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="hasLicense"
                checked={!formData.hasLicense}
                onChange={() => handleInputChange('hasLicense', false)}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        {/* People Count */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How many people will join the test drive? *
          </label>
          <select
            value={formData.peopleCount}
            onChange={(e) => handleInputChange('peopleCount', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="Just me">Just me</option>
            <option value="2 people">2 people</option>
            <option value="3-4 people">3-4 people</option>
            <option value="More than 4">More than 4</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Continue
        </button>
      </form>
    </div>
  );
};
