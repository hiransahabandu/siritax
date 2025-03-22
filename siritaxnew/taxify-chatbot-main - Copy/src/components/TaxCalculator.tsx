
import React, { useState, useEffect } from 'react';
import { Calculator, Percent, DollarSign, ChevronsRight, RefreshCw } from 'lucide-react';
import { calculateTax } from '../utils/taxUtils';

const TaxCalculator: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [taxRate, setTaxRate] = useState<string>('');
  const [result, setResult] = useState<{
    originalAmount: number;
    taxAmount: number;
    totalAmount: number;
  } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    if (!amount || !taxRate) return;
    
    setIsCalculating(true);
    
    setTimeout(() => {
      const originalAmount = parseFloat(amount);
      const rate = parseFloat(taxRate);
      
      const calculationResult = calculateTax(originalAmount, rate);
      setResult(calculationResult);
      setIsCalculating(false);
    }, 300); // Slight delay for animation effect
  };

  const handleReset = () => {
    setAmount('');
    setTaxRate('');
    setResult(null);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
      <div className="bg-gradient-to-r from-siritax-blue-500 to-siritax-blue-600 py-4 px-6">
        <div className="flex items-center space-x-2">
          <Calculator className="text-white" size={24} />
          <h2 className="text-xl font-bold text-white">Tax Calculator</h2>
        </div>
        <p className="text-siritax-blue-100 text-sm mt-1">Calculate tax amount and total</p>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <label htmlFor="amount" className="block text-sm font-medium text-siritax-slate-700">
            Amount
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-siritax-slate-400" />
            </div>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="input-primary pl-10 w-full"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="taxRate" className="block text-sm font-medium text-siritax-slate-700">
            Tax Rate
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Percent className="h-5 w-5 text-siritax-slate-400" />
            </div>
            <input
              type="number"
              id="taxRate"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
              placeholder="Enter tax rate"
              className="input-primary pl-10 w-full"
            />
          </div>
        </div>
        
        <div className="flex space-x-3 pt-2">
          <button
            onClick={handleCalculate}
            disabled={!amount || !taxRate || isCalculating}
            className={`button-primary flex items-center justify-center flex-1 ${
              (!amount || !taxRate) ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isCalculating ? (
              <RefreshCw className="h-5 w-5 animate-spin" />
            ) : (
              <>
                <span>Calculate</span>
                <ChevronsRight className="ml-1 h-5 w-5" />
              </>
            )}
          </button>
          
          <button
            onClick={handleReset}
            className="button-secondary flex-1"
          >
            Reset
          </button>
        </div>
      </div>
      
      {result && (
        <div className="p-6 border-t border-siritax-slate-100 space-y-3 bg-siritax-slate-50 animate-fade-in">
          <div className="flex justify-between">
            <span className="text-siritax-slate-500 font-medium">Original Amount:</span>
            <span className="text-siritax-slate-700 font-semibold">${result.originalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-siritax-slate-500 font-medium">Tax Amount:</span>
            <span className="text-siritax-blue-600 font-semibold">${result.taxAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-1 border-t border-siritax-slate-200">
            <span className="text-siritax-slate-700 font-bold">Total Amount:</span>
            <span className="text-siritax-blue-700 font-bold">${result.totalAmount.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaxCalculator;
