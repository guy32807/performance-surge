import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/StyledComponents';

const CTAContainer = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, #ff8700 100%);
  color: white;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: white;
  color: ${props => props.theme.colors.primary};
  padding: 15px 30px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: ${props => props.theme.transitions.standard};
  
  &:hover {
    background-color: ${props => props.theme.colors.dark};
    color: white;
    transform: translateY(-3px);
  }
`;

const CTASection = () => {
  return (
    <CTAContainer id="cta">
      <Container>
        <CTATitle>Ready to Experience Adrenaline?</CTATitle>
        <CTAText>
          Join thousands of satisfied customers who have transformed their performance with Adrenaline.
        </CTAText>
        <CTAButton 
          href="https://www.anrdoezrs.net/click-9083409-15825114" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Shop Adrenaline Now
        </CTAButton>
      </Container>
    </CTAContainer>
  );
};

export default CTASection;