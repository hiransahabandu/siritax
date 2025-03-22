
import React, { useState, useRef, useEffect } from 'react';
import { RefreshCw, Send, Download } from 'lucide-react';
import MessageItem, { Message } from './MessageItem';
import { generatePDF } from '../utils/pdfUtils';
import { v4 as uuidv4 } from 'uuid';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm SiriTax, your AI tax assistant. How can I help you with your tax-related questions today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const userMessage: Message = {
      id: uuidv4(),
      text: input.trim(),
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: uuidv4(),
        text: simulateBotResponse(input.trim()),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const simulateBotResponse = (userInput: string): string => {
    // A very simple response simulation for tax-related queries
    const userInputLower = userInput.toLowerCase();
    
    if (userInputLower.includes('income tax') || userInputLower.includes('tax rate')) {
      return "Income tax rates vary based on your income bracket and location. Federal income tax in the United States ranges from 10% to 37%, while state income taxes vary significantly. Would you like me to help you calculate your estimated income tax based on your income?";
    } else if (userInputLower.includes('deduction') || userInputLower.includes('write off')) {
      return "Common tax deductions include mortgage interest, state and local taxes, charitable contributions, medical expenses exceeding 7.5% of your adjusted gross income, and retirement plan contributions. Do you have a specific deduction you'd like to learn more about?";
    } else if (userInputLower.includes('deadline') || userInputLower.includes('file')) {
      return "The standard tax filing deadline in the United States is April 15th. However, if this date falls on a weekend or holiday, it may be extended to the next business day. You can also request an extension, which would typically give you until October 15th to file, though you would still need to pay any estimated taxes by the April deadline.";
    } else {
      return "Thank you for your question about " + userInput + ". To provide you with accurate tax information, I'd need to know more specifics about your situation. Could you provide more details about your tax question?";
    }
  };

  const handleEditMessage = (id: string, newText: string) => {
    const updatedMessages = messages.map(msg => 
      msg.id === id ? { ...msg, text: newText } : msg
    );
    
    setMessages(updatedMessages);
    
    // If the edited message is a user message, generate a new bot response
    const editedMessage = messages.find(msg => msg.id === id);
    if (editedMessage && editedMessage.isUser) {
      // Find the index of the edited message
      const editedIndex = messages.findIndex(msg => msg.id === id);
      
      // If there's a bot response right after this message, remove it
      if (editedIndex + 1 < messages.length && !messages[editedIndex + 1].isUser) {
        const updatedMessagesWithoutOldResponse = updatedMessages.filter((_, index) => index !== editedIndex + 1);
        setMessages(updatedMessagesWithoutOldResponse);
        
        // Generate a new bot response
        setIsLoading(true);
        setTimeout(() => {
          const newBotResponse: Message = {
            id: uuidv4(),
            text: simulateBotResponse(newText.trim()),
            isUser: false,
            timestamp: new Date(),
          };
          
          setMessages(prev => [...prev, newBotResponse]);
          setIsLoading(false);
        }, 1500);
      }
    }
  };

  const handleRefresh = () => {
    setMessages([
      {
        id: '1',
        text: "Hello! I'm SiriTax, your AI tax assistant. How can I help you with your tax-related questions today?",
        isUser: false,
        timestamp: new Date(),
      },
    ]);
  };

  const handleDownloadPDF = () => {
    generatePDF(messages);
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-siritax-blue-50 to-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
      <div className="flex items-center justify-between bg-gradient-to-r from-siritax-blue-500 to-siritax-blue-600 py-3 px-4">
        <h2 className="text-lg font-semibold text-white">SiriTax Assistant</h2>
        <div className="flex items-center space-x-2">
          <button 
            onClick={handleDownloadPDF}
            className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white transition-all"
            title="Download conversation as PDF"
          >
            <Download size={16} />
          </button>
          <button 
            onClick={handleRefresh}
            className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white transition-all"
            title="Restart conversation"
          >
            <RefreshCw size={16} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageItem 
            key={message.id} 
            message={message} 
            onEdit={message.isUser ? handleEditMessage : undefined} 
          />
        ))}
        
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="message-bot">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-siritax-blue-400 rounded-full animate-pulse"></div>
                <div className="h-2 w-2 bg-siritax-blue-400 rounded-full animate-pulse delay-75"></div>
                <div className="h-2 w-2 bg-siritax-blue-400 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-siritax-slate-200 bg-white">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your tax question here..."
            className="input-primary flex-1"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={input.trim() === '' || isLoading}
            className={`button-primary !py-2 !px-4 ${
              input.trim() === '' || isLoading ? 'opacity-0 cursor-not-allowed' : ''
            }`}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
