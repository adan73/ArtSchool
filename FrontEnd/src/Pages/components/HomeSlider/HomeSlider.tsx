import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomeSlider.css";

import workshopImage from "../../../assets/workshop.jpg";
import galleryImage from "../../../assets/gallery.jpg";
import newsImage from "../../../assets/news.jpg";

const slides = [
  {
    image: workshopImage,
    title: "Art Workshops",
    description: "Discover our upcoming workshops and create something new.",
    buttonText: "View Workshops",
    link: "/classes",
  },
  {
    image: galleryImage,
    title: "Student Gallery",
    description: "Explore artwork and projects created by our students.",
    buttonText: "View Gallery",
    link: "/students",
  },
  {
    image: newsImage,
    title: "Latest News",
    description: "See the latest news and updates from our art school.",
    buttonText: "Read More",
    link: "/news",
  },
];

function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) =>
        current === slides.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="home-slider">

      <div
        className="slider-track"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>

            <img
              className="slider-image"
              src={slide.image}
              alt={slide.title}
            />

            <div className="slider-overlay"></div>

            <div className="slider-content">
              <h1>{slide.title}</h1>

              <p>{slide.description}</p>

              <Link className="slider-button" to={slide.link}>
                {slide.buttonText}
              </Link>
            </div>

          </div>
        ))}
      </div>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}

export default HomeSlider;