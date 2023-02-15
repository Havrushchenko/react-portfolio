import React, { useState } from 'react';
import Nav from './components/Nav';

function App() {
  const [categories] = useState([
    { name: 'about me' },
    { name: 'portfolio' },
    { name: 'contact' },
    { name: 'resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <header>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}> 
        </Nav>
      </header>
    </div>
  );
}

export default App;

