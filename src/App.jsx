import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Privacy from "./Components/Privacy/Privacy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Services from "./Components/Services/Services";

/** Smoothly scroll to top or to a hash anchor on route changes */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

/** Home page layout */
function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/privacy"
          element={
            <>
              <Nav />
              <Privacy />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Nav />
              <main
                style={{
                  padding: "80px 20px",
                  maxWidth: 1120,
                  margin: "0 auto",
                }}
              >
                <h1 style={{ margin: 0 }}>Page not found</h1>
                <p style={{ color: "#64748b", marginTop: 8 }}>
                  The page you’re looking for doesn’t exist. Try the links
                  above.
                </p>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        closeOnClick
        pauseOnHover={false}
        theme="colored"
        newestOnTop
        limit={1}
      />
    </>
  );
}
