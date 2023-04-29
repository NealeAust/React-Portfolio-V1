import React from 'react';
import '../App.css'
import resumePdf from "../images/Resume.pdf"

function Resume() {
  return (
    <div>
      {/* User able to download PDF copy of Resume */}
      <a href={resumePdf} download >
        <h4>Download Resume</h4>
      </a>

      {/* Displays a list of my proficiencies using props. */}
      <h8>Profiencies</h8>
      <div className="Program" />
      <ul>
        <li><Program code="html" /></li>
        <li><Program code="css" /></li>
        <li><Program code="css" /></li>
        <li><Program code="node.js" /></li> 
        <li><Program code="express.js" /></li>
        <li><Program code="sql" /></li>
        <li><Program code="React" /></li>
      </ul>
    </div>
  );
}

const Program = (props) => {
  return (
    <div>
      <h6> {props.code}</h6>
    </div>
  )
}

export default Resume;


