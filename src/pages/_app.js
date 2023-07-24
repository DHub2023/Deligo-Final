import '../styles/globals.css';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar1';
import Banner from '../../components/Banner';
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return <>
    
    <ThemeProvider enableSystem={true} attribute="class">
    <Banner/>
    <Navbar/>
    <Component {...pageProps} />
    <Footer />
    </ThemeProvider>
  </>
}
