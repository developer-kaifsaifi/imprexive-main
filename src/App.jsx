import {  Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import HomeLayout from "./pages/HomeLayout";
import About from "./pages/About";
import Services from "./components/Services";
import ExperiencePage from "./pages/ExperiencePage";
import Contact from "./sections/Contact";


export default function App() {
  return (
     <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experience" element={<ExperiencePage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  );
}