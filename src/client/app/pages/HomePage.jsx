import React from 'react'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-lg-12">
            <p>Home Page!</p>
          </div>
        </div>
      </footer>
    );
  }
}
