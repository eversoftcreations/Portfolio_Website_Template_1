import BasicLayout from "@/layouts/BasicLayout";
import HeroSection from "./(components)/HeroSection";
import WorksSection from "./(components)/WorksSection";

export default function Home() {
  return (
    <BasicLayout>
      <div>
        <HeroSection/>
        <WorksSection/>
      </div>
    </BasicLayout>
  );
}
