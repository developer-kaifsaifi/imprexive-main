import Hero from "../sections/Hero";
import Whatwedo from "../sections/Whatwedo";
import TrustedBy from "../components/Trustedby";
import FAQ from "../components/FAQ";
import Experiences from "../sections/Experience";
import ProcessSection from "../sections/ProcessSection";
import Contact from "../sections/Contact";

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