import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  author = 'Your Name'
}) => {
  const siteTitle = 'Portfolio - Developer & Designer';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Professional portfolio showcasing web development, design, and creative projects. Explore my work in React, JavaScript, and modern web technologies.';
  const defaultImage = '/logo512.png';
  const defaultUrl = 'https://your-domain.com';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || 'portfolio, web developer, designer, React, JavaScript, frontend, UI/UX, creative'} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content="Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || defaultUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || defaultImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={url || defaultUrl} />
    </Helmet>
  );
};

export default SEO; 