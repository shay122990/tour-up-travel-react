import About from "./components/About/about.component";
import Hero from "./components/Hero/hero.component";
import Navbar from "./components/Navbar/navbar.component";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
