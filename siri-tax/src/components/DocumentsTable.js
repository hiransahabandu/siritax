import React from 'react';

const DocumentIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" 
            stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20" 
            stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 13H8" 
            stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 17H8" 
            stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 9H9H8" 
            stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const TrashIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6H5H21" 
            stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" 
            stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 11V17" 
            stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 11V17" 
            stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const documents = [
    {
        id: 1,
        name: 'W-2 Form 2022.pdf',
        type: 'PDF',
        date: '2023-01-15',
        size: '1.5 MB'
    },
    {
        id: 2,
        name: '1099-INT.pdf',
        type: 'PDF',
        date: '2023-01-20',
        size: '0.8 MB'
    },
    {
        id: 3,
        name: 'Property Tax Receipt.pdf',
        type: 'PDF',
        date: '2023-02-05',
        size: '1.2 MB'
    }
];

const DocumentsTable = () => {
    return (
        <div className="documents-table">
            <div className="table-header">
                <div className="table-title">Recent Documents</div>
                <button className="view-all">View All</button>
            </div>
            <div className="table-content">
                <div className="table-column-headers">
                    <div className="column-header">Name</div>
                    <div className="column-header">Type</div>
                    <div className="column-header">Upload Date</div>
                    <div className="column-header">Size</div>
                </div>
                <div className="table-rows">
                    {documents.map(document => (
                        <div key={document.id} className="table-row">
                            <div className="document-info">
                                <div className="document-icon">
                                    <DocumentIcon />
                                </div>
                                <div className="document-name">{document.name}</div>
                            </div>
                            <div className="document-type">{document.type}</div>
                            <div className="document-date">{document.date}</div>
                            <div className="document-size">{document.size}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DocumentsTable; 