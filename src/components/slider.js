import React, { Component } from "react";
import SlideOne from "./slideOne";
import SlideTwo from "./slideTwo";
import SlideThree from "./slideThree";
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideCount: 1
    };
  }
  render() {
    return (
      <div className="slider">
        {this.state.slideCount === 1 && <SlideOne />}
        {this.state.slideCount === 2 && <SlideTwo />}
        {this.state.slideCount === 3 && <SlideThree />}
      </div>
    );
  }
}
