// components/UspsSection.js

import React from "react";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaClipboardCheck,
  FaLightbulb,
  FaComments,
  FaUserFriends,
} from "react-icons/fa";

const usps = [
  {
    icon: <FaChalkboardTeacher size={24} color="#00b8b0" />,
    title: "Teaching Methodology",
    points: [
      "Concept & application based learning",
      "Interactive & engaging lectures",
      "Focus on competitive & school exams",
    ],
  },
  {
    icon: <FaBookOpen size={24} color="#00b8b0" />,
    title: "Study Material",
    points: [
      "Well-researched & analysed",
      "Comprehensive & updated syllabus",
      "Meticulously designed content",
    ],
  },
  {
    icon: <FaClipboardCheck size={24} color="#00b8b0" />,
    title: "Regular Tests & Assessments",
    points: [
      "Error analysis & detailed reports",
      "Simulated tests for all levels",
      "Compete with the best",
    ],
  },
  {
    icon: <FaLightbulb size={24} color="#00b8b0" />,
    title: "Doubt Clearing System",
    points: [
      "1:1 sessions with subject experts",
      "Quick resolution for doubts",
    ],
  },
  {
    icon: <FaComments size={24} color="#00b8b0" />,
    title: "Feedback System",
    points: [
      "Regular performance updates",
      "Transparent communication",
      "Easy grievance redressal",
    ],
  },
  {
    icon: <FaUserFriends size={24} color="#00b8b0" />,
    title: "Personalized Attention",
    points: [
      "Small batch sizes for focused learning",
      "Individual tracking of progress & performance",
      "Doubt resolution tailored to student needs",
    ],
  },
];

const UspsSection = () => {
  return (
    <section className="usps-section">
      <h2 className="usps-heading">SLP Advantage</h2>
      <p className="usps-subheading">
        Stay ahead with all-round performance in your chosen stream
      </p>

      <div className="usps-grid">
        {usps.map((usp, index) => (
          <div key={index} className="usp-card">
            <div className="usp-icon">{usp.icon}</div>
            <h3 className="usp-title">{usp.title}</h3>
            <ul className="usp-points">
              {usp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UspsSection;
