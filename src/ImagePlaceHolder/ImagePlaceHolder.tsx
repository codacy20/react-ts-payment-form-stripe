import React, { Component } from "react";
import "./ImagePlaceHolder.scss";

type ImagePlaceHolderState = {
  time: Date;
};
export default class ImagePlaceHolder extends Component<
  {},
  ImagePlaceHolderState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      time: new Date()
    };
  }
  tick() {
    this.setState({
      time: new Date()
    });
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div className="ImagePlaceHolder-container">
        <div className="img"></div>
      </div>
    );
  }
}
