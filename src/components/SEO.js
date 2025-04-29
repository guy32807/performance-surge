import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, ogImage, ogType = 'website', twitterCard = 'summary_large_image' }) => {
  // Set default values if not provided
  const pageTitle = title || 'Adrenaline - Performance Enhancement | Official Site';
  const pageDescription = description || 'Discover Adrenaline - the premium performance enhancement supplement designed to maximize your energy, focus, and athletic performance.';
  const pageKeywords = keywords || 'adrenaline, energy supplement, performance enhancement, focus boost, athletic performance';
  const pageImage = ogImage || 'https://yourdomain.com/images/adrenaline-social.jpg';
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={window.location.href} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
};

export default SEO;