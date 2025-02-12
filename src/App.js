import "./App.css";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Business } from "./Components/Pages/Business";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Business />
      <Footer />
    </div>
  );
}

export default App;
