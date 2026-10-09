import heroImage from "../assets/hero.jpg";

const Hero = () => (
  <section className="hero" id="top">
    <img
      className="hero__image"
      src={heroImage}
      width="1080"
      height="566"
      alt="A wedding party dancing in a circle around a bride and groom sharing a kiss"
      fetchPriority="high"
    />
    <div className="hero__shade" />
    <h1 className="hero__title">
      Documentary wedding photography, <span>Kelowna, BC</span>
    </h1>
  </section>
);

export default Hero;
