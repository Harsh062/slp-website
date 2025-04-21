// app/results/page.js

import Image from "next/image";
import "./results.css"; // create this if you want to scope styling

const resultImages = [
  {
    name: "Result Image",
    imgSrc: "result1.jpeg",
  },
  {
    name: "Result Image",
    imgSrc: "result2.jpeg",
  },
  {
    name: "Result Image",
    imgSrc: "result3.jpeg",
  },
  {
    name: "Result Image",
    imgSrc: "result4.jpeg",
  },
  {
    name: "Result Image",
    imgSrc: "result5.jpeg",
  },
  {
    name: "Result Image",
    imgSrc: "result6.jpeg",
  },
  {
    name: "Result Image",
    imgSrc: "result7.jpeg",
  },
  {
    name: "Result Image",
    imgSrc: "result8.jpeg",
  },
  {
    name: "Result Image",
    imgSrc: "result9.jpeg",
  },
  {
    name: "Result Image",
    imgSrc: "result10.jpeg",
  },
];

export default function ResultsPage() {
  return (
    <section className="results-section">
      <h1 className="results-heading">Our Star Performers</h1>
      <div className="results-grid">
        {resultImages.map((img, index) => (
          <div className="result-card" key={index}>
            <Image
              src={`/results/${img.imgSrc}`}
              alt={`Result ${index + 1}`}
              width={500}
              height={600}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
