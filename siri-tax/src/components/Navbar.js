import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">SIRI TAX</div>
            <div className="navbar-links">
                <a href="#features" className="navbar-link">Features</a>
                <a href="#ai-assistant" className="navbar-link">A.I assistant</a>
                <a href="#tax-filing" className="navbar-link">Tax filing wizard</a>
                <a href="#tax-calculator" className="navbar-link">Tax Calculator</a>
                <a href="#doc-process" className="navbar-link">Doc Process</a>
            </div>
            <div className="navbar-user">
                <button className="user-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar; 