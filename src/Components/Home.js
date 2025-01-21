import "../Components/Home.css";
import React, { useEffect } from "react";
import s1 from "../Components/Assets/Carousal/slide-1.jpg";
import s2 from "../Components/Assets/Carousal/slide-2.jpg";
import s3 from "../Components/Assets/Carousal/slide-3.jpg";
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
        }, 4000);
    
        return () => clearInterval(interval); // Clean up the interval on component unmount
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
    <h2>BUSINESS LEVERAGE US FOR ON DEMAND STAFFING AND DIGITAL MARKETINGSINESS AND TALENT </h2>
    
  </div>
</div>
<div className="slide">
  <img src={s3} alt="" />
  <div className="slide-text">
    <h2>TALENT LEVERAGE  US FOR FLEXIBLE WORK SCHEDULE AND CAREER ASSISTANCE</h2>
    
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
    </div>
  );
}
