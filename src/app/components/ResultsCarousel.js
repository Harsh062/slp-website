"use client";

import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const ResultsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);

    return () => clearInterval(interval);
  }, [instanceRef]);
  const images = [
    "result13.jpg",
    "result1.jpeg",
    "result2.jpeg",
    "result3.jpeg",
    "result4.jpeg",
    "result5.jpeg",
    "promo.jpeg",
  ];

  return (
    <div className="results-carousel">
      <div ref={sliderRef} className="keen-slider">
        {images.map((src, index) => (
          <div className="keen-slider__slide" key={index}>
            <div className="carousel-slide">
              <Image
                src={`/results/${src}`}
                alt={`Result ${index + 1}`}
                width={1000}
                height={600}
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`carousel-dot ${currentSlide === idx ? "active" : ""}`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          />
        ))}
      </div>

      {/* Arrows on sides */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="carousel-arrow left-arrow"
      >
        &#8592;
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="carousel-arrow right-arrow"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ResultsCarousel;
