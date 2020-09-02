import "./styles.scss";
import React, { Component } from "react";
import Layout from "./Layout/Layout";

type AppState = {
  time: Date;
};
export default class App extends Component<{}, AppState> {
  render() {
    return <Layout />;
  }
}
