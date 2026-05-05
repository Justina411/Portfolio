import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Viewproject from "./pages/Viewproject";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/viewproject" element={<Viewproject />} />
    </Routes>
  );
}

export default App;