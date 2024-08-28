import React from 'react';
import './header.css';
import { HeaderProps } from './types';
import logoImage from '../src/assets/ApexDev/logo.jpg'; 
import logo from '../src/assets/ApexDev/ApexDev-02.png'
import { Helmet } from 'react-helmet';

const Header: React.FC<HeaderProps> = ({ logoSrc = logoImage, altText }) => {
  return (
    <div>
      <Helmet>
        <title>ApexDev - Web Development Company in South Africa</title>
        <meta name="description" content="ApexDev is a leading web development company in South Africa, offering expert services in graphic design, web design, and digital media solutions." />
        <meta name="keywords" content="Graphic Design, Web Development, Web Design, Website Design, Digital Media, Social Media Management, Logo Design, Web Development Company, Graphic Design Services, Website Development Company" />
      </Helmet>
      <header className="header">
        <div>
          <img src={logoSrc} alt={altText} className="logo" />
        </div>
        <div>
          <img src={logo} alt={altText} className="Apexlogo" />
        </div>
      </header>
    </div>
  );
};

export default Header;