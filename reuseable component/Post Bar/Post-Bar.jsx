import "./Post-Bar.css";
import { useRef } from "react";
export default function PostBar({
  galery,
  background = "white",
  color = "black",
  title = "trend",
}) {
  const containerRef = useRef(null);
  const ClickRightHandler = () => {
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const scrollDistance = containerWidth * 0.11; // Scroll 11% of the client screen width
    container.scrollLeft += scrollDistance;
  };

  const ClickLeftHandler = () => {
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const scrollDistance = containerWidth * 0.11; // Scroll 11% of the client screen width
    container.scrollLeft -= scrollDistance;
  };
  return (
    <div className="container" style={{ backgroundColor: background }}>
      <div className="Title">
        <h1>{title}</h1>
      </div>
      <div className="Post-Group">
        <button className="next-button" onClick={ClickRightHandler}>
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

        <button className="prev-button" onClick={ClickLeftHandler}>
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
        <div className="Post-photo" ref={containerRef}>
          {galery.map((movie, index) => (
            <div>
              <img
                key={index}
                src={movie}
                alt="گلادیاتور"
                title="گلادیاتور"
                className="o-image-0-1-174 rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
/*const images = [
  "https://static.namava.ir/Content/Upload/Images/de502ea2-dc31-4418-963d-1aa2c1e501e2.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294",
  "https://static.namava.ir/Content/Upload/Images/de502ea2-dc31-4418-963d-1aa2c1e501e2.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294 1x,https://static.namava.ir/Content/Upload/Images/de502ea2-dc31-4418-963d-1aa2c1e501e2.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=400&amp;h=588 2x",
  "https://static.namava.ir/Content/Upload/Images/80088835-717d-43ee-b8e2-88374c576e8d.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294",
  "https://static.namava.ir/Content/Upload/Images/34823a2c-8a99-433e-bace-3e509235cf48.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294",
  "https://static.namava.ir/Content/Upload/Images/605efa13-a9a0-46d1-8122-12d78a5e467c.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294",
  "https://static.namava.ir/Content/Upload/Images/1d14ed8f-04ac-486c-ba81-2e8180ed7651.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294",
  "https://static.namava.ir/Content/Upload/Images/de502ea2-dc31-4418-963d-1aa2c1e501e2.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294",
  "https://static.namava.ir/Content/Upload/Images/de502ea2-dc31-4418-963d-1aa2c1e501e2.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294 1x,https://static.namava.ir/Content/Upload/Images/de502ea2-dc31-4418-963d-1aa2c1e501e2.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=400&amp;h=588 2x",
  "https://static.namava.ir/Content/Upload/Images/80088835-717d-43ee-b8e2-88374c576e8d.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294",
  "https://static.namava.ir/Content/Upload/Images/34823a2c-8a99-433e-bace-3e509235cf48.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294",
  "https://static.namava.ir/Content/Upload/Images/605efa13-a9a0-46d1-8122-12d78a5e467c.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294",
  "https://static.namava.ir/Content/Upload/Images/1d14ed8f-04ac-486c-ba81-2e8180ed7651.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294",
  "https://static.namava.ir/Content/Upload/Images/de502ea2-dc31-4418-963d-1aa2c1e501e2.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294",
  "https://static.namava.ir/Content/Upload/Images/de502ea2-dc31-4418-963d-1aa2c1e501e2.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294 1x,https://static.namava.ir/Content/Upload/Images/de502ea2-dc31-4418-963d-1aa2c1e501e2.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=400&amp;h=588 2x",
  "https://static.namava.ir/Content/Upload/Images/80088835-717d-43ee-b8e2-88374c576e8d.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294",
  "https://static.namava.ir/Content/Upload/Images/34823a2c-8a99-433e-bace-3e509235cf48.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294",
  "https://static.namava.ir/Content/Upload/Images/605efa13-a9a0-46d1-8122-12d78a5e467c.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294",
  "https://static.namava.ir/Content/Upload/Images/1d14ed8f-04ac-486c-ba81-2e8180ed7651.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=200&amp;h=294",
];*/
