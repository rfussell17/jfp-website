import { packages, otherSessions } from "../data/site";

const Packages = () => (
  <section className="section packages" id="packages">
    <div className="container">
      <h2 className="section__title">Wedding packages</h2>
      <p className="section__lead">
        Every wedding package includes a second shooter and a complimentary
        engagement session.
      </p>
      <ul className="packages__grid">
        {packages.map((pkg) => (
          <li className="package" key={pkg.name}>
            <h3 className="package__name">{pkg.name}</h3>
            <p className="package__price">{pkg.price}</p>
            <ul className="package__details">
              <li>{pkg.coverage} of coverage</li>
              <li>{pkg.photos} minimum</li>
              <li className="package__included">Second shooter included</li>
              <li className="package__included">Complimentary engagement session</li>
            </ul>
          </li>
        ))}
      </ul>
      <div className="packages__other">
        <h3>Other sessions</h3>
        <ul>
          {otherSessions.map((s) => (
            <li key={s.name}>
              <span>
                {s.name}
                {s.detail && <em> ({s.detail})</em>}
              </span>
              <span>{s.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="packages__cta">
        <a className="button" href="#inquire">
          Check my date
        </a>
      </p>
    </div>
  </section>
);

export default Packages;
