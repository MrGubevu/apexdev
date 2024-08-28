import './footer.css';
import logo from '../footer/assets/ApexDev-02.png'
import { Helmet } from 'react-helmet';

function renderFooter(): JSX.Element {
  return (
    <>
     <Helmet>
        <title>ApexDev - Web Development Company in East London, South Africa</title>
        <meta name="description" content="Contact ApexDev, a leading web development company in East London, South Africa, for innovative digital solutions." />
        <meta name="keywords" content="Web Development Company in East London, South Africa, Digital Solutions, Web Design, Web Development" />
      </Helmet>
   
    <footer className="footer">
      <div className="footer-content">
        <div>
        <img src={logo} alt="ApexDev Logo - Web Development Company in East London, South Africa" className="footer-logo" />
        </div>
        
        <div>
        <h3 className="footer-heading">Contact Us</h3>
        <p className="footer-info">(+27) 67 976 2345</p>
        <p className="footer-info"><a href="mailto:lgubevu@gmail.com" className="footer-link">lgubevu@gmail.com</a></p>
        <p className="footer-info">East London, South Africa</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default renderFooter;
