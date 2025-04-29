import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import '../styles/HomePage.css';

const HomePage = () => {
  // Get the latest 3 blog posts
  const latestPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Adrenaline - Performance Enhancement | Official Site</title>
        <meta name="description" content="Discover Adrenaline - the premium performance enhancement supplement designed to maximize your energy, focus, and athletic performance." />
        <meta name="keywords" content="adrenaline, energy supplement, performance enhancement, focus boost, athletic performance" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Adrenaline - Performance Enhancement | Official Site" />
        <meta property="og:description" content="Discover Adrenaline - the premium performance enhancement supplement designed to maximize your energy, focus, and athletic performance." />
        <meta property="og:image" content="/images/adrenaline-social.jpg" />
      </Helmet>

      <section className="hero">
        <div className="container">
          <h2>Elevate Your Performance</h2>
          <p>Experience the ultimate energy and focus enhancement with Adrenaline</p>
          <a 
            href="https://www.anrdoezrs.net/click-9083409-15825114" 
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop Now
          </a>
          <div className="hero-image">
            <a 
              href="https://www.anrdoezrs.net/click-9083409-15825114" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="https://www.ftjcfx.com/image-9083409-15825114" 
                width="320" 
                height="100" 
                alt="Adrenaline Products" 
              />
            </a>
          </div>
        </div>
      </section>

      <section id="benefits" className="benefits">
        <div className="container">
          <h2>Why Choose Adrenaline?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Maximum Energy</h3>
              <p>Feel energized throughout your day without the crash of typical energy drinks.</p>
            </div>
            <div className="benefit-item">
              <h3>Enhanced Focus</h3>
              <p>Experience laser-sharp mental clarity for peak productivity and performance.</p>
            </div>
            <div className="benefit-item">
              <h3>Improved Endurance</h3>
              <p>Push your limits and extend your workouts with sustained energy support.</p>
            </div>
            <div className="benefit-item">
              <h3>Quality Ingredients</h3>
              <p>Formulated with premium, researched ingredients for safe and effective results.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-blog">
        <div className="container">
          <h2>Latest From Our Blog</h2>
          <div className="blog-previews">
            {latestPosts.map(post => (
              <div className="blog-card" key={post.id}>
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="read-more">Read More</Link>
                </div>
              </div>
            ))}
          </div>
          <Link to="/blog" className="view-all">View All Posts</Link>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Experience Adrenaline?</h2>
          <p>Join thousands of satisfied customers who have transformed their performance with Adrenaline.</p>
          <a 
            href="https://www.anrdoezrs.net/click-9083409-15825114" 
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop Adrenaline Now
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;