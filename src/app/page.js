import ResultsCarousel from "./components/ResultsCarousel";
import ImpactStats from "./components/ImpactStats";
import PopularCourses from "./components/PopularCourses";
import Testimonials from "./components/Testimonials";
import UspsSection from "./components/UspsSection";

export default function Home() {
  return (
    <main>
      <ResultsCarousel />
      <ImpactStats />
      <PopularCourses />
      <Testimonials />
      <UspsSection />
    </main>
  );
}
