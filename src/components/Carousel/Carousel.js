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
          autoPlay={true}
          showStatus={false}
          infiniteLoop={true}
        >
          <div>
            <img src="https://i.ibb.co/QKDN0kb/apex.jpg" />
            
          </div>
          <div>
            <img src="https://i.ibb.co/684L4hq/CSgo-poste.jpg" />
            
          </div>
          <div>
            <img src="https://i.ibb.co/X4CWQcd/pubg.jpg" />
            
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Karousel;
