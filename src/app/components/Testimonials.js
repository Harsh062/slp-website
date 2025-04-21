"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

const testimonials = [
  {
    name: "Sanika Hatekar",
    course: "JEE 2024 (IIT Roorkee)",
    image: "/testimonials/sanika_hatekar.png",
    text: "Stimulus Learning Point played a pivotal role in my IIT JEE journey. The faculty is exceptionally supportive and ensures that every concept is crystal clear. The personalized attention, structured study material, and regular motivation kept me focused and confident throughout. Highly recommended for serious JEE aspirants!",
  },
  {
    name: "Zainab Gulzar",
    course: "NEET 2021 (KEM Mumbai)",
    image: "/testimonials/zainab_gulzar.png",
    text: "The Best you can get in Khamgaon. Good team. Good teachers, very helping and inspiring",
  },
  {
    name: "Garima Rathi",
    course: "NEET 2023 (GMC Nagpur)",
    image: "/testimonials/garima_rathi.png",
    text: "Bestt placee to preparing for school or highschool..I myself was associated with the institute from my 8th class and even did my NEET preparation from SLP.. During my NEET preparation all the teaching as well as non teaching staff helped me a lot..the way they supported me and motivated me is the reason I cracked my NEET-UG in first attempt with 655 marks and got admission in GMC Nagpur…..Weekly test , continuous guidance by teachers and personal attention of teachers on my progress helped me a lot !!I am grateful to all the teachers and other staff members !!!",
  },
  {
    name: "Harsh Sharma",
    course: "JEE/MHT-CET 2023 (VJTI Mumbai)",
    image: "/testimonials/harsh_sharma.png",
    text: "Best you can get in Buldana district .Dedicated faculties. Best environment for serious aspirants. Guidance by the mentors are very helpful throughout my journey. #ProudSLPite",
  },
  {
    name: "Yash Gandhi",
    course: "MHT-CET 2024 (PICT Pune)",
    image: "/testimonials/yash_gandhi.png",
    text: "Stands out with interactive and easy-to-understand teaching style, making complex topics simple.",
  },
  {
    name: "Mahavir Chaudhary",
    course: "BITSAT 2019 (BITS Pilani)",
    image: "/testimonials/mahavir_chaudhary.png",
    text: "Good place, great teachers!",
  },
  {
    name: "Soham Kolte",
    course: "MHT-CET 2023 (VIIT Pune)",
    image: "/testimonials/soham_kolte.png",
    text: "SLP Coaching Institute has been an absolute game-changer for me.The faculty's unwavering support and personalized guidance have instilled a newfound confidence within me. SLP goes beyond just imparting knowledge; it creates a family-like environment where dreams are nurtured and aspirations take flight. Forever grateful for this life-changing experience!Btw my MHT-CET PCM score is 98.66%ile",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [featuredRef, featuredSlider] = useKeenSlider({
    loop: true,
    initial: 0,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const [thumbRef, thumbSlider] = useKeenSlider({
    loop: true,
    initial: 0,
    slides: { perView: 3, spacing: 16 },
  });

  // Sync featured and thumbnail sliders
  useEffect(() => {
    const interval = setInterval(() => {
      featuredSlider.current?.next();
      thumbSlider.current?.next();
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredSlider, thumbSlider]);

  return (
    <section className="testimonials-section">
      {/* Featured Testimonial */}
      <div ref={featuredRef} className="keen-slider featured-slider">
        {testimonials.map((t, index) => (
          <div className="keen-slider__slide featured-testimonial" key={index}>
            <Image
              src={t.image}
              alt={t.name}
              width={150}
              height={150}
              className="testimonial-photo"
            />
            <div className="testimonial-quote">“</div>
            <p className="testimonial-text">{t.text}</p>
            <p className="testimonial-name">{t.name}</p>
            <p className="testimonial-course">{t.course}</p>
          </div>
        ))}
      </div>

      {/* Thumbnails Carousel (Bottom) */}
      <div ref={thumbRef} className="keen-slider testimonial-grid">
        {testimonials.map((t, index) => (
          <div className="keen-slider__slide testimonial-card" key={index}>
            <p className="testimonial-text">
              {t.text.length > 160 ? t.text.slice(0, 160) + "..." : t.text}
            </p>

            <div className="testimonial-footer">
              <Image
                src={t.image}
                alt={t.name}
                width={64}
                height={64}
                className="testimonial-avatar"
              />

              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-course">{t.course}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots below bottom carousel */}
      <div className="dots">
        {Array.from({
          length: Math.ceil(testimonials.length / 3),
        }).map((_, idx) => (
          <button
            key={idx}
            className={`dot ${
              Math.floor(currentSlide / 3) === idx ? "active" : ""
            }`}
            onClick={() => {
              featuredSlider.current?.moveToSlideRelative(idx * 3);
              thumbSlider.current?.moveToSlideRelative(idx * 3);
              setCurrentSlide(idx * 3);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
