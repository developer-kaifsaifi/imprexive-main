
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./pages/MainLayout.jsx";
import About from "./pages/About.jsx";
import Services from "./components/Services.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import Contact from "./sections/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import HomePageSkeleton from "./components/HomePageSkeleton.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Privacy from "./components/Privacy.jsx";
import Terms from "./components/Terms.jsx";

const HomeLayout = lazy(() => import("./pages/HomeLayout.jsx"));

export default function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<HomePageSkeleton />}>
              <HomeLayout />
            </Suspense>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  );
}
