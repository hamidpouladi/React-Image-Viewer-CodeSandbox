import React, { Component } from "react";
import ReactDom from "react-dom";
import Slider from "./components/slider";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Slider />;
  }
}
const root = document.getElementById("root");
ReactDom.render(<App />, root);
