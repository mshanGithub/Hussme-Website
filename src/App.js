import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Business } from "./Components/Pages/Business";
import { Talent } from "./Components/Pages/Talent";
import { Blog } from "./Components/Pages/Blog";


function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/business" element={<Business />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/blog" element={<Blog/>}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
