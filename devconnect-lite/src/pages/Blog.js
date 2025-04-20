import { Link } from "react-router-dom";
import posts from "../data/posts.json";

export default function Blog() {
  return (
    <div className="container">
      <h2>Blog</h2>
      {posts.map(p => (
        <div key={p.id} className="card">
          <h3>{p.title}</h3>
          <p><em>{p.date}</em></p>
          <Link to={`/blog/${p.id}`}>Read more →</Link>
        </div>
      ))}
    </div>
  );
}
