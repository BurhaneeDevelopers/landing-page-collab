import "../styles/globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <div className="body">
      <Navbar />
      <Component {...pageProps}/>
      <Footer />
    </div>
  );
}
