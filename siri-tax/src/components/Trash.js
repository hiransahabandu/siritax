import React, { useState } from 'react';

const Trash = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [deletedDocuments, setDeletedDocuments] = useState([]);

  return (
    <div className="trash-page">
      <h1 className="trash-title">Trash</h1>

      {/* Search Container */}
      <div className="trash-search-container">
        <div className="search-box">
          <div className="search-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <input 
            type="text"
            className="search-input"
            placeholder="Search in trash..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Warning Message */}
      <div className="trash-warning">
        <div className="warning-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="#CA8A04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="warning-content">
          <h3 className="warning-title">Documents in the trash will be permanently deleted after 30 days</h3>
          <p className="warning-text">
            You can restore documents from the trash back to your active documents at any time before they are permanently deleted.
          </p>
        </div>
      </div>

      {/* Empty State */}
      {deletedDocuments.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6H21M19 6V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V6M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="empty-title">Trash is Empty</h2>
          <p className="empty-text">There are no documents in the trash</p>
        </div>
      ) : (
        <div className="trash-documents">
          {/* Document list will go here when implemented */}
        </div>
      )}
    </div>
  );
};

export default Trash; 