import "./Business.css";
import blogImg from "../Assets/svg/Blog-img-1.svg";
import card1 from "../Assets/Business-page/card-1.png";
import card2 from "../Assets/Business-page/card-2.png";
import card3 from "../Assets/Business-page/card-3.png";
export function Business() {
  return (
    <div className="business-page">
      {/* Start of Business Front Detail Section */}
      <div className="bus-title">Business</div>
      <div className="img-content">
        <div className="blog-slogan">
          <div className="blog-text-box">
            <div className="blog-line-1"> Leverage us</div>
            <div className="blog-line-2">for your</div>
            <div className="blog-line-3">Growth</div>
          </div>
        </div>
        <div className="img-detail">
          <div className="blog-img"> <img src={blogImg} alt="" /></div>
          <div className="blog-detail">
            <p>
              We partner with you to understand your business needs, providing
              on-demand staffing and digital marketing solutions.
            </p>
          </div>
        </div>
      </div>
      {/* End of Business Front Detail Section */}
      {/* Start of Business Content Section */}
      <div className="bus-blog-card-back">
        <div className="bus-blog-card">
          <div className="bus-card-img">
            <div className="card-img">
              <img src={card1} alt="" />

              <p>
                Collaborate with business owners to lower operating expenses and
                boost sales through effective social media marketing strategies
              </p>
            </div>
          </div>
          <div className="static-card-title">Business Consultation</div>
        </div>
        <div className="bus-blog-card">
          <div className="bus-card-img">
            <div className="card-img">
              <img src={card2} alt="" />
              <p>
                Innovative on-demand staffing solutions through the Hussme
                Hiring platform, connecting businesses with part-time talent as
                needed
              </p>
            </div>
          </div>
          <div className="static-card-title">
            On Demanding Staffing Services
          </div>
        </div>
        <div className="bus-blog-card">
          <div className="bus-card-img">
            <div className="card-img">
              <img src={card3} alt="" />
              <p>
                Enhance your website and leverage social platforms (Facebook,
                Instagram, X) for branding and lead generation to drive business
                growth
              </p>
            </div>
          </div>
          <div className="static-card-title">Social Media Marketing</div>
        </div>
      </div>
      {/* End of Business Content Section */}
    </div>
  );
}
