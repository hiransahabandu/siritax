import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const TaxFilingDetails: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    filingStatus: 'single',
    income: '',
    dependents: '0',
    deductions: 'standard',
    additionalIncome: '',
    taxCredits: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save the tax filing details here
    // For now, we'll just navigate to the records page
    navigate('/tax-filing-wizard/records');
  };
  return <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Tax Filing Details
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="filingStatus" className="block text-gray-700 text-sm font-medium mb-2">
              Filing Status
            </label>
            <select id="filingStatus" name="filingStatus" value={formData.filingStatus} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="single">Single</option>
              <option value="married_joint">Married Filing Jointly</option>
              <option value="married_separate">
                Married Filing Separately
              </option>
              <option value="head_household">Head of Household</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="income" className="block text-gray-700 text-sm font-medium mb-2">
              Annual Income ($)
            </label>
            <input type="number" id="income" name="income" value={formData.income} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="dependents" className="block text-gray-700 text-sm font-medium mb-2">
              Number of Dependents
            </label>
            <input type="number" id="dependents" name="dependents" value={formData.dependents} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Deduction Type
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input type="radio" name="deductions" value="standard" checked={formData.deductions === 'standard'} onChange={handleChange} className="mr-2" />
                Standard Deduction
              </label>
              <label className="flex items-center">
                <input type="radio" name="deductions" value="itemized" checked={formData.deductions === 'itemized'} onChange={handleChange} className="mr-2" />
                Itemized Deduction
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="additionalIncome" className="block text-gray-700 text-sm font-medium mb-2">
              Additional Income Sources (Optional)
            </label>
            <textarea id="additionalIncome" name="additionalIncome" value={formData.additionalIncome} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows={3} />
          </div>
          <div className="mb-6">
            <label htmlFor="taxCredits" className="block text-gray-700 text-sm font-medium mb-2">
              Tax Credits (Optional)
            </label>
            <textarea id="taxCredits" name="taxCredits" value={formData.taxCredits} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows={3} />
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={() => navigate(-1)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md">
              Back
            </button>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md">
              Save & Continue
            </button>
          </div>
        </form>
      </div>
    </div>;
};