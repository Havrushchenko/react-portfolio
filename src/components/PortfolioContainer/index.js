import React, { useState } from 'react';
import Nav from '../Nav/index';
import About from '../About/index';
import Contact from '../Contact/index';
import Portfolio from '../Portfolio/index';
import Resume from '../Resume/index';
import Footer from '../Footer/index';
import Background from '../../assets/img/background.jpg';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
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
      <div style={{backgroundImage: `url(${Background})`, width: '100vw', height: '100vh', backgroundSize: 'cover'}}>
      {renderPage()}
      </div>
      <Footer></Footer>
    </div>
  );
}
