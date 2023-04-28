import React from 'react';
import '../App.css'
function Header({ handlePageChange }) {

  return (
    <header>
      <h1>Neale Chapman</h1>
      <div>
        {/*User clicks on title to navigate to selected page (open page window)*/}
        <nav>
          <ul>
            <li onClick={() => handlePageChange("AboutMe")} > About Me </li>
            <li onClick={() => handlePageChange("Portfolio")}> Portfolio </li>
            <li onClick={() => handlePageChange("Contact")} > Contact Me </li>
            <li onClick={() => handlePageChange("Resume")} > Resume </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;