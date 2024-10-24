import React, { useState } from 'react';
import jsonData from "../data/sample.json";

const WorkflowSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [workflows, setWorkflows] = useState(jsonData.workflow_steps);
  const [workflowId, setWorkflowId] = useState("b15f6a85-4228-4f30-9418-c412e1b86757");
 

  const toggleAccordion = (id) => {
    setIsExpanded(!isExpanded);
    setWorkflowId(id)
  };

  return (
    <div className="workflow-section">
      <div className="workflow-header">
        <h3>Workflow</h3>
        <div className="workflow-icons">
        <i className="fa-solid fa-times"></i> 
        <i className="fa-solid fa-download"></i> 
        <i className="fa-solid fa-save"></i> 
        <i className="fa-solid fa-spinner"></i> 
        </div>
      </div>
      {workflows.map((workflow)=>(
        
          <div className="workflow-tab" key={workflow.id} onClick={(e)=>toggleAccordion(workflow.id)}>
          <div className="d-flex">
          {(isExpanded && workflowId==workflow.id)? <i className="fa-solid fa-minus"></i>  : <i className="fa-solid fa-plus"></i> } 
          <div className={`tab-header ${(isExpanded && workflowId==workflow.id)&&"open"}`}>
           {workflow.name}
          </div>
          </div>
        
          {(isExpanded && workflowId==workflow.id)&& (
           <div className='tab-container' key={`${workflow.id} tab`}>
            <div className='tab-desc'>
             {workflow.params_extra.name?workflow.params_extra.name:JSON.stringify(workflow.params_extra)}
            </div>
            </div>
          )}
        </div>
      ))}
      

      {/* Workflow Tabs */}
     
    </div>
  );
};

export default WorkflowSection;
