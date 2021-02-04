import React, { Component } from "react";
import cssGlobal from "./BaiTapLayout.module.css";

export default class BT3SideBar extends Component {
  render() {
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <h1>Shop Name</h1>
        </div>
        <ul className="list-unstyled components">
          <li className={`${cssGlobal.sidebarEdit} ${cssGlobal.sidebarBorder}`}>
            <a
              href="#category-1"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle d-block py-2 px-2"
            >
              Category 1
            </a>
            <ul
              className={` collapse list-unstyled ${cssGlobal.itemChildPadding} `}
              id="category-1"
            >
              <li>
                <a href="#">Item 1</a>
              </li>
              <li>
                <a href="#">Item 2</a>
              </li>
              <li>
                <a href="#">Item 3</a>
              </li>
            </ul>
          </li>
          <li className={`${cssGlobal.sidebarEdit} ${cssGlobal.sidebarBorder}`}>
            <a
              href="#category-2"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle d-block py-2 px-2"
            >
              Category 2
            </a>
            <ul
              className={` collapse list-unstyled ${cssGlobal.itemChildPadding} `}
              id="category-2"
            >
              <li>
                <a href="#">Item 1</a>
              </li>
              <li>
                <a href="#">Item 2</a>
              </li>
              <li>
                <a href="#">Item 3</a>
              </li>
            </ul>
          </li>
          <li className={`${cssGlobal.sidebarEdit}`}>
            <a
              href="#category-3"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle d-block py-2 px-2"
            >
              Category 3
            </a>
            <ul
              className={` collapse list-unstyled ${cssGlobal.itemChildPadding} `}
              id="category-3"
            >
              <li>
                <a href="#">Item 1</a>
              </li>
              <li>
                <a href="#">Item 2</a>
              </li>
              <li>
                <a href="#">Item 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}
