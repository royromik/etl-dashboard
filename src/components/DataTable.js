import React, {useState} from 'react';
import josnData from "../data/sample.json";


const DataTable = () => {
    const [tableData,setTableData] = useState(josnData.table_data);
    const [tableHeader, setTableHeader] = useState(josnData.table_headers)
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          {/* Main Header */}
          <tr className="header-row">
            {tableHeader.map((header, idx) => (
              header.name!=="Row"&&<th key={idx}>
                <div className='d-flex'>
                <div>{header.name}</div>
                <i className="fa-solid fa-trash"></i> 
                </div>
                </th>
            ))}
            {/* Delete column for spacing */}
            <th className="delete-icon">Delete</th>
          </tr>

          {/* Sub Header with dropdown for data types */}
          <tr className="sub-header-row">
            {tableHeader.map((header, idx) => (
              header.name!=="Row"&&<th key={idx} width="50px">
                <select>
                  <option>{header.type}</option>
                </select>
              </th>
            ))}
            {/* Empty cell for delete column */}
            <th></th>
          </tr>
        </thead>

        <tbody>
          {/* Dynamically Rendering the Table Data */}
          {tableData.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, colIdx) => (
                colIdx!==0&&<td key={colIdx}>{cell}</td>
              ))}
              {/* Delete Icon Column */}
              <td className="delete-icon">X</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
