import BasicLayout from "@/layouts/BasicLayout";
import HeroSection from "./(components)/HeroSection";
import WorksSection from "./(components)/WorksSection";
import ServiceSection from "./(components)/ServiceSection";

export default function Home() {
  return (
    <BasicLayout>
      <div>
        <HeroSection/>
        <WorksSection/>
        <ServiceSection/>
      </div>
    </BasicLayout>
  );
}
