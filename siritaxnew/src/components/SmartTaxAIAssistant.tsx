import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
export const SmartTaxAIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  return <div className="fixed bottom-6 right-6 z-20">
      {isOpen && <div className="bg-white rounded-lg shadow-xl w-80 mb-4 overflow-hidden">
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-medium">SmartTax AI Assistant</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="h-80 p-4 overflow-y-auto bg-gray-50">
            <div className="bg-blue-100 rounded-lg p-3 mb-2 max-w-[80%]">
              <p className="text-sm">
                Hello! I'm your SmartTax AI Assistant. How can I help you with
                your taxes today?
              </p>
            </div>
          </div>
          <div className="p-3 border-t">
            <div className="flex">
              <input type="text" placeholder="Type your question here..." className="flex-1 border rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </div>}
      <button onClick={toggleChat} className="bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 flex items-center">
        <MessageCircle className="h-6 w-6 mr-2" />
        <span className={`${isOpen ? 'hidden' : 'block'} mr-1`}>
          SmartTax AI Assistant
        </span>
      </button>
    </div>;
};