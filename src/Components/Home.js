import "../Components/Home.css";
import React, { useEffect } from "react";
import s1 from "../Components/Assets/Carousal/slide-1.jpg";
import s2 from "../Components/Assets/Carousal/slide-2.jpg";
import s3 from "../Components/Assets/Carousal/slide-3.jpg";
import hand from "../Components/Assets/handshake.jpg";
import d1 from "../Components/Assets/Our Levers/digital.jpg";
import d2 from "../Components/Assets/Our Levers/dig-back.png";
import staff1 from "../Components/Assets/Our Levers/staff.jpg";
import staff2 from "../Components/Assets/Our Levers/staff-back.png";
import c1 from "../Components/Assets/Our Levers/consultation.jpg";
import c2 from "../Components/Assets/Our Levers/cons-back.png";
import play1 from "../Components/Assets/Our Levers/our-ser.png";
import play2 from "../Components/Assets/Our Levers/our-ser-back.png";
import b1 from "../Components/Assets/Bus-Talent/business-img.jpg";
import t1 from "../Components/Assets/Bus-Talent/talent-img.jpg";
import arrow from "./Assets/For-status/Arrow.svg";

export function Home() {
  // Function For Carousal auto slide change
  useEffect(() => {
    let counter = 1;
    const interval = setInterval(() => {
      const radio = document.getElementById("radio" + counter);
      if (radio) {
        radio.checked = true;
      }
      counter++;
      if (counter > 3) {
        counter = 1;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Function for work status count increase
  window.onload = () => {
    const nums = document.querySelectorAll(".count");
    const container = document.querySelector(".work-status-container");

    // Ensure container exists before adding the scroll event
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
              <div className="card">
                <div className="default-content">
                  <div className="card-heading">
                    <h2>Digital Marketing</h2>
                  </div>
                  <div className="default-circle">
                    <img src={d1} alt="" />
                  </div>
                </div>
                <div className="hover-content">
                  <div className="hover-heading">
                    <h2>Digital Marketing</h2>
                  </div>
                  <div className="hover-circle">
                    <img src={d2} alt="" />
                  </div>
                  <div className="hover-describe">
                    <h4>
                      Enhance the website and utilize social platforms
                      (Facebook, Instagram, X) for branding and generating leads
                      for business growth.
                    </h4>
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
              <div className="card">
                <div className="default-content">
                  <div className="card-heading">
                    <h2>Staffing Services</h2>
                  </div>
                  <div className="default-circle">
                    <img src={staff1} alt="" />
                  </div>
                </div>
                <div className="hover-content">
                  <div className="hover-heading">
                    <h2>Staffing Services</h2>
                  </div>
                  <div className="hover-circle">
                    <img src={staff2} alt="" />
                  </div>
                  <div className="hover-describe">
                    <h4>
                      Innovative on-demand staffing solutions - Hussme Hiring
                      platform for business needs and flexible work schedule for
                      talents
                    </h4>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="default-content">
                  <div className="card-heading">
                    <h2>Consultation</h2>
                  </div>
                  <div className="default-circle">
                    <img src={c1} alt="" />
                  </div>
                </div>
                <div className="hover-content">
                  <div className="hover-heading">
                    <h2>Consultation</h2>
                  </div>
                  <div className="hover-circle">
                    <img src={c2} alt="" />
                  </div>
                  <div className="hover-describe">
                    <h4>
                      Streaming the business process for growth and bring in the
                      out of the box solution to reduce expenses
                    </h4>
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
              <button class="button-57" role="button">
                <span class="text">Package & Pricing</span>
                <span>Package & Pricing</span>
              </button>
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
              <button class="button-57" role="button">
                <span class="text">Package & Pricing</span>
                <span>Package & Pricing</span>
              </button>
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
      {/*Start of Home Blog */}

        <div className="blog-heading">
          Blog
        </div>
      <div className="blog-cards-container">
        <div className="blog-card">
          <div className="background-img cr-1">
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
              <div className="blog-title">Digital Marketing</div>
              <div className="last-box">
                <div className="more-info">Get more info</div>
                <div className="arrow arrow-1">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <div className="background-img cr-2">
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
              <div className="blog-title">Hire easily HR candidates in few seconds</div>
              <div className="last-box">
                <div className="more-info">Get more info</div>
                <div className="arrow arrow-1">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-card">
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
              <div className="blog-title">Get few solution to hire a best candidate </div>
              <div className="last-box">
                <div className="more-info">Get more info</div>
                <div className="arrow arrow-1">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-card">
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
              <div className="blog-title">Capitalize on low 
              hanging fruit</div>
              <div className="last-box">
                <div className="more-info">Get more info</div>
                <div className="arrow arrow-1">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/*End of Home Blog */}
    </div>
  );
}
