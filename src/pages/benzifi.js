import React from "react";
import "./styles/benzifi.css";
import { Link } from "react-router-dom";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import garageIcon from "../assets/garage-icon.svg";
import image1 from "../assets/left-slider-1.png";
import image2 from "../assets/left-slider-2.png";
import image3 from "../assets/left-slider-3.png";
import image4 from "../assets/left-slider-4.png";
import image5 from "../assets/left-slider-5.png";
import image6 from "../assets/left-slider-6.png";
import image7 from "../assets/left-slider-7.png";
import image8 from "../assets/left-slider-8.png";
import rightImage1 from "../assets/right-slider-1.png";
import rightImage2 from "../assets/right-slider-2.png";
import rightImage3 from "../assets/right-slider-3.png";
import rightImage4 from "../assets/right-slider-4.png";
import rightImage5 from "../assets/right-slider-5.png";
import rightImage6 from "../assets/right-slider-6.png";
import rightImage7 from "../assets/right-slider-7.png";
import rightImage8 from "../assets/right-slider-8.png";
import rightImage9 from "../assets/right-slider-9.png";
import meetupIcon from "../assets/meetup-icon.svg";
import communityIcon from "../assets/community-icon.svg";
import meetup from "../assets/meetup.png";
import community from "../assets/join-community.png";
import soon from "../assets/download.png";
import driveIcon from "../assets/drive-navigation-icon.svg";
import driveNav from "../assets/drive-navigation.png";
import forunIcon from "../assets/forum-icon.svg";
import tippingIcon from "../assets/tipping-icon.svg";
import tipping from "../assets/tipping.png";
import gearToken from "../assets/gear-token.png";
import carCafe from "../assets/car-cafe.png";
import playstoreIcon from "../assets/play-store.svg";

