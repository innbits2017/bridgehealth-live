import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Seo extends Component {
  render() {
    const { title, description, metadata, canonical, robotsTag } = this.props;

    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={metadata}></meta> 
        <link rel="canonical" href={canonical} />
        <meta name="robots" content={robotsTag} />

        {/* Additional metadata tags can be added here */}
      </Helmet>
    );
  }
}

export default Seo;