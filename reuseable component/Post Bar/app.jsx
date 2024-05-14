import { useEffect, useRef, useState } from "react";
import "./index.css";
import Carousel from "./reuseable component/CarouselV1/Carousel";
import PostBar from "./reuseable component/Post Bar/Post-Bar";
export default function App() {
  window.addEventListener("scroll", function () {
    var menubar = document.getElementById("menubar");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      menubar.style.opacity = "1";
      setCarousel(true);
    } else {
      menubar.style.opacity = "0.3";
    }
  });
  function Menuitem({ Type = "navList" }) {
    return (
      <ul
        className={Type}
        style={{
          transform: `translateX(-${transform}%)`,
          transition: "ease 0.9s",
          overflow: "hidden",
        }}
      >
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Category</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
      </ul>
    );
  }
  function Logo() {
    return (
      <div style={{ justifyContent: "flexstart" }}>
        <img src="images.jpg" className="logo" />
      </div>
    );
  }
  const [transform, setTransform] = useState(0);
  const [searchBut, setSearchBut] = useState(false);
  const [searchWidth, setSearchWidth] = useState("");
  const [closeTog, setCloseTog] = useState("");
  const [mode, setMode] = useState(false);
  const [modal, setModal] = useState(false);
  const [menuBar, setMenuBar] = useState(false);
  const menubarRef = useRef(null);
  const [carousel, setCarousel] = useState(false);
  const clickHandler = () => {
    setTransform(100);
    setSearchBut(true);
    setSearchWidth("searchBoxOpen");
    setCloseTog("closeTogActive");
  };
  const closeSearch = () => {
    setTransform(0);
    setSearchBut(false);
    setSearchWidth("");
    setCloseTog("");
  };
  const clickModeChange = () => {
    setMode(!mode);
  };
  const showMoadal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
    setMenuBar(false);
  };
  const showMenuBar = () => {
    setMenuBar(true);
  };

  return (
    <html>
      {modal ? (
        <div className="container-modal">
          <div className="backdrop" onClick={closeModal}></div>
          <form className="modal">
            <h3>Login</h3>
            <div>
              <label>Email:</label>
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <label>PassWord:</label>
              <input type="password" placeholder="password" />
            </div>

            <button>Login</button>
          </form>
        </div>
      ) : null}
      {menuBar ? (
        <div>
          <div className="backdrop" onClick={closeModal}></div>
          <div className="menu-bar">
            <Menuitem Type="mobile-menu" />
          </div>
        </div>
      ) : null}

      <header>
        <div className="menubar" id="menubar">
          <div style={{ position: "relative" }}>
            {searchBut ? (
              <div className="search-mobile">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-mobile-box"
                />
              </div>
            ) : null}
          </div>

          <div className="menu-content">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="menu-show"
                onClick={showMenuBar}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <Logo />
            </div>

            <nav style={{ overflow: "hidden" }} className="nav">
              <Menuitem />
            </nav>
            <div className="login">
              <span>
                <input
                  className={`searchBox ${searchWidth}`}
                  type="text"
                  placeholder="Search..."
                />
              </span>

              {searchBut ? (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`closeTog ${closeTog}`}
                    onClick={closeSearch}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
              ) : (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="searchbut"
                    onClick={clickHandler}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </span>
              )}
              {mode ? (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    onClick={clickModeChange}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                </span>
              ) : (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    onClick={clickModeChange}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                </span>
              )}

              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={showMoadal}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      <body>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <div className={carousel ? "carousel-change" : "carousel"}>
            <Carousel
              images={images}
              width="100%"
              height={carousel ? "690px" : "930px"}
              animation={"animation"}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "10px",
            justifyContent: "center",
            fontSize: "30px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateRows: "0.3fr 3fr",
              width: "100%",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: "3rem" }}>Hot Categories</h1>
            <div>
              <div className="hot-cat">
                <div>
                  <img
                    src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-2_28b9deb6-7b5c-4959-bdb4-b78578df8d29_1500x.png?v=1695119096"
                    alt="Mobile Phone"
                  />
                  <button>Cell Phone</button>
                </div>
                <div>
                  <img
                    src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-21_e4dfe043-a7b4-4ffb-a491-7a3e4bf7f64e_1500x.png?v=1695116932"
                    alt="Accessories"
                  />
                  <button>Accessories</button>
                </div>
                <div>
                  <img
                    src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-3_664d083b-ffe8-4d6d-bf0a-9c532ee00df1_1500x.png?v=1695118589"
                    alt="Electronics"
                  />
                  <button>Electronics</button>
                </div>
              </div>
            </div>
            <h1>Trending This Week</h1>
            <div>
              <PostBar />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
const images = [
  "./img-1.jpg",
  "./img-2.jpg",
  "./bg.jpg.jpg",
  // Add more image URLs here
];

const trending = [
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
];
