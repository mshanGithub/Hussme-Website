import "./Contactus.css";
import Swal from "sweetalert2";
export function ContactUs() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f37942a9-2fbe-4fe7-a9f8-98257be73a2f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message sent successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div className="contactus-page">
      <div className="contact-title">Contact Us</div>
      <div className="contact-intro">
        <div className="left-contact"></div>
        <div className="right-contact">
          <div className="contact-slogan">
            <div className="contact-line-1">Get in</div>
            <div className="contact-line-2">
              Touch <span className="symbol-color">!</span>
            </div>
          </div>
          <div className="contact-detail">
            Have questions or need assistance? We're here to help! Reach out to
            us for inquiries about franchise opportunities, application support,
            or any other queries. Let’s build your franchise journey together!
          </div>
          <div className="contact-button">Contact Us</div>
        </div>
      </div>
      <div className="contact-detail-container">
        <form className="contact-input-box" onSubmit={onSubmit}>
          <div className="contact-info-title">Contact Info</div>
          <div className="row">
            <div className="input-field">
              <label htmlFor="first-name">
                First Name<p className="s">*</p>
              </label>
              <input
                type="text"
                name="first-name"
                className="first-name"
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="last-name">
                Last Name<p className="s">*</p>
              </label>
              <input
                type="text"
                name="last-name"
                className="last-name"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" className="phone" required />
            </div>
            <div className="input-field">
              <label htmlFor="email">
                Email <p className="s">*</p>
              </label>
              <input type="text" name="email" className="email" required />
            </div>
          </div>
          <div className="message-box">
            <div className="inner-box">
              <label htmlFor="message">Leave Your Message</label>
              <textarea className="message" name="meassage" required />
            </div>
          </div>
          <div className="button-row">
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button type="reset" className="reset-button">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
