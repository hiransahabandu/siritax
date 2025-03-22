import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
export const UpgradePrompt: React.FC = () => {
  const navigate = useNavigate();
  const premiumFeatures = ['File federal and state taxes online', 'Edit and update your tax details anytime', 'Get personalized tax optimization recommendations', 'Access to advanced tax planning tools', 'Priority support from tax professionals', 'Secure document storage and management'];
  return <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Upgrade to Premium
          </h1>
          <p className="text-gray-600">
            Unlock all features and get the most out of SIRI TAX.
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-800 mb-4">
            Premium Features
          </h2>
          <ul className="space-y-3">
            {premiumFeatures.map((feature, index) => <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </li>)}
          </ul>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Annual Premium Plan</h3>
              <p className="text-gray-600 mt-1">
                Full access to all premium features
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-blue-600">$79.99</span>
              <p className="text-gray-500 text-sm">per year</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button onClick={() => navigate(-1)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md">
            Go Back
          </button>
          <button onClick={() => navigate('/tax-filing-wizard/login')} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md flex items-center">
            Upgrade Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>;
};