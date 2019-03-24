import React, { Component } from "react";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Karousel extends Component {
  render() {
    return (
      <div>
        <Carousel
          showThumbs={false}
          showArrows={false}
        //   autoPlay={true}
          showStatus={false}
          infiniteLoop={true}
        >
          <div>
            <img src="https://i.ibb.co/yWM0ygx/Whats-App-Image-2019-03-23-at-5-39-39-PM-1.jpg" />
            
          </div>
          <div>
            <img src="https://i.ibb.co/kSyYFvx/Whats-App-Image-2019-03-23-at-5-39-39-PM.jpg" />
            
          </div>
          <div>
            <img src="https://i.ibb.co/VLbrMkk/Whats-App-Image-2019-03-23-at-5-39-39-PM-2.jpg" />
            
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Karousel;
