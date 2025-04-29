import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, SectionTitle, Grid } from '../styles/StyledComponents';
import blogPosts from '../data/blogPosts';

const BlogSection = styled.section`
  background-color: white;
`;

const BlogCard = styled.div`
  background-color: ${props => props.theme.colors.light};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  padding: 30px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.dark};
`;

const BlogExcerpt = styled.p`
  margin-bottom: 20px;
`;

const ReadMore = styled(Link)`
  font-weight: 600;
  display: inline-block;
  position: relative;
  
  &::after {
    content: "→";
    margin-left: 5px;
    transition: margin-left 0.3s ease;
  }
  
  &:hover::after {
    margin-left: 10px;
  }
`;

const ViewAll = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 40px;
  font-weight: 600;
  font-size: 1.1rem;
`;

const BlogPreview = () => {
  // Only show the first 3 blog posts for the preview
  const previewPosts = blogPosts.slice(0, 3);
  
  return (
    <BlogSection id="featured-blog">
      <Container>
        <SectionTitle>Latest From Our Blog</SectionTitle>
        <Grid minWidth="300px">
          {previewPosts.map((post) => (
            <BlogCard key={post.id}>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <ReadMore to={`/blog/${post.slug}`}>Read More</ReadMore>
            </BlogCard>
          ))}
        </Grid>
        <ViewAll to="/blog">View All Posts</ViewAll>
      </Container>
    </BlogSection>
  );
};

export default BlogPreview;