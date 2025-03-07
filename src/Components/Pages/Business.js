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
            <div className="blog-line-1">Leverage us</div>
            <div className="blog-line-2">for your</div>
            <div className="blog-line-3">Growth</div>
          </div>
        </div>
        <div className="img-detail">
          <div className="blog-img">
            <img src={blogImg} alt="" />
          </div>
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
      {/* Start of Package and pricing */}
      <div className="package-pricing">
        <div className="b-package-title">Package and Pricing</div>
        <div className="package-cards">
          <div className="price-card-1">
            <div className="cat-tag">
              <div className="cat-label l-1"></div>
              <div className="cat-icn i-1"></div>
            </div>
            <div className="price-title">
              <h2>Free</h2>
            </div>
            <div className="consultation">
              Consultation
              <ul>
                <li>
                  <div className="tick-icn t-1"></div>Business Profiling
                </li>
                <li>
                  <div className="tick-icn-e"></div>Business plan
                </li>
                <li>
                  <div className="tick-icn-e"></div>Defining the business
                  process
                </li>
                <li>
                  <div className="tick-icn-e"></div>Social Media strategy
                </li>
              </ul>
            </div>
            <div className="staffing">
              Staffing
              <ul>
                <li>
                  <div className="tick-icn t-1"></div>Portal access for
                  on-demand hiring
                </li>
                <li>
                  <div className="tick-icn t-1"></div>Payment processing
                </li>
                <li>
                  <div className="tick-icn t-1"></div>Chat support for hiring
                </li>
                <li>
                  <div className="tick-icn-e"></div>Recruitment team
                </li>
                <li>
                  <div className="tick-icn-e"></div>Full time hiring
                </li>
                <li>
                  <div className="tick-icn-e"></div>Online Training for new hire
                </li>
                <li>
                  <div className="tick-icn-e"></div>Online Training portal
                </li>
              </ul>
            </div>
            <div className="digital-marketing">
              Digital Marketing
              <ul>
                <li>
                  <div className="tick-icn-e"></div>Website Hosting
                </li>
                <li>
                  <div className="tick-icn-e"></div>Website Maintenance
                </li>
                <li>
                  <div className="tick-icn-e"></div>Facebook Marketing (upto 3
                  post per week)
                </li>
                <li>
                  <div className="tick-icn-e"></div>Instagram Marketing (upto 3
                  post per week)
                </li>
                <li>
                  <div className="tick-icn-e"></div>X Marketing (upto 3 post per
                  week)
                </li>
                <li>
                  <div className="tick-icn-e"></div>Online review responses
                  (including Google)
                </li>
                <li>
                  <div className="tick-icn-e"></div>Analytics reports every week
                </li>
              </ul>
            </div>
          </div>

          <div className="price-card-2">
            <div className="cat-tag">
              <div className="cat-label l-2"></div>
              <div className="cat-icn i-2"></div>
            </div>
            <div className="price-title">
              <h2>$99</h2>
              <h5>/month</h5>
            </div>
            <div className="consultation">
              Consultation
              <ul>
                <li>
                  <div className="tick-icn t-2"></div>Business Profiling
                </li>
                <li>
                  <div className="tick-icn t-2"></div>Business plan
                </li>
                <li>
                  <div className="tick-icn t-2"></div>Defining the business
                  process
                </li>
                <li>
                  <div className="tick-icn-e"></div>Social Media strategy
                </li>
              </ul>
            </div>
            <div className="staffing">
              Staffing
              <ul>
                <li>
                  <div className="tick-icn t-2"></div>Portal access for
                  on-demand hiring
                </li>
                <li>
                  <div className="tick-icn t-2"></div>Payment processing
                </li>
                <li>
                  <div className="tick-icn t-2"></div>Chat support for hiring
                </li>
                <li>
                  <div className="tick-icn t-2"></div>Recruitment team
                </li>
                <li>
                  <div className="tick-icn t-2"></div>Full time hiring
                </li>
                <li>
                  <div className="tick-icn t-2"></div>Online Training for new
                  hire
                </li>
                <li>
                  <div className="tick-icn t-2"></div>Online Training portal
                </li>
              </ul>
            </div>
            <div className="digital-marketing">
              Digital Marketing
              <ul>
                <li>
                  <div className="tick-icn t-2"></div>Website Hosting
                </li>
                <li>
                  <div className="tick-icn t-2"></div>Website Maintenance
                </li>
                <li>
                  <div className="tick-icn-e"></div>Facebook Marketing (upto 3
                  post per week)
                </li>
                <li>
                  <div className="tick-icn-e"></div>Instagram Marketing (upto 3
                  post per week)
                </li>
                <li>
                  <div className="tick-icn-e"></div>X Marketing (upto 3 post per
                  week)
                </li>
                <li>
                  <div className="tick-icn-e"></div>Online review responses
                  (including Google)
                </li>
                <li>
                  <div className="tick-icn-e"></div>Analytics reports every week
                </li>
              </ul>
            </div>
          </div>
          <div className="price-card-3">
            <div className="cat-tag">
              <div className="cat-label l-3"></div>
              <div className="cat-icn i-3"></div>
            </div>
            <div className="price-title">
              <h2>$199</h2> <h5>/month</h5>
            </div>
            <div className="consultation">
              Consultation
              <ul>
                <li>
                  <div className="tick-icn t-3"></div>Business Profiling
                </li>
                <li>
                  <div className="tick-icn t-3"></div>Business plan
                </li>
                <li>
                  <div className="tick-icn t-3"></div>Defining the business
                  process
                </li>
                <li>
                  <div className="tick-icn t-3"></div>Social Media strategy
                </li>
              </ul>
            </div>
            <div className="staffing">
              Staffing
              <ul>
                <li>
                  <div className="tick-icn t-3"></div>Portal access for
                  on-demand hiring
                </li>
                <li>
                  <div className="tick-icn t-3"></div>Payment processing
                </li>
                <li>
                  <div className="tick-icn t-3"></div>Chat support for hiring
                </li>
                <li>
                  <div className="tick-icn t-3"></div>Recruitment team
                </li>
                <li>
                  <div className="tick-icn t-3"></div>Full time hiring
                </li>
                <li>
                  <div className="tick-icn t-3"></div>Online Training for new
                  hire
                </li>
                <li>
                  <div className="tick-icn t-3"></div>Online Training portal
                </li>
              </ul>
            </div>
            <div className="digital-marketing">
              Digital Marketing
              <ul>
                <li>
                  <div className="tick-icn t-3"></div>Website Hosting
                </li>
                <li>
                  <div className="tick-icn t-3"></div>Website Maintenance
                </li>
                <li>
                  <div className="tick-icn t-3"></div>Facebook Marketing (upto 3
                  post per week)
                </li>
                <li>
                  <div className="tick-icn t-3"></div>Instagram Marketing (upto
                  3 post per week)
                </li>
                <li>
                  <div className="tick-icn t-3"></div>X Marketing (upto 3 post
                  per week)
                </li>
                <li>
                  <div className="tick-icn t-3"></div>Online review responses
                  (including Google)
                </li>
                <li>
                  <div className="tick-icn t-3"></div>Analytics reports every
                  week
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End of Package and pricing */}
    </div>
  );
}
