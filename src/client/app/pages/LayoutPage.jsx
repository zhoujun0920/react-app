import React from "react";
import { Link } from "react-router";

import Navigator from "../components/layout/Navigator.jsx";
import HomePage from "./HomePage.jsx";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";

export default class LayoutPage extends React.Component {
  navigate() {
    this.props.history.pushState(null, "/")
  }

  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>
        <Navigator />
        <div className="container" style={containerStyle}>
          <Header />
          {this.props.children}
          <Footer/>
        </div>
      </div>
    );
  }
}
