import React from "react";
import { Link } from "react-router";

import Navigator from "../components/layout/Navigator.jsx";
import HomePage from "./HomePage.jsx";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";

import LayoutPageStyle from "./layoutPage.css";

export default class LayoutPage extends React.Component {
  navigate() {
    this.props.history.pushState(null, "/")
  }

  render() {
    const { location } = this.props;

    return (
      <div>
        <Navigator />
        <div className={LayoutPageStyle.container}>
          <Header />
          {this.props.children}
          <Footer/>
        </div>
      </div>
    );
  }
}
