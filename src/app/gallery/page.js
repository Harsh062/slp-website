// app/results/page.js

import Image from "next/image";
import "./gallery.css"; // create this if you want to scope styling

const resultImages = [
  {
    name: "Gallery Image",
    imgSrc: "gallery1.jpeg",
  },
  {
    name: "Gallery Image",
    imgSrc: "gallery2.jpeg",
  },
  {
    name: "Gallery Image",
    imgSrc: "gallery3.jpeg",
  },
  {
    name: "Gallery Image",
    imgSrc: "gallery4.jpg",
  },
  {
    name: "Gallery Image",
    imgSrc: "gallery5.jpg",
  },
  {
    name: "Gallery Image",
    imgSrc: "gallery6.jpeg",
  },
  {
    name: "Gallery Image",
    imgSrc: "gallery7.jpeg",
  },
  {
    name: "Gallery Image",
    imgSrc: "gallery8.jpeg",
  },
  {
    name: "Gallery Image",
    imgSrc: "gallery9.jpeg",
  },
];

export default function ResultsPage() {
  return (
    <section className="gallery-section">
      <h1 className="gallery-heading">Life @ SLP</h1>
      <div className="gallery-grid">
        {resultImages.map((img, index) => (
          <div className="gallery-card" key={index}>
            <Image
              src={`/gallery/${img.imgSrc}`}
              alt={`Gallery ${index + 1}`}
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
