import React from 'react'
import { IndexLink, Link } from "react-router";

class Navigator extends React.Component {
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
    return (
      <nav>
        <div>
          <div>
            <button onClick={this.toggleCollapse.bind(this)}>
              Collapse!
            </button>
          </div>
          <div>
            <ul>
              <li>
                <IndexLink to='/'>Home</IndexLink>
              </li>
              <li>
                <IndexLink to='calculator'>Calculator</IndexLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigator
