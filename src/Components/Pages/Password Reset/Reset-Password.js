import { Link } from "react-router-dom";
import "../Password Reset/Reset-Password.css";

export function Reset() {
  return (
    <>
      <div className="reset-page">
        <div className="reset-page-1">
          <div className="page-1-icn"></div>
          <div className="forgot-text">Forgot Password?</div>
          <form className="forgot-form" action="">
            <label htmlFor="reset-email">Email</label>
            <input type="email" require/>
            <button type="submit" className="forgot-reset-button">
              Reset Password
            </button>
          </form>
          <Link className="back-page" to="/login">
            Back to login
          </Link>
        </div>
        <div className="reset-page-2">
          <div className="page-2-icn"></div>
          <div className="forgot-text">Check your email</div>
          <p>We sent a passsword reset otp to your mail</p>

          <button
            onClick={() => window.open("https://mail.google.com", "_blank")}
            className="forgot-reset-button"
          >
            Open email app
          </button>
          <Link to='/otp' className="next-button">Next</Link>

          <Link className="back-page" to="/login">
            Back to login
          </Link>
        </div>
      </div>
    </>
  );
}
