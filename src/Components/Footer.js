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
        <div className="col-4"></div>
      </div>
      <div className="copyright">
        
        <hr />
        <h4>©All Copyrights 2025 by Husssme</h4>
      </div>
    </div>
  );
}
