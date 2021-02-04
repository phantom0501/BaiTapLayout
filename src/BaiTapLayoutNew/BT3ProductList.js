import React, { Component } from "react";
import BT3Product from "./BT3Product";

export default class BT3ProductList extends Component {
  render() {
    return (
      <div className="row py-3">
        <div className="col-lg-3 col-md-6 mb-4">
          <BT3Product />
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <BT3Product />
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <BT3Product />
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <BT3Product />
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <BT3Product />
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <BT3Product />
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <BT3Product />
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <BT3Product />
        </div>
      </div>
    );
  }
}
