import "../styles/globals.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar1";
import Banner from "../../components/Banner";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Banner />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </SessionProvider>
  );
}
