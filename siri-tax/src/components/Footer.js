import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className="footer-title">SIRI TAX</h3>
                    <p className="footer-description">
                        Simplifying your tax documentation and filing process with advanced AI technology.
                    </p>
                </div>
                
                <div className="footer-section">
                    <h4 className="footer-subtitle">Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="#features">Features</a></li>
                        <li><a href="#ai-assistant">A.I Assistant</a></li>
                        <li><a href="#tax-filing">Tax Filing Wizard</a></li>
                        <li><a href="#tax-calculator">Tax Calculator</a></li>
                        <li><a href="#doc-process">Doc Process</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-subtitle">Contact</h4>
                    <ul className="footer-contact">
                        <li>Email: support@siritax.com</li>
                        <li>Phone: +1 (555) 123-4567</li>
                        <li>Address: 123 Tax St, Finance City</li>
                    </ul>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2025 SIRI TAX. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer; 