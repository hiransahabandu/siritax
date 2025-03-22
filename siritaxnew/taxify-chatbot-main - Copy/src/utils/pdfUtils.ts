
import { Message } from '../components/MessageItem';
import { jsPDF } from 'jspdf';
import { formatCurrency } from './taxUtils';

/**
 * Generates a PDF file from the conversation messages and downloads it
 */
export const generatePDF = (messages: Message[]) => {
  const doc = new jsPDF();
  
  // Set up the document
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(33, 115, 255); // siritax-blue-600
  doc.text('SiriTax Conversation', 20, 20);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(100, 116, 139); // slate-500
  doc.text(`Generated on: ${new Date().toLocaleString()}`, 20, 30);
  
  doc.setDrawColor(200, 200, 200);
  doc.line(20, 35, 190, 35);
  
  // Add messages
  let yPosition = 50;
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const textWidth = pageWidth - 2 * margin;
  
  messages.forEach((message) => {
    // Format timestamp
    const timestamp = message.timestamp.toLocaleString();
    
    // Set styles based on message sender
    if (message.isUser) {
      doc.setTextColor(0, 0, 0); 
      doc.setFont('helvetica', 'bold');
      doc.text('You:', margin, yPosition);
    } else {
      doc.setTextColor(33, 115, 255); // siritax-blue-600
      doc.setFont('helvetica', 'bold');
      doc.text('SiriTax:', margin, yPosition);
    }
    
    // Add timestamp
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(timestamp, pageWidth - margin - doc.getTextWidth(timestamp), yPosition);
    
    // Add message text
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    
    // Split text into lines that fit within the page width
    const lines = doc.splitTextToSize(message.text, textWidth);
    yPosition += 5;
    
    // Check if we need a new page
    if (yPosition + lines.length * 5 > doc.internal.pageSize.getHeight() - margin) {
      doc.addPage();
      yPosition = margin;
    }
    
    // Add the message text
    doc.text(lines, margin, yPosition);
    yPosition += lines.length * 5 + 10;
    
    // Add separator line
    doc.setDrawColor(240, 240, 240);
    doc.line(margin, yPosition - 5, pageWidth - margin, yPosition - 5);
  });
  
  // Add footer
  const footerText = 'Thank you for using SiriTax - Your AI Tax Assistant';
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(10);
  doc.setTextColor(100, 116, 139);
  doc.text(
    footerText, 
    pageWidth / 2 - doc.getTextWidth(footerText) / 2, 
    doc.internal.pageSize.getHeight() - 10
  );
  
  // Save the PDF
  doc.save('SiriTax_Conversation.pdf');
};

/**
 * Generates a tax calculation PDF and downloads it
 */
export const generateTaxCalculationPDF = (
  originalAmount: number,
  taxRate: number,
  taxAmount: number,
  totalAmount: number
) => {
  const doc = new jsPDF();
  
  // Set up the document
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(33, 115, 255); // siritax-blue-600
  doc.text('Tax Calculation Summary', 20, 20);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(100, 116, 139); // slate-500
  doc.text(`Generated on: ${new Date().toLocaleString()}`, 20, 30);
  
  doc.setDrawColor(200, 200, 200);
  doc.line(20, 35, 190, 35);
  
  // Add calculation details
  let yPosition = 50;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(60, 60, 60);
  
  doc.text('Original Amount:', 20, yPosition);
  doc.text(formatCurrency(originalAmount), 120, yPosition);
  yPosition += 10;
  
  doc.text('Tax Rate:', 20, yPosition);
  doc.text(`${taxRate}%`, 120, yPosition);
  yPosition += 10;
  
  doc.text('Tax Amount:', 20, yPosition);
  doc.text(formatCurrency(taxAmount), 120, yPosition);
  yPosition += 10;
  
  doc.setDrawColor(200, 200, 200);
  doc.line(20, yPosition, 190, yPosition);
  yPosition += 10;
  
  doc.setFont('helvetica', 'bold');
  doc.text('Total Amount:', 20, yPosition);
  doc.text(formatCurrency(totalAmount), 120, yPosition);
  
  // Add footer
  const footerText = 'Thank you for using SiriTax - Your AI Tax Assistant';
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(10);
  doc.setTextColor(100, 116, 139);
  const pageWidth = doc.internal.pageSize.getWidth();
  doc.text(
    footerText, 
    pageWidth / 2 - doc.getTextWidth(footerText) / 2, 
    doc.internal.pageSize.getHeight() - 10
  );
  
  // Save the PDF
  doc.save('SiriTax_Calculation.pdf');
};
