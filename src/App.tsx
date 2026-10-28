import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

/** Reset scroll position on route change. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * Add a new page later:
 *   1. Create src/pages/YourPage.tsx
 *   2. Add <Route path="/your-page" element={<YourPage />} /> below
 *   3. Add { to: "/your-page", label: "Your Page" } to NAV_LINKS in src/data/content.ts
 */
export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="noise-layer" aria-hidden />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
