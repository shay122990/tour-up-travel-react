import About from "./components/About/about.component";
import Hero from "./components/Hero/hero.component";
import Navbar from "./components/Navbar/navbar.component";
import Services from "./components/Services/services.component";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  );
}

export default App;
