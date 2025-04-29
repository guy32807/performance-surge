import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.secondary};
  color: white;
  padding: 60px 0 20px;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const FooterCols = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterCol = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: ${props => props.theme.accent};
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul li {
    margin-bottom: 10px;
  }
  
  ul li a {
    color: #ccc;
    
    &:hover {
      color: white;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialLink = styled.a`
  color: #ccc;
  margin-bottom: 10px;
  
  &:hover {
    color: white;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
  font-size: 0.9rem;
  color: #aaa;
  
  p {
    margin-bottom: 5px;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <StyledFooter>
      <Container>
        <FooterCols>
          <FooterCol>
            <h3>Performance Surge</h3>
            <p>The premium performance enhancement supplement designed to maximize your energy, focus, and athletic performance.</p>
          </FooterCol>
          <FooterCol>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#benefits">Benefits</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li>
                <a 
                  href={process.env.REACT_APP_AFFILIATE_LINK || "https://www.anrdoezrs.net/click-9083409-15825114"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop Now
                </a>
              </li>
            </ul>
          </FooterCol>
          <FooterCol>
            <h3>Connect</h3>
            <SocialLinks>
              <SocialLink href="#" className="social-link">Facebook</SocialLink>
              <SocialLink href="#" className="social-link">Twitter</SocialLink>
              <SocialLink href="#" className="social-link">Instagram</SocialLink>
            </SocialLinks>
          </FooterCol>
        </FooterCols>
        <FooterBottom>
          <p>&copy; {currentYear} Performance Surge. All Rights Reserved.</p>
          <p>This website contains affiliate links. If you purchase through these links, we may earn a commission.</p>
        </FooterBottom>
      </Container>
    </StyledFooter>
  );
};

export default Footer;