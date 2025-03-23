import React, { useState, useRef } from 'react';

const UploadDocument = () => {
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);
    
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };
    
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            // Handle files
            console.log("File dropped:", e.dataTransfer.files);
        }
    };
    
    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            // Handle files
            console.log("File selected:", e.target.files);
        }
    };
    
    const onButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <div className="upload-document-page">
            <div className="upload-container">
                <div className="upload-content">
                    <h1 className="upload-title">Upload Documents</h1>
                    
                    <div className="upload-area-container">
                        <form 
                            className="upload-form"
                            onDragEnter={handleDrag}
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div 
                                className={`upload-drop-area ${dragActive ? "upload-drop-area-active" : ""}`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                                onClick={onButtonClick}
                            >
                                <div className="upload-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 22H8C6.93913 22 5.92172 21.5786 5.17157 20.8284C4.42143 20.0783 4 19.0609 4 18V6C4 4.93913 4.42143 3.92172 5.17157 3.17157C5.92172 2.42143 6.93913 2 8 2H12L18 8V18C18 19.0609 17.5786 20.0783 16.8284 20.8284C16.0783 21.5786 15.0609 22 14 22" 
                                            stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 18V14" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 16L12 13L15 16" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="upload-text-container">
                                    <h2 className="upload-text">Click to upload or drag and drop</h2>
                                    <p className="upload-file-types">PDF, Word, Excel, or image files (max 10MB each)</p>
                                </div>
                                <input
                                    ref={inputRef}
                                    type="file"
                                    className="upload-input"
                                    onChange={handleChange}
                                    multiple
                                />
                            </div>
                        </form>
                        
                        <div className="upload-tips">
                            <h3 className="tips-title">Tips for Successful Uploads</h3>
                            <ul className="tips-list">
                                <li className="tip-item">Make sure documents are clear and readable</li>
                                <li className="tip-item">Remove any personal information not needed for tax purposes</li>
                                <li className="tip-item">Prefer PDF format for best results with data extraction</li>
                            </ul>
                            <p className="tip-important">Ensure file size is under 10MB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadDocument; 