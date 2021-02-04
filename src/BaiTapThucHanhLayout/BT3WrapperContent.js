import React, { Component } from "react";
import BT3Content from "./BT3Content";
import BT3SideBar from "./BT3SideBar";

export default class BT3WrapperContent extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-3">
            <BT3SideBar />
          </div>
          <div className="col-9">
            <BT3Content />
          </div>
        </div>
      </div>
    );
  }
}
