import "./Contactus.css";
export function ContactUs() {
  return (
    <div className="contactus-page">
      <div className="contact-title">Contact Us</div>
      <div className="contact-intro">
        <div className="left-contact"></div>
        <div className="right-contact">
          <div className="contact-slogan">
            <div className="line-1">Get in</div>
            <div className="line-2">Touch <span>!</span></div>
          </div>
          <div className="contact-detail">
            Have questions or need assistance? We're here to help! Reach out to
            us for inquiries about franchise opportunities, application support,
            or any other queries. Let’s build your franchise journey together!
          </div>
          <div className="contact-button">Contact Us</div>
        </div>
      </div>
    </div>
  );
}
