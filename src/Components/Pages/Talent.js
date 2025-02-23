import "./Talent.css";
import card1 from "../Assets/Talent-page/card-1.png";
import card2 from "../Assets/Talent-page/card-2.png";
import card3 from "../Assets/Talent-page/card-3.png";
export function Talent() {
  return (
    <div className="talent-page">
      <div className="talent-title">Talent</div>
      {/* Start of Talent intro Section */}
      <div className="tal-content">
        <div className="left-section">
          <div className="talent-slogan">
            <div className="tal-line-1">Define your</div>
            <div className="tal-line-2">
              <div className="own-wrd">own</div>
              <div className="work-wrd">work</div>
            </div>
            <div className="tal-line-3">schedule</div>
          </div>
          <div className="tal-define">
            <p>
              Hussme offers a platform where you can set your own work schedule
              for gigs. Businesses will send gig requests based on your
              availability.
            </p>
          </div>
        </div>
        <div className="right-section"></div>
      </div>
      {/* End of Talent intro Section */}

      {/* Start of talent card Section */}
      <div className="bus-tal-card-back">
        <div className="bus-tal-card">
          <div className="bus-card-img">
            <div className="card-img">
              <img src={card1} alt="" />

              <p>
                Hussme offers a platform where you can set your own work
                schedule for gigs. Businesses will send gig requests based on
                your availability.
              </p>
            </div>
          </div>
          <div className="static-card-title">Set up your own work schedule</div>
        </div>
        <div className="bus-tal-card">
          <div className="bus-card-img">
            <div className="card-img">
              <img src={card2} alt="" />
              <p>
                Hussme offers online courses for training and guidance related
                to work requests.
              </p>
            </div>
          </div>
          <div className="static-card-title">Online Training and Assitance</div>
        </div>
        <div className="bus-tal-card">
          <div className="bus-card-img">
            <div className="card-img">
              <img src={card3} alt="" />
              <p>
                Payment settlements are processed within a day for quick and
                direct deposit to your bank account, ensuring easy handling.
              </p>
            </div>
          </div>
          <div className="static-card-title">Tax Support</div>
        </div>
      </div>
      {/* End of talent card Section*/}

      {/* Start of Talent Package  */}

      <div className="package-pricing">
        <div className="package-title">Package and Pricing</div>
        <div className="package-cards">
          <div className="talent-price-card-1">
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

          <div className="talent-price-card-2">
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

        </div>
      </div>

      {/* End of Talent Package  */}
    </div>
  );
}
