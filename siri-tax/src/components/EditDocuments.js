import React, { useState } from 'react';

const EditDocuments = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  
  // Sample document data
  const documents = [
    {
      id: 1,
      name: 'W-2 Form 2022.pdf',
      date: '2023-01-15',
      size: '1.2 MB'
    },
    {
      id: 2,
      name: '1099-INT.pdf',
      date: '2023-01-20',
      size: '0.8 MB'
    },
    {
      id: 3,
      name: 'Property.pdf',
      date: '2023-02-05',
      size: '1.5 MB'
    }
  ];

  const handleSelectDocument = (doc) => {
    setSelectedDocument(doc);
  };

  return (
    <div className="edit-documents-page">
      <h1 className="edit-title">Edit Documents</h1>
      
      <div className="edit-content">
        <div className="document-selector">
          <div className="document-selector-header">
            <h3 className="selector-title">Select a Document</h3>
          </div>
          <div className="document-list">
            {documents.map((doc) => (
              <div 
                key={doc.id} 
                className={`document-item ${selectedDocument && selectedDocument.id === doc.id ? 'selected' : ''}`}
                onClick={() => handleSelectDocument(doc)}
              >
                <div className="document-item-content">
                  <div className="document-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2V8H20" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 13H8" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 17H8" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 9H9H8" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="document-details">
                    <p className="document-name">{doc.name}</p>
                    <div className="document-meta">
                      <span className="document-date">{doc.date}</span>
                      <span className="document-separator"> • </span>
                      <span className="document-size">{doc.size}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="document-editor">
          {selectedDocument ? (
            <div className="editor-content">
              <h2 className="editor-title">{selectedDocument.name}</h2>
              <div className="editor-form">
                <div className="form-group">
                  <label htmlFor="documentName">Document Name</label>
                  <input 
                    type="text" 
                    id="documentName" 
                    className="form-control"
                    defaultValue={selectedDocument.name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="documentType">Document Type</label>
                  <select id="documentType" className="form-control">
                    <option value="tax">Tax Document</option>
                    <option value="personal">Personal Document</option>
                    <option value="financial">Financial Document</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="documentDescription">Description</label>
                  <textarea 
                    id="documentDescription" 
                    className="form-control" 
                    rows="4"
                    placeholder="Add a description for this document"
                  ></textarea>
                </div>
                <div className="form-actions">
                  <button className="save-button">Save Changes</button>
                  <button className="cancel-button">Cancel</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="no-document-selected">
              <div className="no-document-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="no-document-title">No Document Selected</h3>
              <p className="no-document-text">Select a document from the list to edit its details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditDocuments;
