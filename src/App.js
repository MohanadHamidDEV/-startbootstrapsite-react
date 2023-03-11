import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar";
import Header from "./header";
import Portfolio from "./pfolio";
import About from "./about";
import Contact from "./contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="header" element={<Header />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
