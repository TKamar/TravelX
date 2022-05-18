import React, { useState } from "react";
import "../cssFiles/HeroSection.css";
import { Carousel, Container } from "react-bootstrap";
import BackgroundPic1 from "../assets/images/BackgroundPic1.jpg";
import BackgroundPic2 from "../assets/images/BackgroundPic2.jpg";
import BackgroundPic3 from "../assets/images/BackgroundPic3.jpg";

// import 'bootstrap/dist/css/bootstrap.min.css';
function HeroSection() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-75"
            src={BackgroundPic1}
            alt="team promo"
          />
          <Carousel.Caption className="d-md-block  d-none">
            <h3 className="display-3 w100">
              <span className="w900">Find </span>
              <span className="w400">the information YOU need</span>
            </h3>
            <p>Information about trips and destinations in the world</p>
            {/* Add button Team me up */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-75 "
            src={BackgroundPic2}
            alt="event-promo"
          />
          <Carousel.Caption className="d-md-block d-none">
            <h3 className="display-3 w100">
              <span className="w900">Best </span>
              Recommendations
            </h3>
            <p>All the best places and interesting things to do</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-75 "
            src={BackgroundPic3}
            alt="event-promo"
          />
          <Carousel.Caption className="d-md-block d-none">
            <h3 className="display-3 w100">
              <span className="w900">Live </span>
              Events
              <span className="w400"> Here</span>
            </h3>
            <p>All the infomation about live events in the destination</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export { HeroSection };
