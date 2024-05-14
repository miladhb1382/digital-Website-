import { useEffect, useState } from "react";
import "./Carousel.css";

export default function Carousel({
  width = 900,
  height = 600,
  images,
  animation = "",
}) {
  const ImageSlider = ({ images }) => {
    const [animation, setanimation] = useState("");
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(
      function () {
        setanimation("translate-animation");
      },
      [currentSlide]
    );
    const handlePreviousSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? images.length - 1 : prevSlide - 1
      );
      setanimation("");
    };
    setInterval(() => handleNextSlide(), 5000);
    const handleNextSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
      setanimation("");
    };

    return (
      <div
        style={{ width, height, margin: "auto", overflow: "hidden", animation }}
      >
        <div className="slider">
          <button onClick={handlePreviousSlide} className="prev-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
              style={{ width: "60%", height: "60%" }}
            >
              <path
                fill-rule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <img
            src={images[currentSlide]}
            alt="Slide"
            className={`image ${animation}`}
            style={{ width, height }}
          />

          <button onClick={handleNextSlide} className="next-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
              style={{ width: "60%", height: "60%" }}
            >
              <path
                fill-rule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <ImageSlider images={images} />
    </div>
  );
}
