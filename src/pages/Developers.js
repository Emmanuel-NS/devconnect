import devs from "../data/developers.json";
export default function Developers() {
  return (
    <div className="container">
      <h2>Developers</h2>
      {devs.map(d => (
        <div key={d.id} className="card">
          <h3>{d.name}</h3>
          <p>Skills: {d.skills.join(", ")}</p>
          <p>
            <a href={d.github} target="_blank">GitHub</a>{" | "}
            <a href={d.linkedin} target="_blank">LinkedIn</a>
          </p>
          <h4>Projects:</h4>
          <ul>
            {d.projects.map((p,i) => (
              <li key={i}>
                <strong>{p.title}</strong>:{" "}
                <a href={p.link} target="_blank">{p.description}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
