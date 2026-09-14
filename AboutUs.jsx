import { Link } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <main className="about-us-page">
      <section className="about-hero">
        <h1>About Paradise Nursery</h1>
        <p className="about-tagline">
          Bringing green, healthy living into every home since 2010.
        </p>
      </section>

      <section className="about-content">
        <p>
          Paradise Nursery is a family-run plant shop dedicated to helping
          people fill their homes and offices with beautiful, thriving
          greenery. What started as a single greenhouse has grown into a
          trusted online destination for plant lovers of every experience
          level.
        </p>

        <p>
          Every plant we sell is hand-selected and cared for by our team of
          horticulturists before it ever reaches your door. We believe that
          plants do more than decorate a space &mdash; they purify the air,
          ease stress, and bring a sense of calm to everyday life. That's why
          we carefully curate our collection around the benefits each plant
          provides, from aromatic and fragrant varieties to natural insect
          repellents, air-purifying favorites, and low-maintenance options
          for even the busiest households.
        </p>

        <p>
          Our mission is simple: make it easy for anyone, anywhere, to bring
          a little more nature into their life. Whether you're a seasoned
          gardener or picking out your very first houseplant, our team is
          here to help you find the perfect green companion.
        </p>

        <div className="about-values">
          <div className="value-card">
            <h3>🌱 Sustainably Grown</h3>
            <p>
              Our plants are grown using eco-friendly practices that protect
              the environment at every step.
            </p>
          </div>
          <div className="value-card">
            <h3>🚚 Carefully Delivered</h3>
            <p>
              Each order is packaged with care to ensure your plants arrive
              healthy and ready to thrive.
            </p>
          </div>
          <div className="value-card">
            <h3>💬 Always Here to Help</h3>
            <p>
              Our plant experts are just a message away if you ever need
              care tips or advice.
            </p>
          </div>
        </div>

        <Link to="/products" className="about-cta">
          Explore Our Plants
        </Link>
      </section>
    </main>
  );
}

export default AboutUs;
