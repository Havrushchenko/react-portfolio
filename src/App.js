import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import background from './assets/img/background.jpg';

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
      <main>
        <div>
          <img src={background} className="my-2" style={{ width: "100%" }} alt="cover" />
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
