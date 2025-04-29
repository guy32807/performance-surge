import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import blogPosts from '../data/blogPosts';
import '../styles/BlogPostPage.css';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the current post
  const post = blogPosts.find(post => post.slug === slug);
  
  // Handle if post doesn't exist
  useEffect(() => {
    if (!post) {
      navigate('/blog', { replace: true });
    }
  }, [post, navigate]);
  
  if (!post) return null;
  
  // Get related posts
  const relatedPosts = post.relatedPosts
    .map(id => blogPosts.find(post => post.id === id))
    .filter(Boolean);

  return (
    <>
      <Helmet>
        <title>{post.title} | Adrenaline Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ') + ', adrenaline, supplements'} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
      </Helmet>

      <div className="blog-post-container">
        <article className="blog-post">
          <div className="blog-header">
            <h1>{post.title}</h1>
            <div className="blog-meta">
              <span className="blog-date">{post.date}</span>
              <span className="blog-author">By {post.author}</span>
            </div>
            <div className="blog-featured-image">
              <img src={post.image} alt={post.title} />
            </div>
          </div>

          <div className="blog-content">
            <ReactMarkdown 
              rehypePlugins={[rehypeRaw]} 
              remarkPlugins={[remarkGfm]}
            >
              {post.content}
            </ReactMarkdown>

            <div className="blog-cta">
              <p>Ready to experience the Adrenaline difference for yourself?</p>
              <a 
                href="https://www.anrdoezrs.net/click-9083409-15825114" 
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Adrenaline Now
              </a>
            </div>
          </div>

          <div className="blog-footer">
            <div className="blog-tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="blog-share">
              <p>Share this article:</p>
              <div className="share-buttons">
                <button className="share-button facebook">Facebook</button>
                <button className="share-button twitter">Twitter</button>
                <button className="share-button linkedin">LinkedIn</button>
              </div>
            </div>
          </div>
        </article>

        <aside className="blog-sidebar">
          <div className="sidebar-widget related-posts">
            <h3>Related Articles</h3>
            <ul>
              {relatedPosts.map(relatedPost => (
                <li key={relatedPost.id}>
                  <Link to={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-widget product-highlight">
            <h3>Featured Product</h3>
            <div className="product-card">
              <div className="product-image">
                <a 
                  href="https://www.anrdoezrs.net/click-9083409-15825114" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src="https://www.ftjcfx.com/image-9083409-15825114" 
                    width="320" 
                    height="100" 
                    alt="Adrenaline Product" 
                  />
                </a>
              </div>
              <p>Experience premium performance enhancement with Adrenaline!</p>
              <a 
                href="https://www.anrdoezrs.net/click-9083409-15825114" 
                className="cta-button small"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop Now
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default BlogPostPage;