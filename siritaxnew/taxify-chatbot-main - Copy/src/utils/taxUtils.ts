
/**
 * Calculates tax amount and total based on provided amount and tax rate
 */
export const calculateTax = (amount: number, taxRate: number) => {
  // Ensure valid input values
  if (isNaN(amount) || isNaN(taxRate) || amount < 0 || taxRate < 0) {
    throw new Error('Invalid input: Amount and tax rate must be positive numbers');
  }

  const taxAmount = (amount * taxRate) / 100;
  const totalAmount = amount + taxAmount;

  return {
    originalAmount: amount,
    taxAmount,
    totalAmount,
  };
};

/**
 * Calculates income tax based on income and bracket (very simplified example)
 */
export const calculateIncomeTax = (income: number, filingStatus: 'single' | 'married' = 'single') => {
  // This is a very simplified example of US federal income tax brackets
  // In a real application, these would be more detailed and accurate
  
  const singleBrackets = [
    { threshold: 0, rate: 10 },
    { threshold: 9950, rate: 12 },
    { threshold: 40525, rate: 22 },
    { threshold: 86375, rate: 24 },
    { threshold: 164925, rate: 32 },
    { threshold: 209425, rate: 35 },
    { threshold: 523600, rate: 37 },
  ];
  
  const marriedBrackets = [
    { threshold: 0, rate: 10 },
    { threshold: 19900, rate: 12 },
    { threshold: 81050, rate: 22 },
    { threshold: 172750, rate: 24 },
    { threshold: 329850, rate: 32 },
    { threshold: 418850, rate: 35 },
    { threshold: 628300, rate: 37 },
  ];
  
  const brackets = filingStatus === 'single' ? singleBrackets : marriedBrackets;
  
  let tax = 0;
  let remainingIncome = income;
  
  for (let i = brackets.length - 1; i >= 0; i--) {
    const currentBracket = brackets[i];
    const prevThreshold = i > 0 ? brackets[i - 1].threshold : 0;
    
    if (income > currentBracket.threshold) {
      const taxableInThisBracket = income - currentBracket.threshold;
      tax += (taxableInThisBracket * currentBracket.rate) / 100;
      income = currentBracket.threshold;
    }
  }
  
  return {
    income: remainingIncome,
    taxAmount: tax,
    effectiveRate: (tax / remainingIncome) * 100,
  };
};

/**
 * Formats currency values as USD
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};
