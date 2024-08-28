import React from 'react';
import { BodyProps } from './types';
import bodyImage from './bodyAssets/Banner.jpg';
import graphicDesign from './bodyAssets/logodesign-01.jpg';
import softwareDev from './bodyAssets/software-01.jpg';
import webDesign from './bodyAssets/WebDesign-01.jpg';
import multimedia from './bodyAssets/Multimedia-01.jpg';
import socialMedia from './bodyAssets/Social-Media-01.jpg';
import brand from './bodyAssets/Brand-01-01.jpg'
import './body.css';
import ProjectButton from '../body/buttons/button';
import getXimage from './buttons/assets/Projects-01.jpg';
import ndamaseProperties from '../body/buttons/assets/Projects-02.jpg'
import alliedBusinessSolutions from '../body/buttons/assets/Projects-03.jpg'
import Helmet from 'react-helmet'



const Body: React.FC<BodyProps> = ({ 
    imageSrc = bodyImage, 
    graphicDesignImage = graphicDesign, 
    softwareDevelopImage = softwareDev,
    webDesignImage = webDesign,
    multimediaImage = multimedia,
    socialMediaImage = socialMedia,
    brandingImage = brand,
    altText = 'Hero Banner Image of PC' }) => {
  return (
    <>
      <Helmet>
        <title>ApexDev - Web Development Company in South Africa | Graphic Design Services</title>
        <meta name="description" content="ApexDev is a leading Web Development Company in South Africa, offering expert Graphic Design Services, Web Design, and Digital Media Solutions." />
        <meta name="keywords" content="Web Development Company in South Africa, Graphic Design Services, Web Design, Website Design, Digital Media, Social Media Management, Logo Design, Branding, Multimedia, Information Technology" />
      </Helmet>
      <div className="body-container">
     
        <div className='heading-div'>
        <h2 className="h2">
          Bring Your Vision to Life with ApexDev, Transforming Ideas into Digital Reality
        </h2>
        </div>
        <div className='hero-container'>
        
        <div className='paragraph-div'>
        <p className='p'>
          
        Welcome to ApexDev, a leading Web Development Company in South Africa, where innovative ideas meet 
        digital reality. Our expert team crafts compelling Brand Design, Branding Design, and Logo Brand Design solutions, 
        helping businesses establish a strong Corporate Identity. With over a decade of experience, we've become a trusted 
        Marketing Agency in South Africa, offering cutting-edge Digital Solutions that drive success. Our comprehensive services 
        include Website Development, Graphic Design, Digital Media, and Social Media Management, all tailored to help businesses 
        thrive in today's fast-paced digital landscape. As a renowned Digital Marketing Agency in Johannesburg, we're passionate 
        about empowering businesses to succeed. Let's bring your vision to life with our expertise in E-Commerce Website Development 
        and Multimedia Production.
        </p>
        </div>
        
        
        </div>
      

      <div className='imageDiv'>
        <img src={imageSrc} alt={altText} className="body-image" />
      </div>

        <div className='whoAreWe-div'>
      <h2 className='h2'>Who Are We?</h2>
      <div className='paragraph-div'>
        <p className="p">
        At ApexDev, we're fueled by a passion for pioneering Digital Solutions 
        that transform businesses. Our team of expert creatives and technologists, 
        led by a seasoned Web & Graphic Designer, Video Editor, SEO Manager, and 
        Front-End Developer, combines over a decade of experience to drive innovation 
        in the digital landscape. With a robust foundation in Graphic Design, Multimedia, 
        and Development, we fuse artistic vision with technical precision to deliver exceptional results for our clients."
         </p>
         </div>
        </div>

        <div className='heading-div'>
          <h2 className='h2'>Our Services</h2>
        </div>

        <div className='image-container'> 

          <div > 
          <img src={graphicDesignImage} alt={altText} className="graphic-image" />
          <h2 className='services-heading'>Graphic Design</h2>
        </div>

        <div>
            <img src={softwareDevelopImage} alt={altText} className="web-design-image" />
            <h2 className='services-heading'>Web Development</h2>
        </div>

        <div>
            <img src={webDesignImage} alt={altText} className="software-dev-image" />
            <h2 className='services-heading'>Web Design</h2>
        </div>

    </div>
    <div className='image-container-two'> 
      <div>
        <img src={multimediaImage} alt={altText} className="multimedia-image" />
        <h2 className='services-heading'>Multimedia</h2>
        </div>
        <div>
        <img src={socialMediaImage} alt={altText} className="social-media-image" />
        <h2 className='services-heading'>Social Media</h2>
        </div>
        <div>
        <img src={brandingImage} alt={altText} className="branding-image" />
        <h2 className='services-heading'>Branding</h2>
        </div>
    </div>

    <div>

    <div className='heading-div'>
          <h2 className='h2'>Projects</h2>
          <h3 className='h3'>Web Design</h3>
    </div>

    <div className='buttons-div'>

        <div className='button'> 
            <ProjectButton
            imageSrc={getXimage}
            altText='GetX Button'
            buttonText='E-Commerce Website'
            link='https://www.getx.co.za'
            />
        </div>

        <div className='button'>
            <ProjectButton
            imageSrc={ndamaseProperties}
            altText='Ndamase Properties Button'
            buttonText='Real Estate Company'
            link='https://www.ndamaseproperties.com'
            />
        </div>

        <div className='button'>
            <ProjectButton
            imageSrc={alliedBusinessSolutions}
            altText='Allied Business Solutions Button'
            buttonText='Information Technology Company'
            link='https://www.allied-biz.co.za'
            />
        </div>    


      </div>

  </div>

</div>

   
    </>
  );
};

export default Body;
