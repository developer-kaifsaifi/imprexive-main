import Hero from "../sections/Hero.jsx";
import Whatwedo from "../sections/Whatwedo.jsx";

import FAQ from "../components/FAQ.jsx";
import Experiences from "../sections/Experience.jsx";
import ProcessSection from "../sections/ProcessSection.jsx";
import Contact from "../sections/Contact.jsx";
import TrustedBy from "../components/TrustedBy.jsx";

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