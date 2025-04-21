import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/posts.json')
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return (
    <main className="dev-page">
      <h2>Blog Posts</h2>
      <div className="dev-grid">
        {posts.map(p => (
          <div key={p.id} className="dev-card">
            <h3>{p.title}</h3>
            <p><em>{p.date}</em></p>
            <Link to={`/blog/${p.id}`}>Read more →</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
