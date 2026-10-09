import portrait from "../assets/jonny.jpg";
import { about } from "../data/site";

const About = () => (
  <section className="section about" id="about">
    <div className="container about__grid">
      <img
        className="about__portrait"
        src={portrait}
        width="1080"
        height="1350"
        loading="lazy"
        alt="Jonny Fussell, wedding photographer, looking down at his camera"
      />
      <div className="about__text">
        <h2 className="section__title">About</h2>
        {about.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
    </div>
  </section>
);

export default About;
