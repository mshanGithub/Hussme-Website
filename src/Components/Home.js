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

export function Home() {
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
  return (
    <div className="home">
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
    </div>
  );
}
