
import { styleReset } from 'react95';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import Navbar from './Components/Navbar';
import { HeroSection } from './Components/HeroSection';
import Products from './Components/Products';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Services from './Components/Services';
import { statistics } from './utilits';
import Footer from './Components/Footer';

// import Footer from './components/Footer';


function App() {
  const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    // src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    // src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

  return (
    <>
   <div>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Navbar />
        <HeroSection />
        <Products />
        <Services statistics={statistics} title={"Our Services"} description={'We offer a range of services designed to provide you with the best experience. From secure packaging to round-the-clock support, discover our commitment to quality.'}></Services>
        <AboutUs />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
    </>
  )
}

export default App

