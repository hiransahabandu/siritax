
import React from 'react';
import { Calculator, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-siritax-blue-600 bg-opacity-95 shadow-md animate-fade-in">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="text-siritax-blue-600 font-bold text-xl">ST</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-display font-bold text-2xl tracking-tight">
              SiriTax
            </h1>
            <p className="text-siritax-blue-100 text-xs">Your AI Tax Assistant</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" active>
            <MessageSquare size={18} />
            <span>Chat</span>
          </NavLink>
          <NavLink to="/calculator">
            <Calculator size={18} />
            <span>Calculator</span>
          </NavLink>
        </nav>
        
        <div className="md:hidden flex items-center">
          <MobileNavButton />
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, active }) => {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
        active 
          ? 'bg-white text-siritax-blue-600 shadow-md' 
          : 'text-white hover:bg-siritax-blue-500 hover:bg-opacity-50'
      }`}
    >
      {children}
    </Link>
  );
};

const MobileNavButton: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full text-white hover:bg-siritax-blue-500 focus:outline-none"
        aria-label="Menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-siritax-blue-600 shadow-lg animate-fade-in p-4">
          <Link 
            to="/"
            className="block py-2 px-4 text-white hover:bg-siritax-blue-500 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center space-x-2">
              <MessageSquare size={18} />
              <span>Chat</span>
            </div>
          </Link>
          <Link 
            to="/calculator"
            className="block py-2 px-4 text-white hover:bg-siritax-blue-500 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center space-x-2">
              <Calculator size={18} />
              <span>Calculator</span>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
