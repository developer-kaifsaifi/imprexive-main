import Hero from "../sections/Hero.jsx";
import Whatwedo from "../sections/Whatwedo.jsx";
import TrustedBy from "../components/Trustedby.jsx";
import FAQ from "../components/FAQ.jsx";
import Experiences from "../sections/Experience.jsx";
import ProcessSection from "../sections/ProcessSection.jsx";
import Contact from "../sections/Contact.jsx";

export default function HomeLayout() {
  return (
    <>
      <Hero />
      <Whatwedo />
      <TrustedBy />
      <FAQ />
      <Experiences />
      <ProcessSection />
      <Contact />
    </>
  );
}