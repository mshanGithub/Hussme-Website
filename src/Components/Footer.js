import "../Components/Footer.css";
import logofooter from "../Components/Assets/Home-Header-Footer/hussme Logo-2 2-black.jpg";
import mobile from "../Components/Assets/Home-Header-Footer/envelope (1).png";
import mail from "../Components/Assets/Home-Header-Footer/outgoing.png";
export function Footer() {
  return (
    <div className="footer">
      <div className="footer-col">
        <div className="col-1">
          <img src={logofooter} alt="" />
          <p className="footer-para">
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
          <div className="contact-btn">
            <a href="">Contact Us</a>
          </div>

          <div className="cen-left">
            <div className="mobile">
              <img src={mobile} alt="" />
              <a href="tel:+1 803 803 9889">+1 803 803 9889</a>
            </div>
            <div className="mail">
              <img src={mail} alt="" />
              <a href="mailto:support@hussme.com"> support@hussme.com</a>
            </div>
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
      <div className="copyright">
        <hr />
        <div className="copy-container">
          <h4>©All Copyrights {new Date().getFullYear()} by Husssme</h4>
        </div>
      </div>
    </div>
  );
}
