import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import Contact from '../pages/Contact';

const MetadataContext = createContext();

const MetadataProvider = ({ children }) => {
  const defaultMetadata = {
    title: 'OZ Website',
    description: 'An award winning creative and design agency based in New York, USA.',
    keywords: 'oz, design, agency, website',
    author: 'Oryza Sativa',
  };

  const metadata = {
    about: {
      title: 'About Us',
      description: 'This is About page, you can find our mission & vision, and our team member here.',
      keywords: 'About Us, Team',
      author: 'Oryza Sative',
    },
    blog: {
      title: 'Blog',
      description: 'This is Our Blog Page, you can find our latest blog or article posts here.',
      keywords: 'Blog',
      author: 'Oryza Sativa',
    },
    contact: {
      title: 'Contact',
      description: 'This is Contact page, you can find our contact information here.',
      keywords: 'Contact',
      author: 'Oryza Sativa',
    },
    home: {
      title: 'Home',
      description: 'This is Home page, you can find our latest news or articles here.',
      keywords: 'Home',
      author: 'Oryza Sativa',
    },
    work: {
      title: 'Our Work',
      description: 'This is Our Work page, you can find our latest work or projects here.',
      keywords: 'Our Work',
      author: 'Oryza Sativa',
    }
  };

  return (
    <MetadataContext.Provider value={{ defaultMetadata, metadata }}>
      {children}
    </MetadataContext.Provider>
  );
};

MetadataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MetadataProvider, MetadataContext };