import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="tab open"><i className="fa-solid fa-database"></i> Data</div>
        <div className="tab border"><i className="fa-solid fa-list-alt"></i> Summary</div>
        <div className="tab"><i className="fa-solid fa-clipboard"></i> Logs</div>
      </div>
      <div className="header-right">
      <i className="fa-solid fa-download"></i> 
      Download
      </div>
    </div>
  );
};

export default Header;
