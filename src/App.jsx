import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurWork from "./pages/OurWork";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";
import OurWorkDetail from "./pages/OurWorkDetail";

const App = () => {
  return (
    <Router>
      <div className="font-open-sans">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/our-work-detail/:id" element={<OurWorkDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-detail/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Banner />
      <Footer />
      </div>
    </Router>
  );
};

export default App;
