import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => <PortfolioContainer />;

export default App;



// import React, { useState } from 'react';
// import Nav from './components/Nav';
// import About from './components/About';
// import Resume from './components/Resume';
// import Footer from './components/Footer';


// function App() {
//   const [categories] = useState([
//     { name: 'about me' },
//     { name: 'portfolio' },
//     { name: 'contact' },
//     { name: 'Resume' },
//   ]);

//   const [currentCategory, setCurrentCategory] = useState(categories[0]);

//   return (
//     <div>
//       <header>
//         <Nav
//           categories={categories}
//           setCurrentCategory={setCurrentCategory}
//           currentCategory={currentCategory}>
//         </Nav>
//       </header>
//       <main>
//         <div className="background-image">
//           <Resume></Resume>
//         <About></About>
//         </div>
//       </main>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default App;
