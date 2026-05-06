import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home';
import { Team } from './pages/Team';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { ProjectDetail } from './components/projects/ProjectDetail';
import { ServicesDetail } from './components/services/ServicesDetail';
import "swiper/css";
import "swiper/css/navigation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-detail" element={<ServicesDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
