import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../../posts";
import "./Blog.css";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <div className="blogpost-notfound">Post you are looking for does not exist.</div>;

  const { title, date, content, tags, image, author } = post;

  return (
    <div className="blogpost-container">
      <div className="blog-container">

      {image && (
        <div className="blogpost-image">
          <img src={image} alt={title} />
        </div>
      )}
      <h1 className="blogpost-title">{title}</h1>

      <div className="blogpost-meta">
        <span className="blogpost-author">
          <span className="blogpost-text-label">By:</span>
          {author}
        </span>
        <span className="blogpost-date">
          <span className="blogpost-text-label">On:</span>
          {date}
        </span>
      </div>

      <div className="blogpost-divider" />

      <div className="blogpost-content">{content}</div>

      {tags && (
        <div className="blogpost-tags">
          <span className="blogpost-text-label">Tags:</span>
          {tags.map(tag => (
            <Link key={tag} to={`/cleanfolio/blog/tag/${tag}`} className="blogpost-tag">
              {tag}
            </Link>
          ))}
        </div>
      )}
      </div>

      <div className="blogpost-back">
        <Link to="/cleanfolio/blog">← Back to Blog</Link>
      </div>
    </div>
  );
};

export default BlogPost;