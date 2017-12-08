import React from 'react'
import { Link } from "react-router-dom";

import navigatorStyle from './navigator.css';

export default class Navigator extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const navigatorCollapsed = this.state.collapsed ? "-collapsed" : "";

    return (
      <nav>
        <div>
          <div>
            <button onClick={this.toggleCollapse.bind(this)}>
              Collapse!
            </button>
          </div>
          <div className={navigatorStyle.navigatorCollapsed}>
            <ul>
              <li>
                <Link to={'/'} onClick={this.toggleCollapse.bind(this)}>Home</Link>
              </li>
              <li>
                <Link to={'/calculator'} onClick={this.toggleCollapse.bind(this)}>Calculator</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
