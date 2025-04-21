import React from "react";

const courses = [
  {
    title: "Engineering",
    items: [
      "Two Year First Step Integrated Classroom Course for JEE (Main and Advanced)",
      "One Year Second Step Integrated Classroom Course for JEE (Main and Advanced)",
    ],
    link: "#",
  },
  {
    title: "Medical",
    items: [
      "Two Year Integrated Classroom Course for NEET",
      "One Year XII cum Medical Classroom Course for NEET",
    ],
    link: "#",
  },
  {
    title: "Foundation",
    items: [
      "One Year Integrated Classroom Course for Olympiads, NTSE & Class X",
      "Two Year Integrated Classroom Course for Olympiads, NTSE & Class IX to X",
    ],
    link: "#",
  },
];

const PopularCourses = () => {
  return (
    <section className="courses-section">
      <h2 className="courses-heading">Popular Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="course-title">{course.title}</div>
            <ul className="course-list">
              {course.items.map((item, i) => (
                <li key={i}>
                  <span className="bullet">•</span>
                  <span className="course-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
