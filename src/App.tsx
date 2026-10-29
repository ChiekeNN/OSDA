import { useEffect } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import HistoryOfOghe from "./pages/HistoryOfOghe";
import HistoryOfOsda from "./pages/HistoryOfOsda";
import HistoryOfEzeagu from "./pages/HistoryOfEzeagu";
import BoardOfTrustees from "./pages/BoardOfTrustees";
import InauguralLeadership from "./pages/InauguralLeadership";
import Leadership2006To2010 from "./pages/Leadership2006To2010";
import Leadership2010To2014 from "./pages/Leadership2010To2014";
import Leadership2014To2018 from "./pages/Leadership2014To2018";
import Leadership2018To2021 from "./pages/Leadership2018To2021";
import Leadership2021ToPresent from "./pages/Leadership2021ToPresent";
import SightsAndSoundsOfOghe from "./pages/SightsAndSoundsOfOghe";

/** Reset scroll position on route change. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/** Scroll to section links after HashRouter has rendered the destination. */
function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const timeout = window.setTimeout(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
    }, 0);
    return () => window.clearTimeout(timeout);
  }, [pathname, hash]);
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
      <ScrollToHash />
      <div className="noise-layer" aria-hidden />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/history-of-oghe" element={<HistoryOfOghe />} />
          <Route path="/about/history-of-osda" element={<HistoryOfOsda />} />
          <Route path="/about/history-of-ezeagu" element={<HistoryOfEzeagu />} />
          <Route path="/administration" element={<Navigate to="/administration/board-of-trustees" replace />} />
          <Route path="/administration/board-of-trustees" element={<BoardOfTrustees />} />
          <Route path="/administration/inaugural-leadership" element={<InauguralLeadership />} />
          <Route path="/administration/leadership-2006-2010" element={<Leadership2006To2010 />} />
          <Route path="/administration/leadership-2010-2014" element={<Leadership2010To2014 />} />
          <Route path="/administration/leadership-2014-2018" element={<Leadership2014To2018 />} />
          <Route path="/administration/leadership-2018-2021" element={<Leadership2018To2021 />} />
          <Route path="/administration/leadership-2021-present" element={<Leadership2021ToPresent />} />
          <Route path="/about/osda-administration" element={<Navigate to="/administration/board-of-trustees" replace />} />
          <Route path="/about/sights-and-sounds-of-oghe" element={<SightsAndSoundsOfOghe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
