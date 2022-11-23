import IMAGES from "./assets";
import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <header className="App-header">
            <div className="App-navigation-links">
                <a>Link1</a>
                <a>Link2</a>
                <a>Link3</a>
            </div>
            <img src={IMAGES.LOGO} className="App-logo" alt="logo" />
            <div className="App-link">
                <div>Explore</div>
            </div>
        </header>
    );
};

const BannerSection = () => {
    return (
        <>
            <section className="App-banner-section">
                <div className="App-banner-text">
                    <strong>Travel</strong> places and <strong>discover</strong>{" "}
                    something <strong>new</strong> and have <strong>fun</strong>
                </div>
                <img
                    src="https://source.unsplash.com/random/?city,night"
                    className="App-banner-image"
                />
            </section>
        </>
    );
};

const Footer = () => {
    return (
        <>
            <div className="App-footer">
                <ul className="App-footer-links">
                    <li className="App-footer-link">Link 1</li>
                    <li className="App-footer-link">Link 2</li>
                    <li className="App-footer-link">Link 3</li>
                </ul>
                <div className="App-footer-end-section">Copyright @ 2022 just-travel.com</div>
            </div>
        </>
    );
};

const BodySection = () => {

    const description = `The coastal paradise, Goa is not unknown to anyone.
    This tiny state in West India is famous for its
    plethora of beautiful beaches, great seafood,
    amazing nightlife, and thrilling watersports. Goa
    along with being a popular beach destination in
    India is a perfect honeymoon destination, a great
    getaway with friends, and an amazing family holiday
    place, which means, the place is filled with
    activities and attractions to keep all its visitors
    engaged. Goa also offers its visitors the chance to
    enjoy river carnivals; Rajbhavan Darshan; e-bikes
    tour; white water river rafting; hot air ballooning;
    birding tours at Dr Salim Ali Bird Sanctuary;
    Ayurveda massages; shopping; water activities like
    scuba diving and sea rafting; and other adventure
    activities like motorised paragliding, and bungee
    jumping.`;

    return (
        <div className="App-body-section">
            <h1>Pick your destination</h1>
            <div className="cardSection">
                <div className="cardBody tooltip">
                    <img className="cardImage" src={IMAGES.GOA_IMAGE} />
                    <div className="cardTitle">GOA</div>
                    <div class="tooltiptext">
                        <h1 className="tooltipTitle">Goa</h1>
                        <div className="tooltipDescription">{description}</div>
                    </div>
                </div>
                <div className="cardBody tooltip">
                    <img className="cardImage" src={IMAGES.GOA_IMAGE} />
                    <div className="cardTitle">GOA</div>
                    <div class="tooltiptext">
                        <h1 className="tooltipTitle">Goa</h1>
                        <div className="tooltipDescription">{description}</div>
                    </div>
                </div>
                <div className="cardBody tooltip">
                    <img className="cardImage" src={IMAGES.GOA_IMAGE} />
                    <div className="cardTitle">GOA</div>
                    <div class="tooltiptext">
                        <h1 className="tooltipTitle">Goa</h1>
                        <div className="tooltipDescription">{description}</div>
                    </div>
                </div>
                <div className="cardBody tooltip">
                    <img className="cardImage" src={IMAGES.GOA_IMAGE} />
                    <div className="cardTitle">GOA</div>
                    <div class="tooltiptext">
                        <h1 className="tooltipTitle">Goa</h1>
                        <div className="tooltipDescription">{description}</div>
                    </div>
                </div>
                <div className="cardBody tooltip">
                    <img className="cardImage" src={IMAGES.GOA_IMAGE} />
                    <div className="cardTitle">GOA</div>
                    <div class="tooltiptext">
                        <h1 className="tooltipTitle">Goa</h1>
                        <div className="tooltipDescription">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <Header />
            <BannerSection />
            <BodySection />
            <Footer />
        </div>
    );
}

export default App;
