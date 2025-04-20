import { useParams, Link } from "react-router-dom";
import posts from "../data/posts.json";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === +id);
  if (!post) return <div className="container">Post not found.</div>;

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <p><em>{post.date}</em></p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <p><Link to="/blog">← Back to blog</Link></p>
    </div>
  );
}
