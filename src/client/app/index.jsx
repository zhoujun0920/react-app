import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './components/AwesomeComponent.jsx';
import CardComponent from './components/CardComponent.jsx';

class App extends React.Component {
  render () {
    return (
        <div>
            <p> Heddo React project</p>;
            <AwesomeComponent />
            <CardComponent title='my card'/>
        </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
