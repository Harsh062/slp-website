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

export const metadata = {
  title: "Stimulus Learning Point – Coaching Institute in Khamgaon",
  description:
    "Join Stimulus Learning Point, the top-rated institute in Vidarbha for JEE, NEET, and MHT-CET. Proven results, expert faculty, and student-first approach.",
};
