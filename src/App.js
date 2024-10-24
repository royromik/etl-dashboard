import React from 'react';
import Header from './components/Header.js';
import MetadataSection from './components/MetadataSection.js';
import DataTable from './components/DataTable.js';
import WorkflowSection from './components/WorkflowSection.js';
import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
      <div className="main-content">
        {/* Header, Metadata and DataTable */}
        <Header />
        <MetadataSection />
        <div className="data-table-section">
          <DataTable />
        </div>
      </div>

        <WorkflowSection />
    </div>
  );
};

export default App;
