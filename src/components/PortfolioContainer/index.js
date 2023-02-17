import React, { useState } from 'react';
import Nav from '../Nav/index';
import About from '../About/index';
import Contact from '../Contact/index';
import Resume from '../Resume/index';
import Footer from '../Footer/index';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="background-image">
      {renderPage()}
      </div>
      <Footer></Footer>
    </div>
  );
}
