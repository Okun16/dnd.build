import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPopularBuilds, getRandomBuild } from "../api/builds";
import Build from "../components/Build.jsx";
import "./Home.css";

export default function Home() {
  const [featured, setFeatured] = useState(null);
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const [random, top] = await Promise.all([getRandomBuild(), getPopularBuilds()]);
        setFeatured(random);
        setPopular(top);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <main className="home">
      <section className="hero">
        <div className="description">
          <p className="secondary-text">Character builder for D&D 5e</p>
          <h1 className="main-title">Forge your next hero</h1>
          <p className="text">
            Build a character in minutes, see every modifier worked out for you,
            and bring a finished sheet to the table.
          </p>
          <div className="actions">
            <Link to="/new-build" className="button">Start a new build</Link>
            <Link to="/profile" className="link">Go to your builds</Link>
          </div>
        </div>

        <div className="show-build">
          <p className="comment">Featured build</p>
          {loading && <p className ="secondary-text">Rolling the dice…</p>}
          {error && <p className ="secondary-text">Seems like we're having a problem loading the build.</p>}
          {!loading && !error && featured && <Build build={featured} />}
        </div>
      </section>

      <hr />

      <section className="howto">
        <h2 className="main-title">How it works</h2>
        <div className="steps">
          <div className="step">
            <span className="num">1</span>
            <h3 className="main-title">Choose your origin</h3>
            <p className="secondary-text">Pick a race, class and background. We explain every option in plain words.</p>
          </div>
          <div className="step">
            <span className="num">2</span>
            <h3 className="main-title">Pick your stats</h3>
            <p className="secondary-text">Assign your scores, arm your hero, choose their skills, and multiclass without cracking open the rulebook.</p>
          </div>
          <div className="step">
            <span className="num">3</span>
            <h3 className="main-title">Save &amp; share</h3>
            <p className="secondary-text">Keep builds on your profile and send a link to your party right before session night.</p>
          </div>
        </div>
      </section>

      <hr />

      <section className="popular">
        <div className="popular-head">
          <h2 className="main-title">Popular builds</h2>
          <Link className="link" to="/new-build">Make your own</Link>
        </div>
        {!loading && popular.length === 0 ? (
          <p>Currently there are no builds.</p>
        ) : (
          <div className="build-grid">
            {popular.map((build) => (
              <Build key={build.id} build={build} />
            ))}
          </div>
        )}
      </section>
      <section className="account">
        <p className="fleuron">❦</p>
        <h3 className="main-title">Your party is waiting</h3>
        <p className="secondary-text">Create a free account to save builds and share them with your group.</p>
        <Link to="/signup" className="button">Sign up</Link>
      </section>
    </main>
  );
}