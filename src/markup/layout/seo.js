import React from 'react';
import Head from 'next/head';

const Seo = ({ title, description, metadata, canonical, robotsTag }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={metadata} />
        <link rel="canonical" href={canonical} />

        {/* <meta name="robotsTag" content={robotsTag}></meta> */}
        <meta name="robots" content={robotsTag} />
      </Head>
      {/* Your page content goes here */}
    </div>
  );
};

export default Seo;
