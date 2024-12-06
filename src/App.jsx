import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MetadataProvider } from "./context/MetaDataContext";

// Lazy load the pages
const Home = lazy(() => import("./pages/Home"));
const OurWork = lazy(() => import("./pages/OurWork"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const OurWorkDetail = lazy(() => import("./pages/OurWorkDetail"));

const App = () => {
  return (
    <MetadataProvider>
      <Router>
        <div className="font-open-sans">
          <Navbar />
          <ScrollToTop />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/our-work-detail/:id" element={<OurWorkDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog-detail/:id" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Banner />
          <Footer />
        </div>
      </Router>
    </MetadataProvider>
  );
};

export default App;
