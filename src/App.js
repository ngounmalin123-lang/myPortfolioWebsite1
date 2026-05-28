import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from "./page/Home";
import AboutPage from "./page/AboutPage";
import ProjectPage from "./page/ProjectPage";
import SkillPage from "./page/SkillPage";
import ContactPage from "./page/ContactPage";



function App() {
  return (
    <Router>
    <Navbar />
      <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={< Home />} />
          <Route path="about" element={< AboutPage />}/>
          <Route path="projects" element={< ProjectPage />} />
          <Route path="skills" element={< SkillPage/>} />
          <Route path="contact" element={< ContactPage />} />
        </Routes>
      </main>
      <Footer />
   
    </Router>
  );
}

export default App;
