import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/StyledComponents';

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.secondary} 0%, ${props => props.theme.colors.dark} 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 30px;
  transition: ${props => props.theme.transitions.standard};
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.dark};
    transform: translateY(-3px);
  }
`;

const HeroImage = styled.div`
  margin-top: 30px;
`;

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroTitle>Elevate Your Performance</HeroTitle>
        <HeroSubtitle>
          Experience the ultimate energy and focus enhancement with Adrenaline
        </HeroSubtitle>
        <CTAButton 
          href="https://www.anrdoezrs.net/click-9083409-15825114" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Shop Now
        </CTAButton>
        <HeroImage>
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
              border="0"
            />
          </a>
        </HeroImage>
      </Container>
    </HeroSection>
  );
};

export default Hero;