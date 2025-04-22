"use client";

import React from "react";
import Image from "next/image";
import "./about.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>Our Story</h2>
          <h3>
            <em>“Nurturing Talent. Transforming Futures.”</em>
          </h3>
          <p>
            Stimulus Learning Point was founded in 2012 with a singular mission
            — to make quality coaching accessible to every deserving student in
            Vidarbha. With a strong focus on individual attention and small
            batch sizes, SLP has consistently helped students achieve top ranks
            in exams like JEE, NEET, MHT-CET, and SSC.
          </p>
          <p>
            Over the years, we have built a legacy of academic excellence,
            driven by a passionate teaching faculty, a rigorous test series, and
            a nurturing environment. Our approach goes beyond traditional
            learning — we believe in guiding each student personally and
            holistically.
          </p>
          <p>
            Our students have consistently made it to the IITs, BITS, top
            medical colleges, and premier institutes across India. The results
            speak for themselves — hundreds of selections, year after year.
          </p>
          <p>
            At Stimulus, education isn’t just about marks — it’s about igniting
            ambition and equipping students with the mindset to succeed.
          </p>
        </div>
        <div className="about-image">
          <Image
            src="/about-us.jpeg"
            alt="Nishant D. Gandhi - Founder of SLP"
            width={400}
            height={500}
            className="founder-photo"
          />
          <p className="founder-name">
            Nishant D. Gandhi
            <br />
            <span>Founder, Stimulus Learning Point</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
