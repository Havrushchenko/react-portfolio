import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Portfolio } from "./pages/Portfolio"
import { Resume } from "./pages/Resume"
import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer"

function App() {
    return (
        <>
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
            <Footer></Footer>
        </>
    )
}

export default App;

