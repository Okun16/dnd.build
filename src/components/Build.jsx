import "./Build.css"
import "./Rarity.css"
import Stats from "./Stats.jsx"
import getRarity from "../utils/rarity.js";
import { Link } from "react-router-dom";


export default function Build({build}){

    const rarity = getRarity(build.likes);

    return (
        <Link to={`/build/${build.id}`} className="build-link">
            <section className="window">
                <div className="build-title">
                    <div className="build-info">
                        <h2 className="main-title">{build.name}</h2>
                        <p className="comment">{build.race + " " + build.className + " • Level " + build.level}</p>
                    </div>
                    <span className={`rarity ${rarity}`}>{rarity.replace("-", " ")}</span>
                </div>
                <div className="build-rule"/>
                <div className="build-summary">
                    <p className="text">{build.summary}</p>
                    <dl className="stats">
                        {Object.entries(build.scores).map(([ability, score]) => (
                                <Stats key={ability} ability={ability} score={score} />
                            ))}
                    </dl>
                </div>
            </section>
        </Link>
    )
}