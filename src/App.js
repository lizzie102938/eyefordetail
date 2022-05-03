import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutNewPage from './Components/AboutNewPage';
import OurServicesNewPage from './Components/OurServicesNewPage';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<AboutNewPage />} />
          <Route path="/ourservices" element={<OurServicesNewPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
