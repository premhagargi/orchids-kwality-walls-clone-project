import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import MissionSection from "@/components/sections/mission";
import IconicBrandsSlider from "@/components/sections/brands-slider";
import LeadershipSection from "@/components/sections/leadership";
import ContactUs from "@/components/sections/contact-us";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <IconicBrandsSlider />
        <LeadershipSection />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
