"use client";
import React, { useState } from "react";
import "./team.css";
import Image from "next/image";

const teamMembers = [
  {
    name: "Nishant Gandhi Sir",
    role: "Founder, Mentor – Maths & Physics",
    image: "/team/nishant_gandhi.jpeg",
    bio: `If there’s one person who can turn the fear of Maths and Physics into fascination, it’s Nishant Sir. A dynamic educator with a sharp mind and sharper chalk, he doesn’t just teach — he transforms the way students think. With over a decade of experience, his classes are the perfect blend of logic, laughter, and life lessons.

Whether it's a tricky integral or a mind-bending kinematics problem, he has a knack for breaking it down with real-life analogies and infectious energy. Students call him the “Human Calculator,” but he prefers being known as the guy who made Physics fun and Maths magical.

At the core of it all? His unwavering belief: “If taught right, every student can fall in love with learning.”
And thousands already have.`,
  },
  {
    name: "Dr. Kedar Pande Sir",
    role: "The Chemistry King",
    image: "/team/kedar_pande.png",
    bio: `With a remarkable teaching experience of over 13 years, Dr. Kedar Pandey Sir stands as a pillar of excellence in Chemistry at Stimulus Learning Point. His deep mastery of the subject, coupled with his innovative teaching methods, has earned him the esteemed title of Chemistry King.

Dr. Pandey's approach transcends conventional teaching. With a focus on conceptual clarity and exam-oriented strategies, he consistently empowers students to grasp complex chemical principles with ease. His ability to simplify intricate topics and inspire a deep understanding of Chemistry has led to his students achieving exceptional results in various competitive exams.

At Stimulus Learning Point, we are privileged to have Dr. Pandey’s expert guidance, shaping the future of countless students and helping them unlock their full potential in the world of Chemistry.`,
  },

  {
    name: "Nikhil Kamani Sir",
    role: "The Physics Wizard",
    image: "/team/nikhil_kamani.jpg",
    bio: `A passionate educator, an exceptional mentor, and a true expert in Physics – Nikhil Kamani Sir is the driving force behind our Physics excellence at Stimulus Learning Point. With an unwavering dedication to conceptual clarity and result-oriented teaching, he continues to inspire countless students to fall in love with Physics.

His deep understanding of the subject, paired with a student-friendly approach, makes complex topics not just simple but exciting. 

With over 8 years of teaching experience, Nikhil Sir has been instrumental in shaping the success of many students, making him a true leader in the field.

Behind every great result, there’s a great mentor. At Stimulus, we’re proud to have Nikhil Sir leading the charge in Physics.`,
  },

  {
    name: "Chandan Bhattad Sir",
    role: "The Mathematics Wizard & Mechanical Engineer",
    image: "/team/chandan_bhattad_2.jpg",
    bio: `With over 10 years of teaching experience and endless dedication, Chandan Bhattad Sir is a celebrated Mathematics educator at Stimulus Learning Point. Holding a background in Mechanical Engineering, he brings a unique perspective to his teaching, ensuring that students not only learn the concepts but also understand their real-world applications.

Known for his exceptional ability to build a solid foundation from basic to advanced levels, Chandan Sir specializes in guiding students from classes 8, 9, and 10 through their journey in Mathematics. His approach simplifies even the most complex topics, making them accessible and engaging. His dedication ensures students grasp core concepts and develop the confidence to tackle advanced problems.

At Stimulus Learning Point, we are proud to have Chandan Bhattad Sir, a Mechanical Engineer and Mathematics wizard, inspiring students to excel in their academic pursuits.`,
  },

  {
    name: "Rahul Jetwani Sir",
    role: "MHT-CET Mathematics Champion & Master of Short Tricks",
    image: "/team/rahul_jetwani.png",
    bio: `An exceptional Mathematics educator, Rahul Jetwani Sir is renowned for his expertise in simplifying complex mathematical concepts with amazing short tricks. His reputation as a MHT-CET Mathematics Champion speaks volumes about his deep understanding of the subject and his innovative approach to teaching.

Rahul Sir’s unique teaching style is built around time-saving shortcuts and strategies that not only boost students’ problem-solving speed but also enhance their understanding of key mathematical concepts. Whether it's for entrance exams like MHT-CET or IIT JEE, his short tricks help students master even the most challenging topics with ease and confidence.

At Stimulus Learning Point, we are privileged to have Rahul Sir lead the way in Mathematics, preparing students for success through expert guidance, efficient techniques, and empowering shortcuts.`,
  },

  {
    name: "Asma Deshmukh Mam",
    role: "The Science Expert in Chemistry & Biology",
    image: "/team/asma_deshmukh.jpeg",
    bio: `With over 12 years of teaching experience, Asma Deshmukh Mam is a Science expert specializing in Chemistry and Biology at Stimulus Learning Point. Her extensive expertise is complemented by her experience in paper evaluation, making her an invaluable resource for students preparing for their board exams.

Asma Mam not only helps students understand complex scientific concepts but also teaches them the crucial skill of how to write board papers effectively. Her in-depth understanding of the evaluation process ensures that students learn the best ways to present their answers, improving their performance in exams.

At Stimulus Learning Point, we are proud to have Asma Deshmukh Mam guide students toward academic success in Chemistry and Biology, with over a decade of experience, unmatched dedication, and expert insights into the board exam writing process.`,
  },

  {
    name: "Deepti Kulkarni Mam",
    role: "The Biology Expert",
    image: "/team/deepti_kulkarni.jpg",
    bio: `With over 10 years of teaching experience, Deepti Kulkarni Mam is a Biology expert at Stimulus Learning Point. Her passion for Biology is contagious, and she has an exceptional ability to make complex biological concepts both engaging and understandable for students.

Deepti Mam’s unique approach combines thorough explanations with real-world applications, helping students not only master the subject but also develop a genuine love for Biology. Her dedication and student-friendly methods make her a favorite among students, inspiring them to explore the wonders of life sciences.

At Stimulus Learning Point, we are proud to have Deepti Kulkarni Mam guiding students toward academic success and fostering a passion for Biology.`,
  },

  {
    name: "Irfan Khan Sir",
    role: "The MHT-CET Physics Expert",
    image: "/team/irfan_khan.jpg",
    bio: `Known for his sharp conceptual clarity and strategic approach, Irfan Khan Sir is a dedicated Physics expert at Stimulus Learning Point, specializing in MHT-CET preparation. His teaching style focuses on simplifying complex topics, building strong fundamentals, and boosting problem-solving speed.

Irfan Sir's commitment to student success and exam-oriented teaching makes him a trusted guide for those aiming to crack MHT-CET Physics with confidence.

At Stimulus, we are proud to have Irfan Khan Sir on board—mentoring students with precision, passion, and a deep love for Physics.`,
  },

  {
    name: "Shruti Rathi Mam",
    role: "Biology & Chemistry Expert | Student Favorite",
    image: "/team/shruti_rathi.jpg",
    bio: `With a deep passion for teaching and a knack for simplifying complex concepts, Shruti Rathi Ma’am has been guiding students with excellence in Biology and Chemistry for years. Her engaging style, personal attention to each student, and real-life connect with science make her one of the most loved and respected teachers among students.

Whether it’s preparing for board exams or laying the foundation for competitive entrances, Shruti Ma’am ensures every student not only understands the subject but also enjoys learning it!`,
  },

  {
    name: "Sakshi Deshmukh Mam",
    role: "Science Expert",
    image: "/team/sakshi_deshmukh.jpeg",
    bio: `We’re proud to introduce Sakshi Deshmukh Mam, a motivated Biochemistry graduate with both MSc and BSc degrees. She brings with her a solid foundation in molecular biology, bioinformatics, and advanced instrumentation.

With strong leadership skills, effective communication, and practical project experience, Sakshi Mam is passionate about simplifying complex scientific concepts for students and inspiring curiosity in young minds.

She’s eager to contribute to academic excellence and grow with our dynamic team. Let’s give her a warm welcome to the Stimulus Learning Point family!`,
  },
  {
    name: "Nilesh Bajaj Sir",
    role: "Coding Expert 💻",
    image: "/team/nilesh_bajaj.jpeg",
    bio: `We’re thrilled to welcome Nilesh Bajaj Sir to the Stimulus Learning Point family!
With 13+ years of experience in the field of Computer Science & Coding, he brings unmatched expertise in programming, logic building, algorithms, and modern tech trends.

Known for his student-friendly approach and innovative teaching techniques, Nilesh Sir is all set to make coding fun, clear, and career-building for our students!

Let’s give a warm welcome to our Coding Champion!`,
  },
  {
    name: "Asmita Thakur Mam",
    role: "The Heart of Our Back Office",
    image: "/team/asmita_thakur.jpg",
    bio: `As the Admin Head at Stimulus Learning Point, Asmita Thakur Mam ensures smooth administrative operations, conducts tests, and coordinates with students and parents. Known as the heart and soul of the back office, her exceptional organizational skills and dedication keep everything running efficiently, supporting both students and faculty.`,
  },
];

export default function OurTeamPage() {
  const [expanded, setExpanded] = useState(
    Array(teamMembers.length).fill(false)
  );

  const toggleReadMore = (idx) => {
    setExpanded((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  return (
    <section className="team-section">
      <h1 className="team-heading">
        <span className="highlighted-word">Meet</span> Our Faculty
      </h1>
      <div className="team-grid">
        {teamMembers.map((member, idx) => (
          <div className="team-card" key={idx}>
            <Image
              src={member.image}
              alt={member.name}
              width={200}
              height={280}
              className="team-photo"
            />
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-bio">
              {expanded[idx]
                ? member.bio
                : member.bio.slice(0, 120) +
                  (member.bio.length > 120 ? "..." : "")}
            </p>
            {member.bio.length > 120 && (
              <button
                className="read-more-toggle"
                onClick={() => toggleReadMore(idx)}
              >
                {expanded[idx] ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
