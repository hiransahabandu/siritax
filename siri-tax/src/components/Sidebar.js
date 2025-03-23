import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const path = location.pathname;
    
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <Link to="/" className={`sidebar-button ${path === '/' ? 'active' : ''}`}>
                    <span className="icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" 
                                stroke={path === '/' ? "#2563EB" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span className="button-text">Home</span>
                </Link>

                <Link to="/upload" className={`sidebar-button ${path === '/upload' ? 'active' : ''}`}>
                    <span className="icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" 
                                stroke={path === '/upload' ? "#2563EB" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17 8L12 3L7 8" 
                                stroke={path === '/upload' ? "#2563EB" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 3V15" 
                                stroke={path === '/upload' ? "#2563EB" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span className="button-text">Upload Documents</span>
                </Link>

                <Link to="/view" className={`sidebar-button ${path === '/view' ? 'active' : ''}`}>
                    <span className="icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" 
                                stroke={path === '/view' ? "#2563EB" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 10H16" 
                                stroke={path === '/view' ? "#2563EB" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 14H16" 
                                stroke={path === '/view' ? "#2563EB" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 18H12" 
                                stroke={path === '/view' ? "#2563EB" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span className="button-text">View Documents</span>
                </Link>

                <Link to="/edit" className={`sidebar-button ${path === '/edit' ? 'active' : ''}`}>
                    <span className="icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" 
                                stroke={path === '/edit' ? "#2563EB" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" 
                                stroke={path === '/edit' ? "#2563EB" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span className="button-text">Edit Documents</span>
                </Link>

                <Link to="/trash" className={`sidebar-button ${path === '/trash' ? 'active' : ''}`}>
                    <span className="icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6H5H21" 
                                stroke={path === '/trash' ? "#2563EB" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" 
                                stroke={path === '/trash' ? "#2563EB" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span className="button-text">Trash</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar; 