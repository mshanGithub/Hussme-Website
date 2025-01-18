import "../Components/Footer.css";
import logofooter from "../Components/Assets/hussme Logo-2 2-black.jpg";
export function Footer() {
  return (
    <div className="footer">
      <div className="footer-col">
        <div className="col-1">
          <img src={logofooter} alt="" />
          <p>
            Streaming the business process for growth and bring in the out of
            the box solution to reduce expenses
          </p>
        </div>
        <div className="col-2">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Business</a>
            </li>
            <li>
              <a href="">Talent</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact US</a>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li>
              <a href="">Privacy policy</a>
            </li>
            <li>
              <a href="">Terms & Condition</a>
            </li>
            <li>
              <a href="">Partners</a>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <div className="cover">
            <div className="con"><div className="contact-btn">
              <a href="">Contact Us</a>
            </div></div>
            
            <div className="mobile">
              <a href="tel:+1 803 803 9889">+1 803 803 9889</a>
            </div>
            <div className="mail">
              <a href="mailto:support@hussme.com">support@hussme.com</a>
            </div>

            <div className="social-media">
              <a href="">
                <div className="x-icn"></div>
              </a>
              <a href="">
                <div className="insta-icn"></div>
              </a>
              <a href="">
                <div className="fb-icn"></div>
              </a>
              <a href="">
                <div className="linkedin-icn"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        {/* <div className="line"> jhbjh</div> */}
        <hr />
        <div className="copy-container"> <h4>©All Copyrights 2025 by Husssme</h4></div>
       
      </div>
    </div>
  );
}
