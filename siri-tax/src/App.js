import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import UploadDocument from './components/UploadDocument';
import ViewDocuments from './components/ViewDocuments';
import EditDocuments from './components/EditDocuments';
import Trash from './components/Trash';

function App() {
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
              <Route path="/view" element={<ViewDocuments />} />
              <Route path="/edit" element={<EditDocuments />} />
              <Route path="/trash" element={<Trash />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
