import React from 'react';
import styled from 'styled-components';
import { Container, SectionTitle, Grid } from '../styles/StyledComponents';
import benefitsData from '../data/benefits';

const BenefitsSection = styled.section`
  background-color: ${props => props.theme.colors.light};
`;

const BenefitItem = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.primary};
`;

const BenefitText = styled.p`
  margin-bottom: 0;
`;

const Benefits = () => {
  return (
    <BenefitsSection id="benefits">
      <Container>
        <SectionTitle>Why Choose Adrenaline?</SectionTitle>
        <Grid>
          {benefitsData.map((benefit, index) => (
            <BenefitItem key={index}>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitText>{benefit.description}</BenefitText>
            </BenefitItem>
          ))}
        </Grid>
      </Container>
    </BenefitsSection>
  );
};

export default Benefits;