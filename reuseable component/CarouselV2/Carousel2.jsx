import React, { useState } from "react";
import "./Carousel2.css";
const image = ["./img-1.jpg", "./img-2.jpg", "./bg.jpg"];

export default function TranslateCarousel({ images = image }) {
  const [click, setClick] = useState(0);

  const clickLeftHandler = () => {
    setClick((prevClick) => {
      if (prevClick === 0) {
        return -100 * (images.length - 1);
      } else {
        return prevClick + 100;
      }
    });
  };

  const clickRightHandler = () => {
    setClick((prevClick) => {
      if (prevClick === -100 * (images.length - 1)) {
        return 0;
      } else {
        return prevClick - 100;
      }
    });
  };

  return (
    <div style={{ padding: "30px" }}>
      <div className="section">
        <button className="next-button" onClick={clickRightHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
            style={{ width: "60%", height: "60%" }}
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button className="prev-button" onClick={clickLeftHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
            style={{ width: "60%", height: "60%" }}
          >
            <path
              fillRule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="carousel">
          {images.map((item, index) => (
            <div key={index} className="window">
              <img
                src={item}
                alt={`Image ${index}`}
                style={{
                  transform: `translateX(${click}%)`,
                  transition: "transform 0.3s ease-in",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
