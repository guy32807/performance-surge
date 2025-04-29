import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Section = styled.section`
  padding: 80px 0;
`;

export const Button = styled(Link)`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.small ? '10px 20px' : '15px 30px'};
  border-radius: 5px;
  font-weight: 600;
  font-size: ${props => props.small ? '0.9rem' : '1.1rem'};
  text-align: center;
  transition: ${props => props.theme.transitions.standard};

  &:hover {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.dark};
    transform: translateY(-3px);
  }
`;

export const ExternalButton = styled.a`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.small ? '10px 20px' : '15px 30px'};
  border-radius: 5px;
  font-weight: 600;
  font-size: ${props => props.small ? '0.9rem' : '1.1rem'};
  text-align: center;
  transition: ${props => props.theme.transitions.standard};

  &:hover {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.dark};
    transform: translateY(-3px);
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: ${props => props.theme.colors.dark};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.minWidth || '250px'}, 1fr));
  gap: ${props => props.gap || '30px'};
`;