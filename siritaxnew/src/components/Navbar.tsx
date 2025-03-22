import React from 'react';
import { Link } from 'react-router-dom';
import { UserIcon } from 'lucide-react';
import { useUser } from '../context/UserContext';
export const Navbar: React.FC = () => {
  const {
    userRole
  } = useUser();
  return <nav className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-blue-600">SIRI TAX</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/features" className="text-gray-700 hover:text-blue-600 px-2 py-1">
              Features
            </Link>
            <Link to="/ai-assistant" className="text-gray-700 hover:text-blue-600 px-2 py-1">
              A.I Assistant
            </Link>
            <Link to="/tax-filing-wizard" className="text-gray-700 hover:text-blue-600 px-2 py-1">
              Tax Filing Wizard
            </Link>
            <Link to="/tax-calculator" className="text-gray-700 hover:text-blue-600 px-2 py-1">
              Tax Calculator
            </Link>
            <Link to="/doc-process" className="text-gray-700 hover:text-blue-600 px-2 py-1">
              Doc Process
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100">
              <UserIcon className="h-6 w-6 text-gray-600" />
            </Link>
            {userRole && <span className="ml-2 text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
                {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
              </span>}
          </div>
        </div>
      </div>
    </nav>;
};