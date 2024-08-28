import Header from '../components/header'
import Body from '../components/body/body.tsx'
import renderFooter from '../components/footer/footer.tsx'
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>ApexDev Studios | Web Development | Web Design | Graphic Design | Branding</title>
        <meta name="description" content="ApexDev Studios offers innovative web development, web design, graphic design, and branding solutions." />
        <meta name="keywords" content="Web Development, Web Design, Graphic Design, Branding, ApexDev Studios" />
      </Helmet>
      
      <Header logoSrc={'../src/assets/ApexDev/logo.jpg'} altText={'ApexDev Logo'} />
      <Body />
      {renderFooter()}
    </>
  )
}

export default App