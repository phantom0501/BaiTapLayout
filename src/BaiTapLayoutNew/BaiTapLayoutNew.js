import React, { Component } from "react";
import BT3Content from "./BT3Content";
import BT3Footer from "./BT3Footer";
import BT3Header from "./BT3Header";

export default class BaiTapLayoutNew extends Component {
  render() {
    return (
      <div>
        <BT3Header />
        <BT3Content />
        <BT3Footer />
      </div>
    );
  }
}