const Benzifi = () => {
  return (
    <>
      <div className="banner-wrapper">
        <div className="banner-container">
          <div className="banner-action">
            <div className="heading">
              <div className="item2">Earn.Meet.Drive</div>
              <div className="item3">
                The social media app for car enthusiasts
              </div>
            </div>
            <div className="button-wrapper">
              <button className="down-button">
                <Link>Download the app now</Link>
              </button>
              <button className="reserve-button">
                <Link>Reserve your username</Link>
              </button>
            </div>
            <div className="apps-wrapper">
              <button className="app-button">App Store</button>
              <button className="app-button" style={{ opacity: "0.5" }}>
                <img src={playstoreIcon} alt="playstore-icon" />
                Google Play Store
              </button>
            </div>
          </div>
          <div className="banner-image"></div>
          <img className="banner-card card1" src={card1} alt="card1" />
          <img className="banner-card card2" src={card2} alt="card2" />
          <div className="banner-left-card-container">
            <img className="card3" src={card3} alt="card3" />
            <img className="card4" src={card4} alt="card4" />
          </div>
          <div className="floating-banner-text-wrapper">
            <div className="floating-banner-text">
              <span>BENZIFIBENZIFIBENZIFI</span>
              <span>BENZIFIBENZIFIBENZIFI</span>
            </div>
          </div>
        </div>
      </div>
      <div className="section-wrapper feature-section">
        <p className="header-title">The only car app you will need</p>
        <div className="garage-section">
          <div className="title">
            <img src={garageIcon} alt="garage-icon" />
            <p class="section-header-title">Garage</p>
            <p class="section-header-cont">Show off your ride</p>
          </div>
          <div class="slider-wrapper-vertical">
            <div class="marquee-vertical">
              <div class="marquee__group">
                <img src={image1} alt="left-slider-1" />
                <img src={image2} alt="left-slider-2" />
                <img src={image3} alt="left-slider-3" />
                <img src={image4} alt="left-slider-4" />
                <img src={image5} alt="left-slider-5" />
                <img src={image6} alt="left-slider-6" />
                <img src={image7} alt="left-slider-7" />
                <img src={image8} alt="left-slider-8" />
              </div>
            </div>
            <div class="marquee-vertical-reverse">
              <div class="marquee__group">
                <img src={rightImage1} alt="right-slider-1" />
                <img src={rightImage2} alt="right-slider-2" />
                <img src={rightImage3} alt="right-slider-3" />
                <img src={rightImage4} alt="right-slider-4" />
                <img src={rightImage5} alt="right-slider-5" />
                <img src={rightImage6} alt="right-slider-6" />
                <img src={rightImage7} alt="right-slider-7" />
                <img src={rightImage8} alt="right-slider-8" />
                <img src={rightImage9} alt="right-slider-9" />
              </div>
            </div>
          </div>
        </div>
        <div className="split-section">
          <div className="inner-section">
            <div className="meetup-section">
              <div className="title">
                <img src={meetupIcon} alt="mettup-icon" />
                <p class="section-header-title">Meet up</p>
              </div>
              <img className="meetup-image" src={meetup} alt="meetup" />
              <img className="soon-icon-wrapper" src={soon} alt="soon" />
            </div>
            <div className="community-section">
              <div className="title">
                <img src={communityIcon} alt="community-icon" />
                <p class="section-header-title">Join Our Comunity</p>
              </div>
              <img
                className="community-image"
                src={community}
                alt="community"
              />
            </div>
          </div>
          <div className="inner-section">
            <div className="navi-section">
              <div className="title">
                <img src={driveIcon} alt="drvie-icon" />
                <p class="section-header-title">Drive Navigation</p>
              </div>
              <img src={driveNav} alt="drvie-nav" />
              <img className="soon-icon-wrapper" src={soon} alt="soon" />
            </div>
          </div>
        </div>
        <div className="split-section">
          <div className="inner-section">
            <div className="forum-section">
              <div className="title">
                <img src={forunIcon} alt="forun-icon" />
                <p class="section-header-title">Forum</p>
              </div>
              <div className="slider-wrapper">
                <div className="marquee">
                  <div class="marquee__group">
                    <p class="forum-item">
                      What is your favorite car brand and why?
                    </p>
                    <p class="forum-item">the best car for daily driving?</p>
                    <p class="forum-item">the best car for daily driving?</p>
                    <p class="forum-item">
                      What is your favorite car brand and why?
                    </p>
                    <p class="forum-item">the best car for daily driving?</p>
                    <p class="forum-item">the best car for daily driving?</p>
                  </div>
                </div>
                <div className="marquee-reverse">
                  <div class="marquee__group">
                    <p class="forum-item">
                      How has car culture changed over time?
                    </p>
                    <p class="forum-item">
                      What is the safest car on the market?
                    </p>
                    <p class="forum-item">best car for off-roading</p>
                    <p class="forum-item">
                      How has car culture changed over time?
                    </p>
                    <p class="forum-item">
                      What is the safest car on the market?
                    </p>
                    <p class="forum-item">best car for off-roading</p>
                  </div>
                </div>
                <div className="marquee">
                  <div class="marquee__group">
                    <p class="forum-item">
                      What is the most iconic car of all time?
                    </p>
                    <p class="forum-item">
                      How has car culture changed over time?
                    </p>
                    <p class="forum-item">
                      What is the safest car on the market?
                    </p>
                    <p class="forum-item">
                      What is the most iconic car of all time?
                    </p>
                    <p class="forum-item">
                      How has car culture changed over time?
                    </p>
                    <p class="forum-item">
                      What is the safest car on the market?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-section">
            <div className="tipping-section">
              <div className="title">
                <img src={tippingIcon} alt="tipping-icon" />
                <p class="section-header-title">Tipping</p>
                <p class="section-header-cont">
                  Show your appreciation by tipping others
                </p>
              </div>
              <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
                <img src={tipping} alt="tipping" />
              </div>
              <img className="soon-icon-wrapper" src={soon} alt="soon" />
            </div>
          </div>
        </div>

        <div class="item-wrapper">
          <div class="item">
          <img src={garageIcon} alt="garage-icon" />
          <p class="item-title">Garage</p>
            <p class="item-text">Show off your ride</p>
          </div>
          <div class="item">
          <img src={meetupIcon} alt="mettup-icon" />
          <p class="item-title">Meet up</p>
            <img className="soon-icon-wrapper avatar60x60" src={soon} alt="soon" />
          </div>
          <div class="item">
          <img src={communityIcon} alt="community-icon" />
          <p class="item-title">Join the community</p>
          </div>
          <div class="item">
          <img src={driveIcon} alt="drvie-icon" />
          <p class="item-title">Drive Navigation</p>
            <img className="soon-icon-wrapper avatar60x60" src={soon} alt="soon" />
          </div>
          <div class="item">
          <img src={forunIcon} alt="forun-icon" />
          <p class="item-title">Forum</p>
          </div>
          <div class="item tipping">
          <img src={tippingIcon} alt="tipping-icon" />
          <p class="item-title">Tipping</p>
            <p class="item-text">Show your appreciation and tip others</p>
            <img className="soon-icon-wrapper avatar60x60" src={soon} alt="soon" />
          </div>
        </div>
      </div>
      <div class="get-started-section-wrapper" id="gears">
        <div class="get-started-wrapper">
          <div class="inner-section">
            <div class="gear-token-wrapper">
              <p class="title">REDEEM YOUR EARNED GEARS FOR...</p>
              <img src={gearToken} alt="gear-token" />
            </div>
            <img className="soon-icon-wrapper" id="soonIcon" src={soon} alt="soon" />
          </div>
          <div class="inner-section">
            <div class="car-cafe-image">
              <img src={carCafe} class="cafe-image-style" />
            </div>
            <div class="sub-section">
              <div class="panel color1">INSURANCE</div>
              <div class="panel color2">CARWASH</div>
            </div>
            <div class="sub-section">
              <div class="panel color3">BENZIN</div>
              <div class="panel color4">COFFEE</div>
            </div>
          </div>
        </div>
      </div>
      <div id="join" class="footer-section-wrapper">
        <div class="footer-section-main">
          <div class="heading">
            <p class="item2">Earn.Meet.Drive</p>
            <p class="item3">The social media app for car enthusiasts</p>
          </div>
          <Link to="/join" class="down-button">
            Download the app now
          </Link>
          <div class="apps-wrapper">
            <Link
              to="https://apps.apple.com/us/app/benzifi/id6478466645"
              class="app-button"
              target="_blank"
            >
              <img src="/static/media/apple-icon.d5234a5f73a9e49c1470d172f6f44f57.svg" />
              App Store
            </Link>
            <button class="app-button" style={{ opacity: "0.5" }}>
              <img src={playstoreIcon} alt="playstore-icon" />
              Google Play(soon)
            </button>
          </div>
        </div>
        <div class="footer-information">
          <p class="copyright">© Proudly made in UAE by Benzifi</p>
          <div class="link-section">
            <Link class="link-text">Privacy Policy</Link>
            <Link class="link-text">Terms of Use</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benzifi;
