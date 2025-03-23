import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ViewDocuments from './components/ViewDocuments'; // Ensure these components exist
import EditDocuments from './components/EditDocuments'; // Ensure these components exist
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import UploadDocument from './components/UploadDocument';
import Trash from './components/Trash';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/upload" element={<UploadDocument />} />
              <Route path="/view" element={<ViewDocuments />} /> {/* Ensure ViewDocuments component exists */}
              <Route path="/edit" element={<EditDocuments />} /> {/* Ensure EditDocuments component exists */}
              <Route path="/trash" element={<Trash />} />
              {/* Corrected routes for view and edit documents with IDs */}
              <Route path="/view-document/:id" element={<ViewDocuments />} /> {/* Use ViewDocuments component */}
              <Route path="/edit-document/:id" element={<EditDocuments />} /> {/* Use EditDocuments component */}
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
