import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import CustomCursor from "../components/CustomCursor.jsx";

export default function MainLayout() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}