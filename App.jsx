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
          <a href="">WatchList</a>
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
  const [quantity, setQuantity] = useState(1);
  const [saved, setSaved] = useState(false);
  const [color, setColor] = useState(0);
  const [showFooter, setshowFooter] = useState(0);
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
  const quantityIncrease = () => {
    setQuantity((i) => i + 1);
  };
  const quantityDecrease = () => {
    setQuantity((i) => (i > 1 ? i - 1 : i));
  };
  const saveHandler = () => {
    setSaved(!saved);
  };
  const showFooterHandler = (id) => {
    setshowFooter(id);
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
              height={carousel ? null : "930px"}
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
            flexFlow: "row",
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
            <h3>Hot Categories</h3>
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

            <div className="trend-items">
              <PostBar galery={trending} title="Trending This Week" />
            </div>
            <div className="res-detail">
              <div className="select-one">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <img
                    className="select-one-img"
                    src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-1_ce07dbcd-242e-4c63-bf2f-8ec9269e692d_533x.png?v=1695102014"
                  />
                </div>
                <div>
                  <div className="select-one-detail">
                    <h1
                      style={{
                        fontSize: "calc(var(--font-heading-size) * 4rem)",
                      }}
                    >
                      iPhone 12 Pro Max
                    </h1>
                    <div style={{ display: "flex", gap: "9px" }}>
                      <dd style={{ textDecoration: "line-through" }}>
                        $270.00
                      </dd>
                      <dt></dt>
                      <dd>$120.00</dd>
                    </div>
                    <div>Only 18 items in stock! </div>
                    <label>Color:</label>
                    <span>Black</span>
                    <div className="color-product">
                      <img
                        src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-1_ce07dbcd-242e-4c63-bf2f-8ec9269e692d_533x.png?v=1695102014"
                        style={
                          color === 0 ? { border: "1px solid black" } : null
                        }
                      />
                      <img src="https://suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-8_b0bf22a5-beaa-4b10-ac15-b36a8240413c.png?v=1695102014" />
                      <img src="https://suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-30_34d3d07a-f083-4b0e-bbab-5611c0d83527.png?v=1695102014" />
                      <img src="https://suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-4_57e789df-b31e-4aa8-bd8d-79b293d60e81.png?v=1695102014" />
                    </div>

                    <label>Quantity:</label>
                    <div className="Quantity">
                      <span onClick={quantityDecrease}>
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
                            d="M5 12h14"
                          />
                        </svg>
                      </span>
                      <h5>{quantity}</h5>
                      <span onClick={quantityIncrease}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill={saved ? "blue" : "none"}
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </span>
                    </div>
                    <button className="buy-but">But it Now</button>
                    <p style={{ display: "flex", gap: "3px" }}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill={saved ? "blue" : "none"}
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={saveHandler}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                          />
                        </svg>
                      </span>
                      Add to WatchList
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="off-ones">
              <div>
                <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697631772/Croma%20Assets/CMS/PCP/Mobile%20PCP/18-10-2023/HP_3Split_AppleAtCroma_iphone15_18oct2023_unwxqg.png?tr=w-1000" />
              </div>
              <div>
                <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713936214/Croma%20Assets/CMS/LP%20Page%20Banners/2024/New%20Launch%20%20Vivo%20T3X%205G/PCP_2Split_Mobile_VivoT3x_23April2024_aeur8y.png?tr=w-1000" />
              </div>
            </div>
            <div className="mobile-border">
              <Carousel
                images={mobile}
                width="100%"
                animation={"animation"}
                height={null}
              />
            </div>
            <div className="products">
              <div className="image-container">
                <img
                  className="bold-one"
                  src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-4_533x.png?v=1695101968"
                  alt="Image"
                />
                <button className="show-me">Show Me</button>
              </div>
              <div className="product-list">
                <div>
                  <img src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-18_f08dd9c2-28ac-4138-9142-50dd79fac133_533x.png?v=1695115479" />
                  <p>iphone 13 pro max</p>
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={saved ? "blue" : "none"}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      style={{ cursor: "pointer" }}
                      onClick={saveHandler}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                      />
                    </svg>
                    Add to WatchList
                  </span>
                  <span></span>
                </div>
                <div>
                  <img src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-1_ce07dbcd-242e-4c63-bf2f-8ec9269e692d_533x.png?v=1695102014" />
                  <p>Poco M5s 256GB</p>
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={saved ? "blue" : "none"}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      style={{ cursor: "pointer" }}
                      onClick={saveHandler}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                      />
                    </svg>
                    Add to WatchList
                  </span>
                  <span></span>
                </div>{" "}
                <div>
                  <img src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-8_a433ae50-76f5-41ed-8208-22c4ab889153_533x.png?v=1695057278" />
                  <p>Dual 150 2sim</p>
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={saved ? "blue" : "none"}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      style={{ cursor: "pointer" }}
                      onClick={saveHandler}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                      />
                    </svg>
                    Add to WatchList
                  </span>
                  <span></span>
                </div>
                <div>
                  <img src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-16_533x.png?v=1695115125" />
                  <p>nokia 150 2sim</p>
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={saved ? "blue" : "none"}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      style={{ cursor: "pointer" }}
                      onClick={saveHandler}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                      />
                    </svg>
                    Add to WatchList
                  </span>
                  <span></span>
                </div>
                <div>
                  <img src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-1_ce07dbcd-242e-4c63-bf2f-8ec9269e692d_533x.png?v=1695102014" />
                  <p>iPhone 13 Not Active</p>
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={saved ? "blue" : "none"}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      style={{ cursor: "pointer" }}
                      onClick={saveHandler}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                      />
                    </svg>
                    Add to WatchList
                  </span>
                  <span></span>
                </div>{" "}
                <div>
                  <img src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-18_f08dd9c2-28ac-4138-9142-50dd79fac133_533x.png?v=1695115479" />
                  <p>Sumsung Galaxcy A54</p>
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={saved ? "blue" : "none"}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      style={{ cursor: "pointer" }}
                      onClick={saveHandler}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                      />
                    </svg>
                    Add to WatchList
                  </span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="read-blog">
              <section>
                <img src="//suruchi-demo-3.myshopify.com/cdn/shop/articles/8_533x.png?v=1695189806" />
                <div style={{ padding: "3px" }}>
                  <span>September 2023</span>
                  <h4>Wireless Charging Headphones on a Light Background.</h4>
                  <button>Read More</button>
                </div>
              </section>
              <section>
                <img src="//suruchi-demo-3.myshopify.com/cdn/shop/articles/3_533x.png?v=1695188906" />
                <div style={{ padding: "3px" }}>
                  <span>September 2023</span>
                  <h4>To record a video using typically a digital camera</h4>
                  <button>Read More</button>
                </div>
              </section>
              <section>
                <img src="//suruchi-demo-3.myshopify.com/cdn/shop/articles/4_533x.png?v=1695188465" />
                <div style={{ padding: "3px" }}>
                  <span>September 2023</span>
                  <h4>Laptop computer with blue-pink and a blank screen.</h4>
                  <button>Read More</button>
                </div>
              </section>
            </div>
            <h4>Recommended for You</h4>
            <ul className="type">
              <li className="menu-type-active">Accessories</li>
              <li>Electronics</li>
              <li>Mobile phone</li>
              <li>Audio device</li>
              <li>Electronics Hardware</li>
            </ul>
            <div className="type-item">
              <section>
                <img src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-18_f08dd9c2-28ac-4138-9142-50dd79fac133_533x.png?v=1695115479" />
                <div>
                  <div>
                    <h5>Sky Night Airpod</h5>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "3px",
                        flexFlow: "row",
                      }}
                    >
                      <dd>$120.00</dd>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                          style={{
                            width: "30px",
                            cursor: "pointer",
                          }}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                          />
                        </svg>
                      </button>
                    </div>
                    <span>
                      <span className="circle"></span>stock: 80
                    </span>
                  </div>{" "}
                </div>
              </section>{" "}
              <section>
                <img src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-1_ce07dbcd-242e-4c63-bf2f-8ec9269e692d_533x.png?v=1695102014" />
                <div>
                  <div>
                    <h5>Blue Computer Mouse</h5>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "3px",
                        flexFlow: "row",
                      }}
                    >
                      <dd>$120.00</dd>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                          style={{
                            width: "30px",
                            cursor: "pointer",
                          }}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                          />
                        </svg>
                      </button>
                    </div>
                    <span>
                      <span className="circle"></span>stock: 80
                    </span>
                  </div>{" "}
                </div>
              </section>{" "}
              <section>
                <img src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-8_a433ae50-76f5-41ed-8208-22c4ab889153_533x.png?v=1695057278" />
                <div>
                  <div>
                    <h5>Gear Black Controller</h5>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "3px",
                        flexFlow: "row",
                      }}
                    >
                      <dd>$118.00</dd>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                          style={{
                            width: "30px",
                            cursor: "pointer",
                          }}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                          />
                        </svg>
                      </button>
                    </div>
                    <span>
                      <span className="circle"></span>stock: 80
                    </span>
                  </div>{" "}
                </div>
              </section>{" "}
              <section>
                <img src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-16_533x.png?v=1695115125" />
                <div>
                  <div>
                    <h5>Amazon 3rd Speaker</h5>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "3px",
                        flexFlow: "row",
                      }}
                    >
                      <dd>$100.00</dd>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                          style={{
                            width: "30px",
                            cursor: "pointer",
                          }}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                          />
                        </svg>
                      </button>
                    </div>
                    <span>
                      <span className="circle"></span>stock: 80
                    </span>
                  </div>{" "}
                </div>
              </section>{" "}
              <section>
                <img src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-1_ce07dbcd-242e-4c63-bf2f-8ec9269e692d_533x.png?v=1695102014" />
                <div>
                  <div>
                    <h5>Apple Watch Series</h5>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "3px",
                        flexFlow: "row",
                      }}
                    >
                      <dd>$90.00</dd>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                          style={{
                            width: "30px",
                            cursor: "pointer",
                          }}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                          />
                        </svg>
                      </button>
                    </div>
                    <span>
                      <span className="circle"></span>stock: 80
                    </span>
                  </div>{" "}
                </div>
              </section>{" "}
              <section>
                <img src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-4_533x.png?v=1695101968" />
                <div>
                  <div>
                    <h5>Sky Night Airpod</h5>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "3px",
                        flexFlow: "row",
                      }}
                    >
                      <dd>$120.00</dd>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                          style={{
                            width: "30px",
                            cursor: "pointer",
                          }}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                          />
                        </svg>
                      </button>
                    </div>
                    <span>
                      <span className="circle"></span>stock: 80
                    </span>
                  </div>{" "}
                </div>
              </section>{" "}
              <section>
                <img src="//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-18_f08dd9c2-28ac-4138-9142-50dd79fac133_533x.png?v=1695115479" />
                <div>
                  <div>
                    <h5>Apple Watch Series</h5>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "3px",
                        flexFlow: "row",
                      }}
                    >
                      <dd>$90.00</dd>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                          style={{
                            width: "30px",
                            cursor: "pointer",
                          }}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                          />
                        </svg>
                      </button>
                    </div>
                    <span>
                      <span className="circle"></span>stock: 80
                    </span>
                  </div>{" "}
                </div>
              </section>
            </div>
          </div>
        </div>
      </body>
      <footer>
        <div className="footer">
          <div>
            <h3>
              About Us{" "}
              {showFooter !== 1 ? (
                <span onClick={() => showFooterHandler(1)}>+</span>
              ) : (
                <span onClick={() => showFooterHandler(0)}>-</span>
              )}
            </h3>
            <p
              style={
                showFooter === 1
                  ? {
                      display: "flex",
                    }
                  : null
              }
            >
              The exciting contemporary brand Suruchi is known for its attention
              to detail and premium graphics.
            </p>
          </div>
          <div>
            <h3>
              Quick Links{" "}
              {showFooter !== 2 ? (
                <span onClick={() => showFooterHandler(2)}>+</span>
              ) : (
                <span onClick={() => showFooterHandler(0)}>-</span>
              )}
            </h3>
            <p style={showFooter == 2 ? { display: "flex" } : null}>
              <span>Find Store location</span>
              <span>Privacy Palicy</span>
              <span>Refund Policy</span>
              <span>Terms of Service</span>
            </p>
          </div>
          <div>
            <h3>
              Company
              {showFooter !== 3 ? (
                <span onClick={() => showFooterHandler(3)}>+</span>
              ) : (
                <span onClick={() => showFooterHandler(0)}>-</span>
              )}
            </h3>
            <p style={showFooter == 3 ? { display: "flex" } : null}>
              <span>my account</span>
              <span>Cart</span>
              <span>Product Compare</span>
              <span>About Us</span>
            </p>
          </div>
          <div>
            <h3>
              Newsletter{" "}
              {showFooter !== 4 ? (
                <span onClick={() => showFooterHandler(4)}>+</span>
              ) : (
                <span onClick={() => showFooterHandler(0)}>-</span>
              )}
            </h3>
            <p style={showFooter == 4 ? { display: "flex" } : null}>
              Write your email first to know about any information
            </p>
            <input
              style={showFooter == 4 ? { display: "flex" } : null}
              type="text"
              placeholder="email..."
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.5rem",
            backgroundColor: "#e5e5e5",
          }}
        >
          <p>This website is © by Hamish.</p>
        </div>
      </footer>
    </html>
  );
}
const images = [
  "https://www.technolife.ir/image/banner_CenterTripletBanners_W6KtbG_bc11823b-3aeb-4758-b4b3-b7fc2b755914.png",
  "https://www.technolife.ir/image/banner_CenterTripletBanners_61Ndtp_38f9a56b-7d09-4701-9d73-13ad63342c4e.png",
  "https://www.technolife.ir/image/banner_CenterTripletBanners_0GpdwQ_12623038-fb8b-4aef-8c0f-d5b7c257d4d6.png",
];

