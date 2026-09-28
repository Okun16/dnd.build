import "./Stats.css";
import modifier from "../utils/modifier";

export default function Stats({ ability, score }) {
  return (
    <div className="stat">
      <dt>{ability}</dt>
      <dd>
        {score}
        <span className="mod">{modifier(score)}</span>
      </dd>
    </div>
  );
}