"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

const testimonials = [
  {
    name: "Sanika Hatekar",
    course: "JEE 2024 (IIT Roorkee)",
    image: "/testimonials/sanika_hatekar.jpeg",
    text: "Stimulus Learning Point played a pivotal role in my IIT JEE journey. The faculty is exceptionally supportive and ensures that every concept is crystal clear. The personalized attention, structured study material, and regular motivation kept me focused and confident throughout. Highly recommended for serious JEE aspirants!",
  },
  {
    name: "Zainab Gulzar",
    course: "NEET 2021 (KEM Mumbai)",
    image: "/testimonials/zainab_gulzar.jpeg",
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
    image: "/testimonials/harsh_sharma.jpeg",
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
    image: "/testimonials/mahavir_chaudhary_1.png",
    text: "Good place, great teachers!",
  },
  {
    name: "Soham Kolte",
    course: "MHT-CET 2023 (VIIT Pune)",
    image: "/testimonials/soham_kolte.jpeg",
    text: "SLP Coaching Institute has been an absolute game-changer for me.The faculty's unwavering support and personalized guidance have instilled a newfound confidence within me. SLP goes beyond just imparting knowledge; it creates a family-like environment where dreams are nurtured and aspirations take flight. Forever grateful for this life-changing experience!Btw my MHT-CET PCM score is 98.66%ile",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const [featuredRef, featuredSlider] = useKeenSlider({
    loop: true,
    initial: 0,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const toggleExpanded = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

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
      <h2 className="testimonial-heading">
        <span className="highlighted-word">Our Pride,</span> Their Stories
      </h2>

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
            <div className="testimonial-quote">&#8220;</div>

            <p
              className={`testimonial-text ${
                expandedIndexes.includes(index) ? "expanded" : ""
              }`}
            >
              {expandedIndexes.includes(index)
                ? t.text
                : t.text.slice(0, 140) + (t.text.length > 140 ? "..." : "")}
            </p>
            {t.text.length > 140 && (
              <button
                className="read-more-toggle"
                onClick={() => toggleExpanded(index)}
              >
                {expandedIndexes.includes(index) ? "Read Less" : "Read More"}
              </button>
            )}

            <p className="testimonial-name">{t.name}</p>
            <p className="testimonial-course">{t.course}</p>
          </div>
        ))}
      </div>
      <div className="mobile-arrows">
        <button onClick={() => featuredSlider.current?.prev()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button onClick={() => featuredSlider.current?.next()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="testimonial-thumbnails">
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
                featuredSlider.current?.moveToIdx(idx * 3);
                thumbSlider.current?.moveToIdx(idx * 3);
                setCurrentSlide(idx * 3);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