const trending = [
  "//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-18_f08dd9c2-28ac-4138-9142-50dd79fac133_533x.png?v=1695115479",
  "//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-1_ce07dbcd-242e-4c63-bf2f-8ec9269e692d_533x.png?v=1695102014",
  "//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-16_533x.png?v=1695115125",
  "//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-30_b6b76be8-07ef-4c38-9176-8946a02d2f69_533x.png?v=1695057278",
  "//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-26_2ab3c6c4-dfb8-44a4-afda-328fa9c7f7e4_533x.png?v=1695099271",
  "//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-8_a433ae50-76f5-41ed-8208-22c4ab889153_533x.png?v=1695057278",
  "//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200_533x.png?v=1695101968",
  "//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-18_f08dd9c2-28ac-4138-9142-50dd79fac133_533x.png?v=1695115479",
  "//suruchi-demo-3.myshopify.com/cdn/shop/files/1200_1200-1_ce07dbcd-242e-4c63-bf2f-8ec9269e692d_533x.png?v=1695102014",
];
const mobile = [
  "https://dkstatics-public.digikala.com/digikala-adservice-banners/0933af3c46fa1eee9cc8d13c1f9c6d84999db3d6_1706601234.jpg?x-oss-process=image/quality,q_95",
  "https://dkstatics-public.digikala.com/digikala-adservice-banners/9c5f38ba091036e3e93f1109aa3f2075e317d221_1709626152.jpg?x-oss-process=image/quality,q_95",
  "https://dkstatics-public.digikala.com/digikala-adservice-banners/27a2380685ac70c5f801eeedbab9d28976d96f4b_1709365740.jpg?x-oss-process=image/quality,q_95",
  "https://dkstatics-public.digikala.com/digikala-adservice-banners/621c0d540c8d35ea5b41040d245e74a820b06414_1714210025.jpg?x-oss-process=image/quality,q_95",
];
