import React from 'react';

const MetadataSection = () => {
  return (
    <div className="metadata-section">
      <div className="metadata-left">
        <div><span>Project Name</span> ETL New Demo2</div>
        <div><span>Output Dataset Name</span> ETL N_D2</div>
        <div><span>Last Run</span> Not Available</div>
      </div>
      <div className="metadata-right">
        <h5>Rows: 500</h5>
      </div>
    </div>
  );
};

export default MetadataSection;
