import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import blogPosts from '../data/blogPosts';

const BlogPostContainer = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  padding: 60px 0;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const BlogPost = styled.article`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const BlogHeader = styled.div`
  padding: 30px 30px 0;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: ${props => props.theme.dark};
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const BlogMeta = styled.div`
  color: #777;
  margin-bottom: 25px;
  font-size: 0.9rem;
`;

const BlogDate = styled.span`
  margin-right: 20px;
`;

const BlogFeaturedImage = styled.div`
  margin: 0 -30px 30px;
  
  img {
    width: 100%;
    height: auto;
  }
`;

const BlogContent = styled.div`
  padding: 0 30px 30px;
  
  h2 {
    font-size: 1.8rem;
    margin: 30px 0 20px;
    color: ${props => props.theme.primary};
    
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }
  
  h3 {
    font-size: 1.4rem;
    margin: 25px 0 15px;
    color: ${props => props.theme.secondary};
    
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
  
  p {
    margin-bottom: 20px;
    line-height: 1.8;
  }
  
  ul, ol {
    margin-bottom: 20px;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  blockquote {
    border-left: 4px solid ${props => props.theme.primary};
    padding: 15px 20px;
    background-color: #f9f9f9;
    margin: 20px 0;
    font-style: italic;
  }
`;

const BlogCTA = styled.div`
  background-color: #f8f8f8;
  padding: 30px;
  text-align: center;
  margin: 40px -30px -30px;
  border-top: 1px solid #eee;
  
  p {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: ${props => props.theme.primary};
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.accent};
    color: ${props => props.theme.dark};
    transform: translateY(-2px);
  }
`;

const BlogFooter = styled.div`
  background-color: #f8f8f8;
  padding: 20px 30px;
  border-top: 1px solid #eee;
`;

const BlogTags = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span`
  display: inline-block;
  background-color: #eee;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.85rem;
`;

const BlogShare = styled.div`
  p {
    margin-bottom: 10px;
  }
`;

const ShareButtons = styled.div`
  display: flex;
  gap: 15px;
`;

const ShareButton = styled.button`
  background-color: ${props => props.theme.secondary};
  color: white;
  padding: 5px 15px;
  border-radius: 4px;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.primary};
  }
  
  &.facebook:hover {
    background-color: #4267B2;
  }
  
  &.twitter:hover {
    background-color: #1DA1F2;
  }
  
  &.linkedin:hover {
    background-color: #0077B5;
  }
`;

const BlogSidebar = styled.aside`
  align-self: start;
  
  @media (max-width: 992px) {
    margin-top: 40px;
  }
`;

const SidebarWidget = styled.div`
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  
  h3 {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #eee;
    color: ${props => props.theme.secondary};
  }
`;

const RelatedPosts = styled.div`
  ul {
    list-style: none;
  }
  
  ul li {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
  }
  
  ul li:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const RelatedPostLink = styled(Link)`
  font-weight: 600;
  color: ${props => props.theme.dark};
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const ProductCard = styled.div`
  text-align: center;
`;

const ProductImage = styled.div`
  margin-bottom: 15px;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  
  &::before {
    content: "←";
    margin-right: 5px;
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 100px 0;
  
  h1 {
    margin-bottom: 20px;
  }
  
  p {
    margin-bottom: 30px;
  }
`;

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  useEffect(() => {
    // Find the post that matches the slug
    const currentPost = blogPosts.find(post => post.slug === slug);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Get related posts
      if (currentPost.relatedPosts && currentPost.relatedPosts.length > 0) {
        const related = blogPosts.filter(p => currentPost.relatedPosts.includes(p.id));
        setRelatedPosts(related);
      }
      
      // Scroll to top when post changes
      window.scrollTo(0, 0);
    }
  }, [slug]);
  
  // Share functionality
  const shareUrl = window.location.href;
  const shareTitle = post ? post.title : 'Performance Surge Blog';
  
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };
  
  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank');
  };
  
  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };
  
  if (!post) {
    return (
      <Container>
        <NotFound>
          <h1>Article Not Found</h1>
          <p>Sorry, the article you're looking for doesn't exist or has been moved.</p>
          <CTAButton as={Link} to="/blog">View All Articles</CTAButton>
        </NotFound>
      </Container>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{`${post.title} | Performance Surge Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={shareUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Container>
        <BackLink to="/blog">Back to Articles</BackLink>
        
        <BlogPostContainer>
          <BlogPost>
            <BlogHeader>
              <h1>{post.title}</h1>
              <BlogMeta>
                <BlogDate>{post.date}</BlogDate>
                <span>By {post.author}</span>
              </BlogMeta>
            </BlogHeader>
            
            <BlogFeaturedImage>
              <img src={post.image} alt={post.title} />
            </BlogFeaturedImage>
            
            <BlogContent>
              <ReactMarkdown 
                rehypePlugins={[rehypeRaw]} 
                remarkPlugins={[remarkGfm]}
              >
                {post.content}
              </ReactMarkdown>
              
              <BlogCTA>
                <p>Ready to experience the Performance Surge difference?</p>
                <CTAButton 
                  href={process.env.REACT_APP_AFFILIATE_LINK || "https://www.anrdoezrs.net/click-9083409-15825114"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop Now
                </CTAButton>
              </BlogCTA>
            </BlogContent>
            
            <BlogFooter>
              <BlogTags>
                {post.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </BlogTags>
              
              <BlogShare>
                <p>Share this article:</p>
                <ShareButtons>
                  <ShareButton className="facebook" onClick={shareOnFacebook}>Facebook</ShareButton>
                  <ShareButton className="twitter" onClick={shareOnTwitter}>Twitter</ShareButton>
                  <ShareButton className="linkedin" onClick={shareOnLinkedIn}>LinkedIn</ShareButton>
                </ShareButtons>
              </BlogShare>
            </BlogFooter>
          </BlogPost>
          
          <BlogSidebar>
            {relatedPosts.length > 0 && (
              <SidebarWidget>
                <h3>Related Articles</h3>
                <RelatedPosts>
                  <ul>
                    {relatedPosts.map(related => (
                      <li key={related.id}>
                        <RelatedPostLink to={`/blog/${related.slug}`}>
                          {related.title}
                        </RelatedPostLink>
                      </li>
                    ))}
                  </ul>
                </RelatedPosts>
              </SidebarWidget>
            )}
            
            <SidebarWidget>
              <h3>Performance Surge</h3>
              <ProductCard>
                <ProductImage>
                  <a 
                    href={process.env.REACT_APP_AFFILIATE_LINK || "https://www.anrdoezrs.net/click-9083409-15825114"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img 
                      src={process.env.REACT_APP_AFFILIATE_IMAGE || "https://www.ftjcfx.com/image-9083409-15825114"} 
                      width="250" 
                      height="250" 
                      alt="Performance Surge Products" 
                    />
                  </a>
                </ProductImage>
                <p>Experience the ultimate performance enhancement with our premium formula.</p>
                <CTAButton 
                  href={process.env.REACT_APP_AFFILIATE_LINK || "https://www.anrdoezrs.net/click-9083409-15825114"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop Now
                </CTAButton>
              </ProductCard>
            </SidebarWidget>
          </BlogSidebar>
        </BlogPostContainer>
      </Container>
    </>
  );
};

export default BlogPostPage;