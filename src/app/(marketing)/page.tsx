import Hero from "@/components/sections/hero";
import Facilities from "@/components/sections/Facilities";
import Maps from "@/components/sections/Maps";
import { Footer } from "@/components/sections/Footer";
import Gallery from "@/components/sections/Gallery";
import Review from "./review/page";

export default function Marketing() {
  return (
    <>
      <Hero />
      <Gallery />
      <Facilities />
      <Review />
      <Maps />
      <Footer />
    </>
  );
}
