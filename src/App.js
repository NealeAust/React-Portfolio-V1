import React, { useState } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"
import Resume from "./components/Resume"


// Within header window at onClick of a title. 
// Code below checks each page until it finds the title clicked.
// The application navigates to and opens the selected component (page) window.
function App() {

  const [currentPage, handlePageChange] = useState("AboutMe")

  const renderPage = (page) => {
    if (page === 'AboutMe') {
      return <AboutMe />;
    }
    if (page === 'Portfolio') {
      return <Portfolio />;
    }
    if (page === 'Contact') {
      return <Contact />;
    }
    if (page === 'Resume') {
      return <Resume />;
    };
  }

  // The header and footer remain constant, only the page(body) selected onClick changes.
  return (
    <div>
      <Header handlePageChange={handlePageChange} />
      {renderPage(currentPage)}
      <Footer />
    </div>
  );
}


export default App;