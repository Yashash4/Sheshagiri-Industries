import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import CompanySnapshot from './components/CompanySnapshot/CompanySnapshot';
import AboutUs from './components/AboutUs/AboutUs';
import ManufacturingCapabilities from './components/ManufacturingCapabilities/ManufacturingCapabilities';
import ProductCategories from './components/ProductCategories/ProductCategories';
import OurClients from './components/OurClients/OurClients';
import WhyUs from './components/WhyUs/WhyUs';
import QualityAssurance from './components/QualityAssurance/QualityAssurance';
import Sustainability from './components/Sustainability/Sustainability';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanySnapshot />
      <AboutUs />
      <ManufacturingCapabilities />
      <ProductCategories />
      <OurClients />
      <WhyUs />
      <QualityAssurance />
      <Sustainability />
      <ContactUs />
      <Footer />  
    </>
  );
}

export default App;