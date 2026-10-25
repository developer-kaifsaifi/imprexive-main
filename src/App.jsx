import {  Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout.jsx";
import HomeLayout from "./pages/HomeLayout.jsx";
import About from "./pages/About.jsx";
import Services from "./components/Services.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import Contact from "./sections/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";


export default function App() {
  return (
     <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experience" element={<ExperiencePage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  );
}