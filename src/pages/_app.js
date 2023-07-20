import '../styles/globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return <>
    
    <ThemeProvider enableSystem={true} attribute="class">
    <Banner/>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </ThemeProvider>
  </>
}
