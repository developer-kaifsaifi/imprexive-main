import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";

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