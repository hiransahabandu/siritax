import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
export const Footer: React.FC = () => {
  return <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">SIRI TAX</h3>
            <p className="text-gray-300">
              Simplifying your tax documentation and filing process with
              advanced AI technology.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-300 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/ai-assistant" className="text-gray-300 hover:text-white">
                  A.I Assistant
                </Link>
              </li>
              <li>
                <Link to="/tax-filing-wizard" className="text-gray-300 hover:text-white">
                  Tax Filing Wizard
                </Link>
              </li>
              <li>
                <Link to="/tax-calculator" className="text-gray-300 hover:text-white">
                  Tax Calculator
                </Link>
              </li>
              <li>
                <Link to="/doc-process" className="text-gray-300 hover:text-white">
                  Doc Process
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-300">support@siritax.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-300">+1 (800) TAX-HELP</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  123 Finance Avenue, Tax District, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} SIRI TAX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};