import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../../posts";
import "./Blog.css";

const BlogTag = () => {
  const { tag } = useParams();
  const filteredPosts = posts.filter(p => p.tags?.includes(tag));

  if (filteredPosts.length === 0) return <div>No posts found for #{tag}</div>;

  return (
    <div className="blog-container" style={{ padding: "2rem" }}>
      <h1>Posts tagged with #{tag}</h1>
      {filteredPosts.map(post => (
        <div key={post.slug} className="blog-card" style={{ marginBottom: "2rem" }}>
          <h2>
            <Link to={`/cleanfolio/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <small>{post.date}</small>
        </div>
      ))}
      <div style={{ marginTop: "2rem" }}>
        <Link to="/cleanfolio/blog">← Back to Blog</Link>
      </div>
    </div>
  );
};

export default BlogTag;
