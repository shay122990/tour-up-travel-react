import "./hero.styles.css";
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>Tour Up</h1>
        <p>
          "Discover breathtaking destinations and create lasting memories with
          Tour Up—your trusted partner in crafting extraordinary travel
          experiences that inspire and captivate, one unforgettable journey at a
          time."
        </p>
        <a href="#tours" className="btn hero-btn ">
          explore tours
        </a>
      </div>
    </section>
  );
};
export default Hero;
