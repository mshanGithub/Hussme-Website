import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Business } from "./Components/Pages/Business";
import { Talent } from "./Components/Pages/Talent";
import { Blog } from "./Components/Pages/Blog";
import { ContactUs } from "./Components/Pages/Contactus";
import { Digital } from "./Components/Pages/Blogs/Digital-Detail";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/business" element={<Business />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/digital" element={<Digital />} />
            
          </Routes>
        <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
