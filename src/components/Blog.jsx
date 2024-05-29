import React, { useState, useEffect } from 'react';
import './Blog.css';
import blogPostsData from './blogPosts';
import { Fade } from "react-awesome-reveal";


function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // Simulating delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setBlogPosts(blogPostsData);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch blog posts');
        setLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  return (
    <section id="blog" className="blog-section">
        <Fade  cascade damping={0.1} direction="right" delay={500}>
      <h2>Blog</h2>
      <div className="blog-container">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p className="blog-meta">
              <span>{post.date}</span> | <span>{post.author}</span>
            </p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      </Fade>
    </section>
  );
}

export default Blog;
