import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.secondary} 0%, ${props => props.theme.dark} 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
`;

const BenefitsSection = styled.section`
  padding: 80px 0;
  background-color: ${props => props.theme.light};

  h2 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 2.5rem;
    color: ${props => props.theme.dark};
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const BenefitCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: ${props => props.theme.primary};
  }
`;

const FeaturedBlogSection = styled.section`
  padding: 80px 0;

  h2 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 2.5rem;
    color: ${props => props.theme.dark};
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const BlogCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
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
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: ${props => props.theme.dark};
  }

  p {
    margin-bottom: 20px;
    flex-grow: 1;
  }
`;

const ReadMore = styled(Link)`
  font-weight: 600;
  display: inline-block;
  position: relative;
  align-self: flex-start;
  margin-top: auto;

  &::after {
    content: "→";
    margin-left: 5px;
    transition: margin-left 0.3s ease;
  }

  &:hover::after {
    margin-left: 10px;
  }
`;

const ViewAllLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 40px;
  font-weight: 600;
  font-size: 1.1rem;
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.primary} 0%, #ff8700 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Heading = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Subheading = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
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

const HeroImage = styled.div`
  margin-top: 30px;
`;

const HomePage = () => {
  // Get the 3 most recent blog posts for featured section
  const featuredPosts = blogPosts.slice(0, 3);
  
  return (
    <>
      <Helmet>
        <title>Performance Surge - Premium Energy & Focus Enhancement</title>
        <meta name="description" content="Discover Performance Surge - the premium performance enhancement supplement designed to maximize your energy, focus, and athletic performance." />
      </Helmet>

      <HeroSection>
        <Container>
          <Heading>Elevate Your Performance</Heading>
          <Subheading>Experience the ultimate energy and focus enhancement with Performance Surge</Subheading>
          <CTAButton 
            href={process.env.REACT_APP_AFFILIATE_LINK || "https://www.anrdoezrs.net/click-9083409-15825114"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop Now
          </CTAButton>
          <HeroImage>
            <a 
              href={process.env.REACT_APP_AFFILIATE_LINK || "https://www.anrdoezrs.net/click-9083409-15825114"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={process.env.REACT_APP_AFFILIATE_IMAGE || "https://www.ftjcfx.com/image-9083409-15825114"} 
                width="320" 
                height="100" 
                alt="Performance Surge Products" 
              />
            </a>
          </HeroImage>
        </Container>
      </HeroSection>

      <BenefitsSection id="benefits">
        <Container>
          <h2>Transform Your Performance</h2>
          <BenefitsGrid>
            <BenefitCard>
              <h3>Increased Energy</h3>
              <p>Our scientifically formulated blend provides clean, sustained energy without the crash experienced with other supplements. Perfect for intense workouts or long work days.</p>
            </BenefitCard>
            <BenefitCard>
              <h3>Enhanced Focus</h3>
              <p>Performance Surge contains cognitive enhancers that sharpen mental clarity and concentration, helping you achieve peak performance in both physical and mental tasks.</p>
            </BenefitCard>
            <BenefitCard>
              <h3>Improved Endurance</h3>
              <p>Push your limits with ingredients designed to delay fatigue and improve stamina. Go harder and longer in your training sessions with improved recovery times.</p>
            </BenefitCard>
            <BenefitCard>
              <h3>Quality Ingredients</h3>
              <p>We use only premium, clinically-tested ingredients with no proprietary blends. Each component is included at effective dosages backed by scientific research.</p>
            </BenefitCard>
          </BenefitsGrid>
        </Container>
      </BenefitsSection>

      <FeaturedBlogSection>
        <Container>
          <h2>Latest Performance Insights</h2>
          <BlogGrid>
            {featuredPosts.map(post => (
              <BlogCard key={post.id}>
                <BlogCardImage>
                  <img src={post.image} alt={post.title} />
                </BlogCardImage>
                <BlogCardContent>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <ReadMore to={`/blog/${post.slug}`}>Read More</ReadMore>
                </BlogCardContent>
              </BlogCard>
            ))}
          </BlogGrid>
          <ViewAllLink to="/blog">View All Articles</ViewAllLink>
        </Container>
      </FeaturedBlogSection>

      <CTASection>
        <Container>
          <Heading>Ready to Elevate?</Heading>
          <Subheading>Join thousands of athletes and professionals who have transformed their performance with Performance Surge.</Subheading>
          <CTAButton 
            href={process.env.REACT_APP_AFFILIATE_LINK || "https://www.anrdoezrs.net/click-9083409-15825114"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop Now
          </CTAButton>
        </Container>
      </CTASection>
    </>
  );
};

export default HomePage;