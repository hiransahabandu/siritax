import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ViewDocuments = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [documentType, setDocumentType] = useState('All Types');
  const [view, setView] = useState('grid'); // 'grid' or 'list'

  // Sample document data
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: 'W-2 Form.pdf',
      date: '2023-01-15',
      size: '1.2 MB',
      type: 'PDF'
    },
    {
      id: 2,
      name: 'Invoice.pdf',
      date: '2023-01-15',
      size: '1.2 MB',
      type: 'JPEG'
    },
    {
      id: 3,
      name: '1099-INT.pdf',
      date: '2023-01-15',
      size: '1.2 MB',
      type: 'PDF'
    },
    {
      id: 4,
      name: 'W-2 Form .pdf',
      date: '2023-01-15',
      size: '1.2 MB',
      type: 'PNG'
    },
    {
      id: 5,
      name: 'Tax Receipt.pdf',
      date: '2023-01-15',
      size: '1.2 MB',
      type: 'DOC'
    },
    {
      id: 6,
      name: 'Property Tax.pdf',
      date: '2024-01-15',
      size: '1.2 MB',
      type: 'PDF'
    }
  ]);

  // Filter documents based on search and type filter
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = documentType === 'All Types' || doc.type === documentType;
    return matchesSearch && matchesType;
  });

  const handleDelete = (id) => {
    const updatedDocs = documents.filter(doc => doc.id !== id);
    setDocuments(updatedDocs);
  };

  return (
    <div className="view-documents-page">
      <div className="view-header">
        <h1 className="view-title">View Documents</h1>
        <Link to="/upload" className="upload-new-button">Upload New</Link>
      </div>

      <div className="search-filter-container">
        <div className="search-container">
          <div className="search-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search documents..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-container">
          <div className="type-filter">
            <div className="filter-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H21M6 12H18M10 18H14" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <select 
              className="type-select"
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
            >
              <option value="All Types">All Types</option>
              <option value="PDF">PDF</option>
              <option value="JPEG">JPEG</option>
              <option value="PNG">PNG</option>
              <option value="DOC">DOC</option>
            </select>
          </div>

          <div className="view-toggle">
            <button 
              className={`view-button list-view ${view === 'list' ? 'active' : ''}`}
              onClick={() => setView('list')}
              aria-label="List view"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01" stroke={view === 'list' ? "#2563EB" : "#6B7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className={`view-button grid-view ${view === 'grid' ? 'active' : ''}`}
              onClick={() => setView('grid')}
              aria-label="Grid view"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 5H5V10H10V5Z" stroke={view === 'grid' ? "#2563EB" : "#6B7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 5H14V10H19V5Z" stroke={view === 'grid' ? "#2563EB" : "#6B7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 14H5V19H10V14Z" stroke={view === 'grid' ? "#2563EB" : "#6B7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 14H14V19H19V14Z" stroke={view === 'grid' ? "#2563EB" : "#6B7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`documents-container ${view === 'grid' ? 'grid-view' : 'list-view'}`}>
        {filteredDocuments.map((doc) => (
          <div key={doc.id} className="document-card">
            <div className="document-thumbnail">
              <div className="document-badge">{doc.type}</div>
            </div>
            <div className="document-info">
              <div className="document-title-container">
                <h3 className="document-title">{doc.name}</h3>
                <span className="document-size">{doc.size}</span>
              </div>
              <div className="document-meta">
                <span className="document-date">{doc.date}</span>
              </div>
              <div className="document-actions">
                <button className="action-button delete-button" onClick={() => handleDelete(doc.id)} aria-label="Delete document">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H21" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="action-button" aria-label="Download document">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M12 3V15M12 15L15 12M12 15L9 12" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewDocuments;
