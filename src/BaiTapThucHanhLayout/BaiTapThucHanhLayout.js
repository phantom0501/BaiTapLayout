import React, { Component } from "react";
import BT3Footer from "./BT3Footer";
import BT3Header from "./BT3Header";
import BT3WrapperContent from "./BT3WrapperContent";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <BT3Header />
        <BT3WrapperContent />
        <BT3Footer />
      </div>
    );
  }
}
