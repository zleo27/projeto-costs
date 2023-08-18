import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/pages/Home";
import Contact from "./components/pages/pages/Contact";
import Company from "./components/pages/pages/Company";
import NewProject from "./components/pages/pages/NewProject";
import Container from "./components/pages/layout/Container";
import Projects from "./components/pages/pages/projects";

import Navbar from "./components/pages/layout/navbar";
import Footer from "./components/pages/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="minHeight">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<projects />} />

          <Route path="/company" element={<Company />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
