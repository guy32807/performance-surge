import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import blogPosts from '../data/blogPosts';

const BlogHero = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.secondary} 0%, ${props => props.theme.dark} 100%);
  color: white;
  padding: 60px 0;
  text-align: center;
`;

const BlogFilter = styled.section`
  background-color: white;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 40px;
`;

const TagFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FilterLabel = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;

const FilterButton = styled.button`
  background-color: ${props => props.isActive ? props.theme.primary : '#f0f0f0'};
  color: ${props => props.isActive ? 'white' : props.theme.text};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.isActive ? props.theme.primary : '#e0e0e0'};
  }
`;

const BlogListing = styled.section`
  padding-bottom: 80px;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const BlogCardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: ${props => props.theme.text};
  
  &:hover {
    color: ${props => props.theme.text};
  }
`;

const BlogCardImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${BlogCard}:hover & img {
    transform: scale(1.05);
  }
`;

const BlogCardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const BlogTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: ${props => props.theme.dark};
`;

const BlogMeta = styled.div`
  font-size: 0.85rem;
  color: #777;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
`;

const BlogDate = styled.span`
  margin-right: 15px;
`;

const BlogAuthor = styled.span``;

const BlogExcerpt = styled.p`
  margin-bottom: 20px;
  flex-grow: 1;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: auto;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 60px 0;
  
  h3 {
    margin-bottom: 10px;
  }
  
  p {
    margin-bottom: 20px;
  }
`;

const ResetButton = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.accent};
    color: ${props => props.theme.dark};
  }
`;

const BlogCTA = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.primary} 0%, #ff8700 100%);
  padding: 60px 0;
  margin-top: 40px;
`;

const CTAContent = styled.div`
  text-align: center;
  color: white;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: white;
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 25px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: white;
  color: ${props => props.theme.primary};
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

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const BlogPage = () => {
  // Extract all unique tags from blog posts
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
  
  const [activeTag, setActiveTag] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  
  // Filter posts when activeTag changes
  useEffect(() => {
    if (activeTag === 'All') {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter(post => post.tags.includes(activeTag));
      setFilteredPosts(filtered);
    }
  }, [activeTag]);
  
  // Handle tag filter click
  const handleTagFilter = (tag) => {
    setActiveTag(tag);
  };
  
  return (
    <>
      <Helmet>
        <title>Performance Surge Blog - Performance Tips & Research</title>
        <meta name="description" content="Explore the latest performance enhancement tips and research from Performance Surge experts." />
      </Helmet>

      <BlogHero>
        <Container>
          <h1>Performance Insights</h1>
          <p>Expert advice, research, and strategies to optimize your performance</p>
        </Container>
      </BlogHero>

      <BlogFilter>
        <Container>
          <TagFilter>
            <FilterLabel>Filter by:</FilterLabel>
            <FilterButton 
              isActive={activeTag === 'All'} 
              onClick={() => handleTagFilter('All')}
            >
              All
            </FilterButton>
            {allTags.map(tag => (
              <FilterButton 
                key={tag} 
                isActive={activeTag === tag} 
                onClick={() => handleTagFilter(tag)}
              >
                {tag}
              </FilterButton>
            ))}
          </TagFilter>
        </Container>
      </BlogFilter>

      <BlogListing>
        <Container>
          {filteredPosts.length > 0 ? (
            <BlogGrid>
              {filteredPosts.map(post => (
                <BlogCard key={post.id}>
                  <BlogCardLink to={`/blog/${post.slug}`}>
                    <BlogCardImage>
                      <img src={post.image} alt={post.title} />
                    </BlogCardImage>
                    <BlogCardContent>
                      <BlogTitle>{post.title}</BlogTitle>
                      <BlogMeta>
                        <BlogDate>{post.date}</BlogDate>
                        <BlogAuthor>By {post.author}</BlogAuthor>
                      </BlogMeta>
                      <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                      <TagList>
                        {post.tags.map(tag => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </TagList>
                    </BlogCardContent>
                  </BlogCardLink>
                </BlogCard>
              ))}
            </BlogGrid>
          ) : (
            <NoResults>
              <h3>No articles match your filter</h3>
              <p>Try selecting a different category or view all articles</p>
              <ResetButton onClick={() => handleTagFilter('All')}>
                View All Articles
              </ResetButton>
            </NoResults>
          )}
        </Container>
      </BlogListing>

      <BlogCTA>
        <Container>
          <CTAContent>
            <h2>Ready to Experience the Difference?</h2>
            <p>Join thousands of athletes and professionals who have elevated their performance with Performance Surge.</p>
            <CTAButton 
              href={process.env.REACT_APP_AFFILIATE_LINK || "https://www.anrdoezrs.net/click-9083409-15825114"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Now
            </CTAButton>
          </CTAContent>
        </Container>
      </BlogCTA>
    </>
  );
};

export default BlogPage;