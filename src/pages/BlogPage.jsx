import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import '../styles/BlogPage.css';

const BlogPage = () => {
  const [selectedTag, setSelectedTag] = useState('');
  
  // Get all unique tags
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
  
  // Filter posts by selected tag
  const filteredPosts = selectedTag 
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;
  
  // Sort posts by date (newest first)
  const sortedPosts = [...filteredPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Helmet>
        <title>Adrenaline Blog - Performance Enhancement Tips & Research</title>
        <meta name="description" content="Explore the latest research, tips, and strategies for maximizing your performance with Adrenaline supplements." />
        <meta name="keywords" content="adrenaline blog, performance tips, fitness advice, energy supplements, workout enhancement" />
      </Helmet>

      <section className="blog-hero">
        <div className="container">
          <h1>Adrenaline Performance Blog</h1>
          <p>The latest research, tips, and strategies to maximize your performance</p>
        </div>
      </section>

      <section className="blog-filter">
        <div className="container">
          <div className="tag-filter">
            <span>Filter by topic:</span>
            <button 
              className={selectedTag === '' ? 'active' : ''} 
              onClick={() => setSelectedTag('')}
            >
              All
            </button>
            {allTags.map(tag => (
              <button 
                key={tag} 
                className={selectedTag === tag ? 'active' : ''} 
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-listing">
        <div className="container">
          <div className="blog-grid">
            {sortedPosts.map(post => (
              <article className="blog-card" key={post.id}>
                <Link to={`/blog/${post.slug}`} className="blog-card-link">
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-card-content">
                    <h2>{post.title}</h2>
                    <div className="blog-meta">
                      <span className="blog-date">{post.date}</span>
                      <span className="blog-author">By {post.author}</span>
                    </div>
                    <p>{post.excerpt}</p>
                    <div className="tag-list">
                      {post.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="no-results">
              <h3>No posts found</h3>
              <p>Try selecting a different category or view all posts.</p>
              <button onClick={() => setSelectedTag('')}>View All Posts</button>
            </div>
          )}
        </div>
      </section>

      <section className="blog-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience the Adrenaline Difference?</h2>
            <p>Take your performance to the next level with premium, scientifically-formulated supplements.</p>
            <a 
              href="https://www.anrdoezrs.net/click-9083409-15825114" 
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Adrenaline Products
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;