import heroImage from "../assets/hero.jpg";

const Hero = () => (
  <section className="hero" id="top">
    <img
      className="hero__image"
      src={heroImage}
      width="1800"
      height="1350"
      alt="A bride and groom kissing among wildflowers beside a marina, mountains and stormy skies behind them"
      fetchPriority="high"
    />
    <div className="hero__shade" />
    <h1 className="hero__title">
      Documentary wedding photography, <span>Kelowna, BC</span>
    </h1>
  </section>
);

export default Hero;
