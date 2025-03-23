import React from "react";
import { useNavigate } from "react-router-dom";
import StatCards from "./StatCards";
import DocumentsTable from "./DocumentsTable";
import ActionCards from "./ActionCards";

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <div className="dashboard-title">Dashboard</div>
                <button className="upload-button" onClick={() => navigate("/upload")}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" 
                            stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 8L12 3L7 8" 
                            stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 3V15" 
                            stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Upload New Document
                </button>
            </div>
            <StatCards />
            <DocumentsTable />
            <ActionCards />
            
        </div>
    );
};

export default Dashboard;
