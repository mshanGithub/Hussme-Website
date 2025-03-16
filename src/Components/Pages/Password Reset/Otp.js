import "../Password Reset/Otp.css";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
export function Otp() {
  const [otp, setOtp] = useState("");
  return (
    <div className="otp-page">
      <div className="otp-input-box">
        <div className="otp-icn"></div>
        <div className="otp-text">Enter Verification Code</div>
        <form action="" className="otp-form">
          <div className="otp-input">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <button type="submit" className="otp-reset-button">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}
