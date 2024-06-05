import About from "./components/About/about.component";
import Footer from "./components/Footer/footer.component";
import Hero from "./components/Hero/hero.component";
import Navbar from "./components/Navbar/navbar.component";
import Services from "./components/Services/services.component";
import Tours from "./components/Tours/tours.component";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </div>
  );
}

export default App;
