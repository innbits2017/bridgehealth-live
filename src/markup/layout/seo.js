import React from 'react';
import MetaTags from 'react-meta-tags';

const Seo = ({ title, description, metadata, canonical, robotsTag }) => {
  return (
    <MetaTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metadata} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robotsTag} />
    </MetaTags>
  );
};

export default Seo;
