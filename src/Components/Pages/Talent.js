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
    </div>
  );
}
