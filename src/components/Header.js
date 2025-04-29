import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${props => props.theme.light};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  
  &.scrolled {
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const Logo = styled.div`
  h1 {
    font-size: 2rem;
    color: ${props => props.theme.primary};
    font-weight: 700;
    margin: 0;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    margin-left: 30px;
  }

  ul li a {
    color: ${props => props.theme.dark};
    font-weight: 600;
    position: relative;
  }

  ul li a:hover,
  ul li a.active {
    color: ${props => props.theme.primary};
  }

  ul li a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${props => props.theme.primary};
    transition: width 0.3s ease;
  }

  ul li a:hover::after,
  ul li a.active::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: -100%;
    width: 250px;
    height: 100vh;
    background-color: white;
    padding: 80px 20px 30px;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    z-index: 100;
    
    &.open {
      right: 0;
    }
    
    ul {
      flex-direction: column;
    }
    
    ul li {
      margin: 0 0 20px 0;
    }
  }
`;

const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  width: 30px;
  height: 25px;
  position: relative;
  cursor: pointer;
  
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${props => props.theme.dark};
    border-radius: 3px;
    left: 0;
    transition: all 0.25s ease;
  }
  
  span:nth-child(1) {
    top: 0;
  }
  
  span:nth-child(2) {
    top: 10px;
  }
  
  span:nth-child(3) {
    top: 20px;
  }
  
  &.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 10px;
  }
  
  &.open span:nth-child(2) {
    opacity: 0;
  }
  
  &.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 10px;
  }
  
  @media (max-width: 768px) {
    display: block;
    z-index: 101;
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
  margin-left: 15px;
  
  &:hover {
    background-color: ${props => props.theme.accent};
    color: ${props => props.theme.dark};
    transform: translateY(-2px);
  }

  &::after {
    display: none;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const scrollToBenefits = (e) => {
    e.preventDefault();
    const benefitsSection = document.getElementById('benefits');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      navigate('/#benefits');
    }
  };

  return (
    <StyledHeader className={isScrolled ? 'scrolled' : ''}>
      <Container>
        <Logo>
          <Link to="/">
            <h1>Performance Surge</h1>
          </Link>
        </Logo>
        
        <MobileMenuToggle 
          className={mobileMenuOpen ? 'open' : ''}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuToggle>
        
        <Nav className={mobileMenuOpen ? 'open' : ''}>
          <ul>
            <li><Link to="/" className={location.pathname === '/' && !location.hash ? 'active' : ''}>Home</Link></li>
            <li><a href="/#benefits" onClick={scrollToBenefits} className={location.hash === '#benefits' ? 'active' : ''}>Benefits</a></li>
            <li><Link to="/blog" className={location.pathname.includes('/blog') ? 'active' : ''}>Blog</Link></li>
            <li>
              <CTAButton 
                href={process.env.REACT_APP_AFFILIATE_LINK || "https://www.anrdoezrs.net/click-9083409-15825114"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop Now
              </CTAButton>
            </li>
          </ul>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;