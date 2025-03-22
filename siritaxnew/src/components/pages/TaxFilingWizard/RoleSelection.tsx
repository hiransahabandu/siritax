import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Eye } from 'lucide-react';
import { useUser } from '../../../context/UserContext';
export const RoleSelection: React.FC = () => {
  const navigate = useNavigate();
  const {
    setUserRole
  } = useUser();
  const handleRoleSelect = (role: 'guest' | 'premium') => {
    setUserRole(role);
    if (role === 'premium') {
      navigate('/tax-filing-wizard/login');
    } else {
      navigate('/tax-filing-wizard/records');
    }
  };
  return <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Choose Your Tax Filing Experience
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Guest User Option */}
        <div onClick={() => handleRoleSelect('guest')} className="border rounded-xl p-8 cursor-pointer hover:shadow-lg transition-shadow bg-white flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <Eye className="h-10 w-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Guest User</h3>
          <p className="text-gray-600 mb-4">
            View tax records and explore basic features without creating an
            account.
          </p>
          <ul className="text-sm text-gray-500 space-y-2 mb-6">
            <li>✓ View tax records</li>
            <li>✓ Access basic information</li>
            <li>✗ Cannot file or edit taxes</li>
            <li>✗ No personalized recommendations</li>
          </ul>
          <button className="mt-auto bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-md">
            Continue as Guest
          </button>
        </div>
        {/* Premium User Option */}
        <div onClick={() => handleRoleSelect('premium')} className="border border-blue-200 rounded-xl p-8 cursor-pointer hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-blue-50 flex flex-col items-center text-center">
          <div className="bg-blue-600 p-4 rounded-full mb-4">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Premium User</h3>
          <p className="text-gray-600 mb-4">
            Full access to all features with personalized tax filing assistance.
          </p>
          <ul className="text-sm text-gray-500 space-y-2 mb-6">
            <li>✓ Complete tax filing capabilities</li>
            <li>✓ Edit and update tax details</li>
            <li>✓ Personalized tax optimization</li>
            <li>✓ Priority AI assistant support</li>
          </ul>
          <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md">
            Continue as Premium
          </button>
        </div>
      </div>
    </div>;
};