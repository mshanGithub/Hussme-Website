import "./App.css";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
