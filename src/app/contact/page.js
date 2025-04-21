"use client";

import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.0956710423065!2d76.5662779!3d20.7063393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd751ebac0f47d9%3A0xdd269976e2e1e80a!2sStimulus%20Learning%20Point!5e0!3m2!1sen!2sin!4v1745239203654!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Stimulus Learning Point Map"
          ></iframe>
        </div>
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            <strong>Stimulus Learning Point</strong>
          </p>
          <p>Kalptaru Hall, Near Agrasen Bhavan,</p>
          <p>Balaji Plots, Khamgaon, Maharashtra</p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919422926950">+91 94229 26950</a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/919422926950"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
