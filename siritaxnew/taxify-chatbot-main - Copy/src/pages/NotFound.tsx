
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileQuestion, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-siritax-blue-50 to-white">
      <Header />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center animate-fade-up">
        <div className="w-24 h-24 bg-siritax-blue-100 rounded-full flex items-center justify-center mb-6 animate-float">
          <FileQuestion size={48} className="text-siritax-blue-600" />
        </div>
        
        <h1 className="text-4xl font-bold text-siritax-slate-800 mb-2">404 - Page Not Found</h1>
        <p className="text-xl text-siritax-slate-600 mb-8 max-w-md">
          Sorry, we couldn't find the page you're looking for.
        </p>
        
        <Link to="/">
          <Button className="bg-siritax-blue-500 hover:bg-siritax-blue-600 text-white">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
      
      <footer className="py-4 text-center text-siritax-slate-500 text-sm bg-white border-t border-siritax-slate-200">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} SiriTax. Your AI Tax Assistant.</p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
