import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export const HomePage: React.FC = () => {
  return <div className="w-full min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Automated Tax Filing with Smart Financial Analysis
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Simplify your taxes with our intelligent document processing and
              financial insights.
            </p>
            <Link to="/tax-filing-wizard" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-md font-medium shadow-lg hover:bg-gray-100 transition duration-300">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="hidden lg:block">
          <img src="https://your-image-host.com/image.png" alt="Tax filing illustration" className="rounded-lg shadow-xl" />

          </div>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3">
              Smart Document Processing
            </h3>
            <p className="text-blue-100">
              Our AI technology automatically extracts and processes information
              from your tax documents.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3">
              Personalized Tax Strategy
            </h3>
            <p className="text-blue-100">
              Get tailored recommendations to optimize your tax returns and
              maximize refunds.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Real-time Support</h3>
            <p className="text-blue-100">
              Access our AI assistant anytime for instant answers to your
              tax-related questions.
            </p>
          </div>
        </div>
      </div>
    </div>;
};