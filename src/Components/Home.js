import "../Components/Home.css";
import React, { useEffect } from "react";
import s1 from "../Components/Assets/Carousal/slide-1.jpg";
import s2 from "../Components/Assets/Carousal/slide-2.png";
import s3 from "../Components/Assets/Carousal/slide-3.png";
import hand from "../Components/Assets/Home-Header-Footer/handshake.jpg";
import d1 from "../Components/Assets/Our Levers/digital.jpg";
import staff1 from "../Components/Assets/Our Levers/staff.jpg";
import c1 from "../Components/Assets/Our Levers/consultation.jpg";
import play1 from "../Components/Assets/Our Levers/our-ser.png";
import play2 from "../Components/Assets/Our Levers/our-ser-back.png";
import b1 from "../Components/Assets/Bus-Talent/business-img.jpg";
import t1 from "../Components/Assets/Bus-Talent/talent-img.png";
import arrow from "./Assets/For-status/Arrow.svg";
import mes from "./Assets/Home-Header-Footer/message-color.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { AdvancedImage } from "@cloudinary/react";
export function Home() {
  const scrollRef = useRef(null);

  const scrollBlog = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  // Function For Carousal auto slide change
  useEffect(() => {
    let counter = 1;
    
    // Immediately change to the first slide
    document.getElementById("radio" + counter).checked = true;
    
    const interval = setInterval(() => {
      counter++;
      if (counter > 3) counter = 1;
      
      const radio = document.getElementById("radio" + counter);
      if (radio) {
        radio.checked = true;
      }
    }, 6000); // Keep interval duration
  
    return () => clearInterval(interval);
  }, []);
  
  // Function for work status count increase
  window.onload = () => {
    const nums = document.querySelectorAll(".count");
    const container = document.querySelector(".work-status-container");

    if (!container) {
      console.error("Container not found");
      return;
    }

    let test = false; // To ensure the function runs only once

    window.onscroll = () => {
      const containerPosition = container.offsetTop - window.innerHeight;

      if (window.scrollY >= containerPosition && !test) {
        nums.forEach((e) => {
          let start = 0;
          const end = parseInt(e.dataset.num, 10);

          const count = setInterval(() => {
            start++;
            e.textContent = start + (e.dataset.num.includes("+") ? "+" : "");
            if (start === end) {
              clearInterval(count);
            }
          }, 2000 / end);
        });
        test = true;
      }
    };
  };

  return (
    <div className="home">
      {/* Start of Carousal Section  */}
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <div className="slide first">
            <img src={s1} alt="" />
            <div className="slide-text">
              <h2>ONE PLATFORM FOR BUSINESS AND TALENT</h2>
            </div>
          </div>
          <div className="slide">
            <img src={s2} alt="" />
            <div className="slide-text">
              <h2>
                BUSINESS LEVERAGE US FOR ON DEMAND STAFFING AND DIGITAL
                MARKETINGSINESS AND TALENT{" "}
              </h2>
            </div>
          </div>
          <div className="slide">
            <img src={s3} alt="" />
            <div className="slide-text">
              <h2>
                TALENT LEVERAGE US FOR FLEXIBLE WORK SCHEDULE AND CAREER
                ASSISTANCE
              </h2>
            </div>
          </div>

          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
          </div>
        </div>
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
        </div>
      </div>
      {/* End of Carousal Section  */}
      {/* Start of Our Levers Section  */}
      <div className="our-levers">
        <div className="levers">
          <div className="tex">Our Levers</div>
        </div>
        <div className="row-container">
          <div className="img-container">
            <img src={hand} alt="" />
          </div>
          <div className="containers">
            <div className="container-1">
              <div class="our-card">
                <div class="card-inner">
                  <div class="card-front ddk">
                    <div class="circle">
                      <img
                        src={d1}
                        class="img-circle-1"
                        alt="Digital Marketing"
                      />
                    </div>
                    <h2 className="our-card-h2-front">Digital Marketing</h2>
                  </div>

                  <div class="card-back">
                    <div class="content">
                      <p>
                        Enhance the website and utilize social platforms
                        (Facebook, Instagram, X) for branding and generating
                        leads for business growth.
                      </p>
                    </div>
                    <div className="bottom-title">
                      <h2 className="our-card-h2-back">Digital Marketing</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="play-button">
              <div className="play-button-inner">
                <div className="play-button-front">
                  <img src={play2} alt="Front" />
                </div>
                <div className="play-button-back">
                  <img src={play1} alt="Back" />
                </div>
              </div>
            </div>

            <div className="container-2">
              <div class="our-card">
                <div class="card-inner">
                  <div class="card-front ssk">
                    <div class="circle">
                      <img
                        src={staff1}
                        class="img-circle-1"
                        alt="Staffing Services"
                      />
                    </div>
                    <h2 className="our-card-h2-front">Staffing Services</h2>
                  </div>

                  <div class="card-back">
                    <div class="content">
                      <p>
                        Innovative on-demand staffing solutions - Hussme Hiring
                        platform for business needs and flexible work schedule
                        for talents.
                      </p>
                    </div>
                    <div className="bottom-title">
                      <h2 className="our-card-h2-back">Staffing Services</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div class="our-card">
                <div class="card-inner">
                  <div class="card-front cck">
                    <div class="circle">
                      <img
                        src={c1}
                        class="img-circle-1"
                        alt="Digital Marketing"
                      />
                    </div>
                    <h2 className="our-card-h2-front">Consultation</h2>
                  </div>

                  <div class="card-back">
                    <div class="content">
                      <p>
                        Streaming the business process for growth and bring in
                        the out of the box solution to reduce expenses.
                      </p>
                    </div>
                    <div className="bottom-title">
                      <h2 className="our-card-h2-back">Consultation</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Our Levers Section  */}

      {/* Start of Business & Talent Card Section  */}
      <div className="bus-tal-container">
        <div className="business-container">
          <div className="business-img-section">
            <img src={b1} alt="" />
          </div>
          <div className="business-content-section">
            <div className="content-list">
              <div className="content-heading">Business</div>
              <ul>
                <li>Business profiling and plan</li>
                <li>Quick on-demand staff selection on contract basis</li>
                <li>Dedicated recruitment team for full-time hiring</li>
                <li>New hire online training</li>
                <li>Website hosting and regular maintenance</li>
                <li>Facebook, Instagram, and X marketing</li>
              </ul>
              <Link to="/business">
                <button class="button-57">
                  <span class="text">Package & Pricing</span>
                  <span>Package & Pricing</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Talent Card */}
        <div className="talent-container">
          <div className="talent-img-section">
            <img src={t1} alt="" />
          </div>
          <div className="talent-content-section">
            <div className="content-list">
              <div className="content-heading">Talent</div>
              <ul>
                <li>Individual profiling</li>
                <li>Flexible working schedule and on-demand rate</li>
                <li>Business reach out with the work request</li>
                <li>Online trainings and carrier assistance</li>
              </ul>
              <Link to="/talent">
                <button class="button-57">
                  <span class="text">Package & Pricing</span>
                  <span>Package & Pricing</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End of Business & Talent Card Section  */}

      {/* Start of Company Work Progress Count */}
      <div className="work-status-container">
        <div className="status-list">
          <div className="box">
            <div className="icon icon-1"></div>
            <div className="count" data-num="20+">
              5
            </div>
            <div className="progress-name">Projects Completed</div>
          </div>
          <div className="box">
            <div className="icon icon-2"></div>
            <div className="count" data-num="50">
              5
            </div>
            <div className="progress-name">Employer Solution</div>
          </div>
          <div className="box">
            <div className="icon icon-3"></div>
            <div className="count" data-num="100">
              5
            </div>
            <div className="progress-name">Job Seekers</div>
          </div>
          <div className="box">
            <div className="icon icon-4"></div>
            <div className="count" data-num="10+">
              1
            </div>
            <div className="progress-name">Happy Customers</div>
          </div>
        </div>
      </div>

      {/* End of Company Work Progress Count */}

      {/*Start of Home Contact card */}
      <div className="contact-card">
        <div className="left-detail">
          <div className="line-1">Trusted source for</div>
          <div className="line-2">business growth</div>
        </div>
        <div className="center-icn">
          <img src={mes} alt="" />
        </div>
        <div className="right-detail">
          <div className="line-1"> Have any questions?</div>
          <div className="line-2">
            Call Us <a href="tel:+1 803 803 9889">+1 803 803 9889</a>  
          </div>
        </div>
      </div>
      {/* End of  of Home Contact card */}

      {/*Start of Home Blog */}
      <div className="blog-heading">Blog</div>
      <div className="home-blog-section">
        <div className="home-blog-cards-container" ref={scrollRef}>
          <div className="home-blog-card">
            <div className="background-img cr-1" loading="lazy">
              <div className="btm-card">
                <div className="date-comment">
                  <div className="date">
                    <div className="date-icn"></div>
                    15,Feb, 2024
                  </div>
                  <div className="comment">
                    <div className="comment-icn"></div>
                    05, Comments
                  </div>
                </div>
                <div className="blog-title">
                  <Link to="/digital">
                    <h2>Digital Marketing</h2>
                  </Link>
                </div>
                <div className="last-box">
                  <div className="more-info">
                    <Link to="/digital">Get more info</Link>
                  </div>
                  <div className="arrow">
                    <Link to="/digital">
                      <img src={arrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-blog-card">
            <div className="background-img cr-2" loading="lazy">
              <div className="btm-card">
                <div className="date-comment">
                  <div className="date">
                    <div className="date-icn"></div>
                    18,Feb, 2024
                  </div>
                  <div className="comment">
                    <div className="comment-icn"></div>
                    09 Comments
                  </div>
                </div>
                <div className="blog-title">
                  <Link to="/digital">
                    <h2>Hire easily HR candidates in few seconds</h2>
                  </Link>
                </div>
                <div className="last-box">
                  <div className="more-info">
                    <Link to="/digital">Get more info</Link>
                  </div>
                  <div className="arrow ">
                    <Link to="/digital">
                      <img src={arrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-blog-card">
            <div className="background-img cr-3">
              <div className="btm-card">
                <div className="date-comment">
                  <div className="date">
                    <div className="date-icn"></div>
                    01,Aug, 2024
                  </div>
                  <div className="comment">
                    <div className="comment-icn"></div>
                    02 Comments
                  </div>
                </div>
                <div className="blog-title">
                  <Link to="/digital">
                    <h2>Get few solution to hire a best candidate </h2>
                  </Link>
                </div>
                <div className="last-box">
                  <div className="more-info">
                    <Link to="/digital">Get more info</Link>
                  </div>
                  <div className="arrow">
                    <Link to="/digital">
                      <img src={arrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-blog-card">
            <div className="background-img cr-4">
              <div className="btm-card">
                <div className="date-comment">
                  <div className="date">
                    <div className="date-icn"></div>
                    18,Mar, 2024
                  </div>
                  <div className="comment">
                    <div className="comment-icn"></div>
                    05 Comments
                  </div>
                </div>
                <div className="blog-title">
                  <Link to="/digital">
                    <h2>Capitalize on low hanging fruit</h2>
                  </Link>
                </div>
                <div className="last-box">
                  <div className="more-info">
                    <Link to="/digital">Get more info</Link>
                  </div>
                  <div className="arrow">
                    <Link to="/digital">
                      <img src={arrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="home-scroll-nav home-scroll-left"
          onClick={() => scrollBlog("left")}
        >
          ‹
        </button>
        <button
          className="home-scroll-nav home-scroll-right"
          onClick={() => scrollBlog("right")}
        >
          ›
        </button>
      </div>

      {/*End of Home Blog */}
    </div>
  );
}
