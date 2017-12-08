import React from "react";
import { Link } from "react-router";

import Navigator from "../components/layout/Navigator.jsx";

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
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>
              <Link to="archives" class="btn btn-danger">archives</Link>
              <Link to="settings">
                <button class="btn btn-success">settings</button>
              </Link>
              <button onClick={this.navigate.bind(this)}>feature</button>
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
