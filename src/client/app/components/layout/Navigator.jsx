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
    const navigatorCollapsed = this.state.collapsed ? navigatorStyle.collapsed : navigatorStyle.normal;

    return (
      <nav>
        <div className={navigatorStyle.navigatorBar}>
          <div className={navigatorStyle.collapsedButton}>
            <button onClick={this.toggleCollapse.bind(this)}>
              Toggle navigation
            </button>
          </div>
          <div className={navigatorCollapsed}>
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
